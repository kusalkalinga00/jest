function isPalindrome(word) {
  return (
    word.toLowerCase() ===
    word.toLowerCase().split("").reverse().join("").replace(",", "")
  );
}

module.exports = isPalindrome;
