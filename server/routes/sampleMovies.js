const express = require("express");
const { connectToDatabase } = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = await connectToDatabase();

    const movies = await db
      .collection("movies")
      .find({})
      .limit(10)
      .toArray();

    res.status(200).json({
      message: "Movies fetched successfully",
      count: movies.length,
      movies: movies,
    });
  } catch (error) {
    console.error("GET /api/sample-movies error:", error);

    res.status(500).json({
      error: "Failed to fetch movies",
    });
  }
});


// hellloooo

module.exports = router;