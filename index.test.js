const { MarsRover } = require("./index");

describe("MarsRover", () => {
  test("should initialize with correct position and direction", () => {
    const rover = new MarsRover(4, 2, "EAST");
    expect(rover.getPosition()).toBe("(4, 2) EAST");
  });

  test("should move forward correctly", () => {
    const rover = new MarsRover(0, 0, "NORTH");
    rover.executeCommand("F");
    expect(rover.getPosition()).toBe("(0, 1) NORTH");
  });

  test("should move backward correctly", () => {
    const rover = new MarsRover(0, 0, "NORTH");
    rover.executeCommand("B");
    expect(rover.getPosition()).toBe("(0, -1) NORTH");
  });

  test("should rotate left correctly", () => {
    const rover = new MarsRover(0, 0, "NORTH");
    rover.executeCommand("L");
    expect(rover.getPosition()).toBe("(0, 0) WEST");
  });

  test("should rotate right correctly", () => {
    const rover = new MarsRover(0, 0, "NORTH");
    rover.executeCommand("R");
    expect(rover.getPosition()).toBe("(0, 0) EAST");
  });

  test("should execute a full command string", () => {
    const rover = new MarsRover(0, 0, "NORTH");
    rover.executeCommandString("FFRFF");
    expect(rover.getPosition()).toBe("(2, 2) EAST");
  });

  test("should throw an error for invalid command", () => {
    const rover = new MarsRover(0, 0, "NORTH");
    expect(() => rover.executeCommand("X")).toThrow("Invalid command: X");
  });
});
