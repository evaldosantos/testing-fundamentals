const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

test("sum adds numbers", () => {
  let result = sum(3, 7);
  let expected = 10;

  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  let result = subtract(7, 3);
  let expected = -4;

  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  let result = subtract(7, 3);
  let expected = 4;

  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`[ok] ${title}`);
  } catch (error) {
    console.error(`[x] ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
  };
}
