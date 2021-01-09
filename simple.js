const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

const sumAsync = (a, b) => Promise.resolve(a + b);
const subtractionAsync = (a, b) => Promise.resolve(a - b);

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

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractionAsync(7, 3);
  const expected = -4;

  expect(result).toBe(10);
});

test("sumAsync adds numbers asynchronously", async () => {
  const result = await sumAsync(7, 3);
  const expected = 10;

  expect(result).toBe(10);
});
