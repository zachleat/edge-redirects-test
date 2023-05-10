const { builder } = require("@netlify/functions")

async function handler(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World ODB" }),
  };
}

exports.handler = builder(handler);
