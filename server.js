const express = require("express");
const { MarsRover } = require("./index.js"); 

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Store rover instance in memory (simple approach)
let rover = null;

/**
 * Initialize the Mars Rover with position and direction
 * Example Request Body:
 * {
 *   "x": 0,
 *   "y": 0,
 *   "direction": "NORTH"
 * }
 */

app.post("/init", (req, res) => {
  const { x, y, direction } = req.body;
  
  if (!["NORTH", "EAST", "SOUTH", "WEST"].includes(direction)) {
    return res.status(400).json({ error: "Invalid direction" });
  }

  rover = new MarsRover(x, y, direction);
  res.json({ message: "Mars Rover initialized!", position: rover.getPosition() });
});

/**
 * Send commands to the Mars Rover
 * Example Request Body:
 * {
 *   "commands": "FFRFF"
 * }
 */
app.post("/move", (req, res) => {
  if (!rover) {
    return res.status(400).json({ error: "Rover not initialized" });
  }

  try {
    const { commands } = req.body;
    rover.executeCommandString(commands);
    res.json({ message: "Commands executed successfully", position: rover.getPosition() });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * Get the current position of the Mars Rover
 */
app.get("/position", (req, res) => {
  if (!rover) {
    return res.status(400).json({ error: "Rover not initialized" });
  }

  res.json({ position: rover.getPosition() });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Mars Rover API running on http://localhost:${PORT}`);
});
