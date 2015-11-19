/**
 * BaseTeam
 *
 * @param {String} client
 * @param {String} name
 * @param {String} color
 */
function BaseTeam(id)
{
    EventEmitter.call(this);

    this.id         = id;
    this.players    = new Collection([], 'id', true);
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
    this.players.add(player);
}

BaseTeam.prototype.removePlayer = function(player) {
    this.players.remove(player);
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
        id: this.id,
        players: this.players
    };
};
