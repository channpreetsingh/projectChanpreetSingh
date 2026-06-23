const express = require("express");
const { connectToDatabase } = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const db = await connectToDatabase();

    const { title, year, genre } = req.body;

    if (!title || !year) {
      return res.status(400).json({
        error: "Title and year are required",
      });
    }

    const newMovie = {
      title,
      year,
      genre: genre || "Unknown",
      createdAt: new Date(),
    };

    const result = await db.collection("practice_movies").insertOne(newMovie);

    res.status(201).json({
      message: "Movie created  hi successfully",
      movie: {
        _id: result.insertedId,
        ...newMovie,
      },
    });
  } catch (error) {
    console.error("POST /api/practice-movies error:", error);

    res.status(500).json({
      error: "Failed to create movie",
    });
  }
});

module.exports = router;