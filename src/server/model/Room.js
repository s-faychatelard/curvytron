/**
 * Room
 *
 * @param {String} name
 */
function Room(name)
{
    BaseRoom.call(this, name);

    this.controller = new RoomController(this);
}

Room.prototype = Object.create(BaseRoom.prototype);
Room.prototype.constructor = Room;

/**
 * Close
 */
Room.prototype.close = function()
{
    this.emit('close', {room: this});
};

/**
 * Add player
 *
 * @param {Player} player
 */
Room.prototype.addPlayer = function(player)
{
    var result = BaseRoom.prototype.addPlayer.call(this, player);

    if (result) {
        if (player.team === undefined) {
            this.teams.getByIndex(Math.floor(Math.random()*2)).addPlayer(player);
        }
        this.emit('player:join', {room: this, player: player});
    }

    return result;
};


/**
 * Remove player
 *
 * @param {Player} player
 */
Room.prototype.removePlayer = function(player)
{
    var result = BaseRoom.prototype.removePlayer.call(this, player);

    if (result) {
        for (var id in this.teams.items) {
            var team = this.teams.getByIndex(id);
            team.removePlayer(player);
        }
        this.emit('player:leave', {room: this, player: player});
    }

    return result;
};
