const {
  isAllCaps /*,
  countVowels,
  mergeAndSortArrays,
  findDuplicate,*/,
} = require("./tdd_own_test_cases");

describe("Checks String", () => {
  test("should return true because string is all Caps", () => {
    expect(isAllCaps("HELLO")).toBe(true);
  });
  test("should return false because string is not all Caps", () => {
    expect(isAllCaps("Hello")).toBe(false);
  });
});
