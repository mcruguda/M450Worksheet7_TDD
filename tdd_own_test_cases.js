function isAllCaps(wordToVerify) {
  if (wordToVerify === wordToVerify.toUpperCase()) return true;
  return false;
}

function countVowels(textToCount) {
  const count = (textToCount) =>
    Array.from(textToCount).filter((char) =>
      "aeiou".includes(char.toLowerCase())
    ).length;
  return count(textToCount);
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
function mergeAndSortArrays(unsortedArray1, unsortedArray2) {
  return unsortedArray1.concat(unsortedArray2).sort((a, b) => a - b);
}

function findDuplicate(arrayWithDuplicates) {
  return arrayWithDuplicates.filter(
    (value, index) => arrayWithDuplicates.indexOf(value) !== index
  );
}

module.exports = {
  isAllCaps,
  countVowels,
  mergeAndSortArrays,
  findDuplicate,
};
