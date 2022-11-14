// Leetcode question 151 reverse words in a string
// 
// Input: "string" 
// 
// expected output: "reversed string" 
// 
// O.O.B: 1 <= s.length <= 104 
// s contains English letters (upper-case and lower-case), digits, and spaces ' '
// There is at least one word in s.

// Test cases to try:
// let s = "the sky is blue";
// let s = "  hello world  ";
// let s = "a good   example";

// 
// to solve this I will use a 4 chained methods which I will describe bellow
// the split will split the string where there is a space
// the filter method will return a shallow array that removes unneccesary spaces
// the reverse will then take that array and reverse the order of elems
// the join will take each element and join to a str with the space as the seperator 
// 
var reverseWords = function (s) {
    return s.split(" ").filter((word) => word.length > 0).reverse().join(' ');
};

reverseWords(s);