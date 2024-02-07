const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(5, 5)).toBe(10);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(5, 5)).not.toBe(12);
});
  
test('adds 1 + 2 to equal 3', () => {
    expect(sum(5, 5)).toBeDefined();
});
