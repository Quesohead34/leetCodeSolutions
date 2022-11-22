// Leetcode question 2 Add two numbers
// 
// Input: two linked lists (arrays) thatre reversed
// 
// expected output: return the sum of both linked lists
// 
// O.O.B: each node in LL will have only 1 character & all non neg nums

// start by defining a func with two inputs
var addTwoNumbers = function (l1, l2) {
    // take two inputs and reverse them & join together to get proper num
    let rL1 = l1.reverse().join('');
    let rL2 = l2.reverse().join('');
    // convert reversed strings into a int to add (handles edge case for carry num)
    let finalArr = parseInt(rL1) + parseInt(rL2);
    return finalArr.toString().split('');

};

console.log(addTwoNumbers([9, 2, 1], [6, 5, 4]));