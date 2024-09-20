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

module.exports = { isAllCaps, countVowels /*, mergeArrays, findDuplicate*/ };
