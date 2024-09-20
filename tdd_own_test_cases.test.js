const {
  isAllCaps,
  countVowels,
  mergeAndSortArrays,
  findDuplicate,
} = require("./tdd_own_test_cases");

describe("Checks String", () => {
  test("should return true because string is all Caps", () => {
    expect(isAllCaps("HELLO")).toBe(true);
  });
  test("should return false because string is not all Caps", () => {
    expect(isAllCaps("Hello")).toBe(false);
  });

  test("Should count the vowls of a String", () => {
    expect(countVowels("Banana")).toBe(3);
  });
  test("Should count the vowls of a String", () => {
    expect(countVowels("Sky")).toBe(0);
  });
});

describe("Array manipulation", () => {
  test("Merges arrays and sorts values", () => {
    expect(mergeAndSortArrays([3, 1], [4, 2])).toEqual([1, 2, 3, 4]);
  });

  test("Returns only duplicates of an array", () => {
    expect(findDuplicate([1, 2, 2, 3, 4, 4])).toEqual([2, 4]);
  });
});
