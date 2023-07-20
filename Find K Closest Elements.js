// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:

// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b
 

// Example 1:

// Input: arr = [1,2,3,4,5], k = 4, x = 3
// Output: [1,2,3,4]
// Example 2:

// Input: arr = [1,2,3,4,5], k = 4, x = -1
// Output: [1,2,3,4]
 

// Constraints:

// 1 <= k <= arr.length
// 1 <= arr.length <= 104
// arr is sorted in ascending order.
// -104 <= arr[i], x <= 104

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  let left = 0,
    right = arr.length - 1,result = [];

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  left = right
  right = left + 1;

  while (result.length < k) {
      if (arr[left] !== undefined && arr[right] !== undefined) {
        if (x - arr[left] <= arr[right] - x && arr[left] < arr[right]) {
            result.unshift(arr[left]);
            left -= 1;
        } else {
          result.push(arr[right]);
          right += 1;
        }
      } else if (arr[left] !== undefined) {
        result.unshift(arr[left]);
        left -= 1;
      } else if (arr[right] !== undefined) {
        result.push(arr[right]);
        right += 1;
      }
  }

  return result;
};
