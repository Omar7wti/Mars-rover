# Mars Rover API

## Description
This project simulates a Mars Rover that moves based on given commands. The rover can:
- Move forward (`F`) and backward (`B`)
- Rotate left (`L`) and right (`R`)
- Report its current position and heading

## Technologies Used
- **JavaScript** (ES6)
- **Node.js** with Express.js (for API)
- **Jest** (for testing)

## Setup and Installation

### 1. Clone the Repository
```sh
git clone <repo-link>
cd mars-rover
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the API Server
```sh
npm start
```
The server will start at `http://localhost:3000`

## API Endpoints

### Initialize Rover
**POST** `/init`
#### Request Body:
```json
{
  "x": 0,
  "y": 0,
  "direction": "NORTH"
}
```
#### Response:
```json
{
  "message": "Mars Rover initialized!",
  "position": "(0, 0) NORTH"
}
```

### Move Rover
**POST** `/move`
#### Request Body:
```json
{
  "commands": "FFRFF"
}
```
#### Response:
```json
{
  "message": "Commands executed successfully",
  "position": "(2, 2) EAST"
}
```

### Get Rover Position
**GET** `/position`
#### Response:
```json
{
  "position": "(2, 2) EAST"
}
```

## Running Tests
Run unit tests with:
```sh
npm test
```

## Notes
- The rover does not fall off the edge, as Mars is a globe.
- Only Part 1 of the challenge has been implemented.

## Author
Omar Adel

