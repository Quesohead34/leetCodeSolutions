// Leetcode question 206 Reverse Linked List
// 
// Input: head of single linked list
// 
// expected output: return reversed linked list
// 
// O.O.B: The number of nodes in the list is the range [0, 5000].

// Start by creating a LL 
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}



var reverseList = function (head) {
    // start by defining two pointers what new prev node is and what current will be
    let prev = null;
    let current = head;
    while (current) {
        // next var will help us continue through loop
        let next = current.next;
        // redefine what the next node for current traversal (this is where LL flips pointer)
        current.next = prev;
        // reasign prev to current so that on next itteration we have current pointing to the proper node
        prev = current;
        // use next var to continue through loop
        current = next;
    }
    // return new head of LL which will end up being prev
    return prev;
};
