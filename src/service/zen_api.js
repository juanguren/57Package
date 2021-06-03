const fetch = require("node-fetch");

const getQuote = async () => {
  const response = await fetch("https://zenquotes.io/api/random");
  return response.json();
};

module.exports = getQuote;
