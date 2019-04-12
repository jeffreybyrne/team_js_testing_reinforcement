const teamObj = require('./team.js');

test('can create a new team with no params', () => {
    let newTeam = teamObj();
    const expectedTeam = {
        teamName: undefined,
        level: undefined,
        points: 0
    };
    expect(expectedTeam).toEqual(newTeam);
});

test('providing a name creates a team with that name', () => {
    let newTeam = teamObj('Maple Leafs');
    const expectedTeam = {
        teamName: 'Maple Leafs',
        level: undefined,
        points: 0
    };
    expect(expectedTeam).toEqual(newTeam);
});

test('providing only one param uses that as a name', () => {
    let newTeam = teamObj(level=5);
    const expectedTeam = {
        teamName: 5,
        level: undefined,
        points: 0
    };
    expect(expectedTeam).toEqual(newTeam);
});