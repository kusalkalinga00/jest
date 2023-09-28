const isPalindrome = require("./isPalindrome");

test("isPalindrome function exists", () => {
  expect(isPalindrome("Tacocat")).toBe(true);
});

test("isPalindrome function exists", () => {
  expect(isPalindrome("Kusal")).toBe(false);
});
