//https://www.freecodecamp.org/news/how-to-format-number-as-currency-in-javascript-one-line-of-code/
function formatCurrency(amountOfMoney) {
  const US_DOLLAR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return US_DOLLAR.format(amountOfMoney);
}

//https://www.geeksforgeeks.org/convert-2d-array-to-object-using-map-or-reduce-in-javascript/
function transformArrayToObject(arrayToTransform) {
  const transformedArray = arrayToTransform.reduce((element, [key, value]) => {
    element[key] = value;
    return element;
  }, {});
  return transformedArray;
}

//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(textToCapitalize) {
  return textToCapitalize.charAt(0).toUpperCase() + textToCapitalize.slice(1);
}

//https://stackoverflow.com/questions/2970525/converting-a-string-with-spaces-into-camel-case
function convertToCamelCase(textToConvert) {
  return textToConvert
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

module.exports = {
  formatCurrency,
  transformArrayToObject,
  capitalizeFirstLetter,
  convertToCamelCase,
};
