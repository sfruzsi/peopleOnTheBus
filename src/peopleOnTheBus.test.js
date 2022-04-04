const peopleOnTheBus = require('./peopleOnTheBus');
describe('User story 1', () => {
  it('Given bus with stop [0,0] When calculating Then reuslt should be 0', () => {
    expect(peopleOnTheBus([0,0])).toBe(0);
  });
});
