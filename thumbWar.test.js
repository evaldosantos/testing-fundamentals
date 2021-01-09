require("./__mocks__/utils");
const utilsPath = require.resolve("./utils");
const mockUtilsPath = require.resolve("./__mocks__/utils");
require.cache[utilsPath] = require.cache[mockUtilsPath];

const assert = require("assert");
const thumbWar = require("./thumbWar");
const utils = require("./utils");

const winner = thumbWar("Evaldo", "Pedro");
assert.strictEqual(winner, "Evaldo");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Evaldo", "Pedro"],
  ["Evaldo", "Pedro"],
]);

delete require.cache[utils.path];
