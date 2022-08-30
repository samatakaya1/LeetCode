// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
  
    const queue = [];
  
    const brackets = {
      "(": ")",
      "[": "]",
      "{": "}"
    };
  
    const sArr = s.split("");
  
    for (let i = 0; i < sArr.length; i++) {
      const tempBracket = sArr[i];
  
      if (brackets[tempBracket]) {
        queue.push(tempBracket);
      } else {
        const lastInQueue = queue[queue.length - 1];
  
        if (brackets[lastInQueue] === tempBracket) {
          queue.pop();
        } else {
          return false;
        }
      }
    }
    return !queue.length;
  };