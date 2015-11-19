/**
 * Team
 */
function Team(id, room)
{
    BaseTeam.call(this, id, room);

    this.elements     = {
        roundScore: null,
        score: null
    };
}

Team.prototype = Object.create(BaseTeam.prototype);
Team.prototype.constructor = Team;
