const getQuote = require("./service/zen_api");
const { mockObject } = require("./mocks");

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
            final = Math.pow(value, 3);
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
