/**
 * BaseTeam
 *
 * @param {String} client
 * @param {String} name
 * @param {String} color
 */
function BaseTeam(id, room)
{
    EventEmitter.call(this);

    this.id         = id;
    this.room       = room;
}

BaseTeam.prototype = Object.create(EventEmitter.prototype);
BaseTeam.prototype.constructor = BaseTeam;

/**
 * Max layer per team
 *
 * @type {Number}
 */
BaseTeam.prototype.maxPlayer = 5;

BaseTeam.prototype.addPlayer = function(player) {
    player.team = this.id;
    this.emit('team:changed', {player: player});
}

BaseTeam.prototype.removePlayer = function(player) {
    player.team = null;
    this.emit('team:changed', {player: player});
}

BaseTeam.prototype.roundScore = function() {
    var roundScore = 0;
    for (var id in this.room.players.items) {
        var player = this.room.players.getByIndex(id);
        if (player.team == this.id) {
            roundScore += player.getAvatar().roundScore;
        }
    }
    return Math.floor(roundScore/this.room.players.items.length*10);
}

BaseTeam.prototype.score = function() {
    var score = 0;
    for (var id in this.room.players.items) {
        var player = this.room.players.getByIndex(id);
        if (player.team == this.id) {
            score += player.getAvatar().score;
        }
    }
    return Math.floor(score/this.room.players.items.length*10);
}

/**
 * Equal
 *
 * @param {Team} team
 *
 * @return {Boolean}
 */
BaseTeam.prototype.equal = function(team)
{
    return this.id === team.id;
};

/**
 * Serialize
 *
 * @return {Object}
 */
BaseTeam.prototype.serialize = function()
{
    return {
        id: this.id
    };
};
