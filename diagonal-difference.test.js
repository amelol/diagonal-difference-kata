let diagonalDifference = require("./diagonal-difference");

describe("testing diagonalDifference", () => {
  test("test if the difference between diagonal sums of 2d matrix is correct", () => {
    let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
    expect(diagonalDifference(arr)).toBe(15)
  })
})