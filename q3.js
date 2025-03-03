'use strict';

// Define the SinglyLinkedListNode class
class SinglyLinkedListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Helper function to create a linked list from array
function createLinkedList(arr) {
    if (!arr.length) return null;
    const head = new SinglyLinkedListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new SinglyLinkedListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array for easy comparison
function linkedListToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.data);
        current = current.next;
    }
    return result;
}

function condense(head) {
    if (!head || !head.next) {
        return head;
    }
    
    // Set to keep track of seen values
    const seen = new Set();
    seen.add(head.data);
    
    let current = head;
    
    // Traverse the list
    while (current.next) {
        // If we've seen this value before
        if (seen.has(current.next.data)) {
            // Skip the duplicate node
            current.next = current.next.next;
        } else {
            // Add new value to seen set
            seen.add(current.next.data);
            current = current.next;
        }
    }
    
    return head;
}

// Test cases
function runTests() {
    const log = (msg) => process.stdout.write(msg + '\n');

    // Test Case 1: Example from the problem
    log("Test Case 1:");
    let list1 = createLinkedList([3, 4, 3, 2, 6, 1, 2, 6]);
    let result1 = linkedListToArray(condense(list1));
    log(`Input:  [3, 4, 3, 2, 6, 1, 2, 6]`);
    log(`Output: [${result1.join(', ')}]`);
    log(`Expected: [3, 4, 2, 6, 1]`);
    
    // Test Case 2: Empty list
    log("\nTest Case 2:");
    let list2 = createLinkedList([]);
    let result2 = linkedListToArray(condense(list2));
    log(`Input: []`);
    log(`Output: [${result2.join(', ')}]`);
    log(`Expected: []`);
    
    // Test Case 3: Single element
    log("\nTest Case 3:");
    let list3 = createLinkedList([1]);
    let result3 = linkedListToArray(condense(list3));
    log(`Input: [1]`);
    log(`Output: [${result3.join(', ')}]`);
    log(`Expected: [1]`);
    
    // Test Case 4: All duplicates
    log("\nTest Case 4:");
    let list4 = createLinkedList([1, 1, 1, 1]);
    let result4 = linkedListToArray(condense(list4));
    log(`Input: [1, 1, 1, 1]`);
    log(`Output: [${result4.join(', ')}]`);
    log(`Expected: [1]`);
}

// Run the tests
runTests();
