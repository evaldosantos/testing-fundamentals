const utilsPath = require.resolve("./utils");
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1),
  },
};

function fn(impl) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };

  mockFn.mock = { calls: [] };
  mockFn.mockImplementation = (newImpl) => (impl = newImpl);

  return mockFn;
}

function spyOn(obj, prop) {
  const originalValue = obj[prop];
  obj[prop] = fn();
  obj[prop].mockRestore = () => (obj[prop] = originalValue);
}

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
