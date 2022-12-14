// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

// ==================================================================================================================

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const result = [[1]];

    for (let i = 1; i < numRows; i++) {
        const secondResultElement = result[result.length - 1];
        if (secondResultElement.length > 1) {
            const sumElements = secondResultElement.reduce(
                (acc, curr, index) => {
                    if (secondResultElement[index + 1]) {
                        acc.push(curr + secondResultElement[index + 1]);
                    }
                    return acc;
                },
                []
            );
            result[i] = [1, ...sumElements, 1];
        } else {
            result[i] = [1, 1];
        }
    }
    return result;
};
