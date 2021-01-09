const assert = require("assert");
const thumbWar = require("./thumbWar");
const utils = require("./utils");

const originalGetWinner = utils.getWinner;
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Evaldo", "Pedro");
assert.strictEqual(winner, "Evaldo");

utils.getWinner = originalGetWinner;
