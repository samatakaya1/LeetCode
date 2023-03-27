// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  if (nums.length <= 2) return nums[0];
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return nums[i];
    } else {
      hashMap[nums[i]] = true;
    }
  }
};
