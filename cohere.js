const Cohere = require('cohere-ai');
require('dotenv').config();

const cohere = new Cohere.Client({
  apiKey: process.env.COHERE_API_KEY,
});

module.exports = cohere;