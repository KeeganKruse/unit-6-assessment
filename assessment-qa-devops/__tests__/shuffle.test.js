const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return array', () => {
    expect(shuffle).not.toBeNull()
  })

  test('retrun equal values', () => {
    expect(shuffle).toEqual(shuffle)
  })
});
