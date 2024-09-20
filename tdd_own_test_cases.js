function isAllCaps(wordToVerify) {
  if (wordToVerify === wordToVerify.toUpperCase()) return true;
  return false;
}

module.exports = { isAllCaps /*, countVowels, mergeArrays, findDuplicate*/ };
