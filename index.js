function isPalindrome(word) {
  // Write your algorithm here
    for(let n= 0; n < Math.floor(word.length/2); n++) {
      if(word.charAt(n) === word.charAt(word.length - (n + 1))) {
        null
      }
      else {
        return false
      }
    }
    return true
}

/* 
  Add your pseudocode here
  simple loop that iterates over each character for half the length of the string, rounded down for words with an odd number of letters.
  checks if the character at the nth position is equal to the character at the -nth position
  if at any point that test returns false the function returns false as well
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("deed"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("dead"));
}

module.exports = isPalindrome;
