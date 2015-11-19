/**
 * Team
 */
function Team(id, room)
{
    BaseTeam.call(this, id, room);
}

Team.prototype = Object.create(BaseTeam.prototype);
Team.prototype.constructor = Team;
