const assert = require("assert");
const thumbWar = require("./thumbWar");
const utils = require("./utils");

function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };

  mockFn.mock = { calls: [] };

  return mockFn;
}

const originalGetWinner = utils.getWinner;
utils.getWinner = fn((p1, p2) => p1);

const winner = thumbWar("Evaldo", "Pedro");
assert.strictEqual(winner, "Evaldo");
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Evaldo", "Pedro"],
  ["Evaldo", "Pedro"],
]);

utils.getWinner = originalGetWinner;
