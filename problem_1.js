/**
 * Problem 1: Valid Parentheses
 * Validates whether string open brackets close correctly and sequentially.
 */
function isValidParentheses(s) {
    // Array behaves as a stack structural tracker
    let stack = [];
    
    // Key map matching close keys back to open values
    let bracketsMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        // Check if character is a closing bracket
        if (char === ')' || char === '}' || char === ']') {
            // Retrieve top element from stack; default to a placeholder if empty
            let topElement = stack.length > 0 ? stack.pop() : '#';
            
            // Check if the closing bracket matches the last opening bracket
            if (bracketsMap[char] !== topElement) {
                return false;
            }
        } else if (char === '(' || char === '{' || char === '[') {
            // Push active opening bracket into stack validation layer
            stack.push(char);
        }
    }

    // Execution sequence returns true if all brackets safely matched up
    return stack.length === 0;
}

// --- Test Cases Execution Log ---
console.log("--- Test Cases: Problem 1 ---");
console.log('Test Case "()": ', isValidParentheses("()"));       // Expected output: true
console.log('Test Case "()[]{}": ', isValidParentheses("()[]{}")); // Expected output: true
console.log('Test Case "(]": ', isValidParentheses("(]"));       // Expected output: false
console.log('Test Case "([)]": ', isValidParentheses("([)]"));   // Expected output: false
console.log('Test Case "{[]}": ', isValidParentheses("{[]}"));   // Expected output: true