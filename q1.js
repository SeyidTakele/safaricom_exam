/**
 * Manipulates a student record object by either editing or deleting a property
 * @param {Object} obj - The input object to manipulate
 * @param {string} operation - The operation to perform ('edit' or 'delete')
 * @param {string} prop - The property to modify
 * @param {string} newValue - The new value for edit operation
 * @returns {Object} - A new object with the requested modification
 */
function manipulateStudentRecord(obj, operation, prop, newValue) {
    // Create a new object to avoid modifying the original
    const result = { ...obj };
    
    // Check if the property exists in the object
    if (prop in obj) {
        if (operation === 'delete') {
            // Delete the property if operation is 'delete'
            delete result[prop];
        } else if (operation === 'edit') {
            // Update the property value if operation is 'edit'
            result[prop] = newValue;
        }
    }
    
    return result;
}

function processInput(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    
    // Create the initial object from input
    const obj = {};
    for (let i = 1; i <= n; i++) {
        const [prop, value] = lines[i].trim().split(' ');
        obj[prop] = value;
    }
    
    // Get operation parameters from the last line
    const [operation, prop, newValue] = lines[n + 1].trim().split(' ');
    
    // Perform the operation
    const result = manipulateStudentRecord(obj, operation, prop, newValue);
    
    // Print results in alphabetical order
    Object.keys(result)
        .sort()
        .forEach(key => {
            console.log(`${key} ${result[key]}`);
        });
}

// Test Case 0
const input0 = `3
name John
lastName Bliss
city Florida
edit city Seattle`;

console.log("Sample Case 0 Output:");
processInput(input0);

// Test Case 1
const input1 = `3
name John
lastName Bliss
city Florida
delete city`;

console.log("\nSample Case 1 Output:");
processInput(input1);

// Test Case 2
const input2 = `3
name John
lastName Bliss
city Florida
edit abc Tor`;

console.log("\nSample Case 2 Output:");
processInput(input2); 