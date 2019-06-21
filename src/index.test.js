const echo = require('./index');

describe("test block", () => {
  test("expect a match", () => {
    expect(echo('hello world')).toBe('hello world');
  });
  test("expect no match", () => {
    expect(echo('goodbye cruel world')).not.toBe('a bed of roses');
  });
})
