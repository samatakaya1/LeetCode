// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.

// Constraints:

// 0 <= x <= 231 - 1

// ==================================================================================================================

/**
 * @param {number} x
 * @return {number}
 */

// 1 var

var mySqrt = function (x) {
    if (x <= 1) return x;

    let left = 0;
    let right = x;

    while (left + 1 < right) {
        let middle = Math.trunc(left + (right - left) / 2);
        if (middle ** 2 === x) return middle;
        if (middle ** 2 > x) {
            right = middle;
        } else {
            left = middle;
        }
    }

    return right - 1;
};

// 2 var

var mySqrt = function (x) {
    if (x <= 1) return x;

    for (let i = 2; i <= x; i++) {
        if (i * i === x) return i;
        if (i * i > x) return i - 1;
    }
};
