const bar = require('bar');

describe('bar', () => {
  test('returns a string', () => {
    expect(bar()).toEqual('this is bar');
  });
});
