const teamObj = require('./team.js');

test('can create a new team with no params', () => {
    newTeam = teamObj();
    const expectedTeam = {
        teamName: undefined,
        level: undefined,
        points: 0
    }
    expect(expectedTeam).toEqual(newTeam)
})