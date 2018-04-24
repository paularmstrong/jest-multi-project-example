const foo = require('foo');

describe('foo', () => {
  test('returns bar', () => {
    expect(foo()).toEqual('this is bar');
  });
});
