// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
    let i = 0;
    const prefix = strs.reduce((acc, str) => {
      while (strs.every((el) => el?.[i] === str?.[i])) {
        acc.push(str[i]);
        i++;
      }
      return acc;
    }, []);
  
    return prefix.join("");
  };