class MarsRover {
  constructor(x, y, direction) {
    this.x = x;
    this.y = y;

    // Convert input direction to uppercase
    const upperDirection = direction.toUpperCase();

    // Define allowed directions in uppercase
    this.directions = ["NORTH", "EAST", "SOUTH", "WEST"];

    // Validate direction
    if (!this.directions.includes(upperDirection)) {
      throw new Error(`Invalid direction: ${direction}. Allowed values are NORTH, EAST, SOUTH, WEST.`);
    }

    this.direction = upperDirection;

    // Define movement vectors for each direction (x, y)
    this.movementVectors = {
      "NORTH": [0, 1],
      "EAST": [1, 0],
      "SOUTH": [0, -1],
      "WEST": [-1, 0]
    };

    this.commands = {
      "F": () => this.moveForward(),
      "B": () => this.moveBackward(),
      "L": () => this.rotateLeft(),
      "R": () => this.rotateRight()
    };
  }

  executeCommand(command) {
    const commandFunction = this.commands[command];

    if (!commandFunction) {
      throw new Error(`Invalid command: ${command}`);
    }

    return commandFunction();
  }

  executeCommandString(commandString) {
    for (const command of commandString) {
      this.executeCommand(command);
    }

    return this;
  }

  moveForward() {
    const [dx, dy] = this.movementVectors[this.direction];
    this.x += dx;
    this.y += dy;
    return true;
  }

  moveBackward() {
    const [dx, dy] = this.movementVectors[this.direction];
    this.x -= dx;
    this.y -= dy;
    return true;
  }

  rotateLeft() {
    const currentIndex = this.directions.indexOf(this.direction);
    const newIndex = (currentIndex - 1 + 4) % 4; // +4 to handle negative modulo
    this.direction = this.directions[newIndex];
    return true;
  }

  rotateRight() {
    const currentIndex = this.directions.indexOf(this.direction);
    const newIndex = (currentIndex + 1) % 4;
    this.direction = this.directions[newIndex];
    return true;
  }

  getPosition() {
    return `(${this.x}, ${this.y}) ${this.direction}`;
  }
}

module.exports = { MarsRover };
