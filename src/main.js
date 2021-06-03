const getQuote = require("./service/zen_api");
const { mockObject } = require("./mocks");
/**
 * Instructions:
 *  1. "largest" (Looks for an array)    --> Map array under x key name and return its largest number
 *  2. "quote" (Doesn't look for any particular key/value. Simply returns an inspiring quote)      --> Generate a random zen quote
 *  3. "pow" (Looks for a number)        --> Returns number multiplied by itself
 *  4. "backwards" (Looks for a string)  --> Returns a reversed string
 */

const executeSelectionLogic = async (value, instruction) => {
  let final = null;
  try {
    if (value && instruction) {
      switch (instruction) {
        case "largest":
          if (Array.isArray(value)) {
            const findLargest = value.reduce((acc, cv) => {
              return Math.max(acc, cv);
            });
            final = findLargest;
            break;
          }
          throw new Error(`${value} is not an Array`);

        case "quote":
          const quote = await getQuote();
          final = quote[0].q;
          break;

        case "pow":
          if (typeof value == "number") {
            final = value * value;
            break;
          }
          throw new Error(`${value} is not a Number`);

        case "backwards":
          if (typeof value == "string") {
            const backwards = value.split("").reverse().join("");
            final = backwards;
            break;
          }
          throw new Error(`${value} is not a String`);

        default:
          break;
      }
    }
    console.log(final);
  } catch (error) {
    console.log(error);
  }
};

const findKeyValueInObject = (object, targetKey, instruction) => {
  for (const key in object) {
    if (key === targetKey) {
      executeSelectionLogic(object[key], instruction);
    } else if (typeof object[key] === "object") {
      findKeyValueInObject(object[key], targetKey, instruction);
    }
  }
};

findKeyValueInObject(mockObject, "deepArray", "largest");
