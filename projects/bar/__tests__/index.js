const bar = require('../');

describe('bar', () => {
  test('returns a string', () => {
    expect(bar()).toEqual('this is bar');
  });
});
