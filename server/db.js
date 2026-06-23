const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is missing from .env file");
}

const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
  if (db) {
    return db;
  }

  await client.connect();

  db = client.db("sample_mflix");

  console.log("Connected to MongoDB database: sample_mflix");

  return db;
}

module.exports = { connectToDatabase };