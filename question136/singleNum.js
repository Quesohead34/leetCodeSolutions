// Leetcode question 136 single number
// 
// Input: [nums] 
// 
// expected output: return the onlu number in given arr that doesnt repeat
// 
// O.O.B: 1 <= nums.length <= 3 * 10^4 
// -3 * 104 <= nums[i] <= 3 * 104
// has to run in linear runtime

// Test cases to try:
// [2,2,1]
// [4,1,2,1,2]
// [1]


var singleNumber = function (nums) {
    // handle edge case where arr only has 1 elem
    if (nums.length === 1) return nums[0];

    let result = 0
    nums.forEach(elem => {
        // using bitwise XOR to compare elem to 0 and cancel repeats
        result = result ^ elem
    });

    // return remaining val after array has been traversed and compared using XOR
    return result;
};