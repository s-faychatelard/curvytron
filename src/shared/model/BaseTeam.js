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
