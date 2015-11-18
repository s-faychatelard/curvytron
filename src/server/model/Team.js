/**
 * Team
 */
function Team(id)
{
    BaseTeam.call(this, id);
}

Team.prototype = Object.create(BaseTeam.prototype);
Team.prototype.constructor = Team;
