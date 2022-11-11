// Leetcode question 9 is given val a palindrome
// 
// Input: [nums] in form of arr
// 
// expected output: T or F (true if isPalindrome)
// 
// O.O.B: -2^31 <= x <= 2^31 - 1

// Test cases to try:
// [3,2,1]
// [1,2,3]
// [1,2,1]
// [-1,2,1];

var isPalindrome = function (x) {
    // converted input to str & split each char then reversed and joined back to arr
    // also compared reversed arr w original using non strict equal as two dif data types
    return x.toString().split('').reverse().join('') == x ? true : false;
}