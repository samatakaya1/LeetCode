/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1
    
    for(_; k <= nums.length; k++){
         if(nums[k + 1] === undefined){
            break;
        }

        if(nums[k - 1] === nums[k] && nums[k] === nums[k + 1]){
            nums.splice(k - 1, 1)
            k -= 1
        }
    }

    return k + 1;
};