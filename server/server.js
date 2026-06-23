require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db");
const sampleMoviesRoutes = require("./routes/sampleMovies");
const practiceMoviesRoutes = require("./routes/practiceMovies");

const app = express();

app.use(cors());
app.use(express.json());

// hey this is chann
app.use("/api/sample-movies", sampleMoviesRoutes);
app.use("/api/practice-movies", practiceMoviesRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend API is running",
  });
});

app.get("/api/db-test", async (req, res) => {


  try {
    const db = await connectToDatabase();

    const collections = await db.listCollections().toArray();

    res.status(200).json({
      message: "MongoDB connection successful",
      database: "sample_mflix",
      collections: collections.map((collection) => collection.name),
    });
  } catch (error) {
    console.error("Database test error:", error);

    res.status(500).json({
      error: "Failed to connect to MongoDB",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});