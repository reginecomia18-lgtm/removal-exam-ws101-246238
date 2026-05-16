function isValidParentheses(s) {
    let stack = [];
    let bracketsMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === ')' || char === '}' || char === ']') {
            let topElement = stack.length > 0 ? stack.pop() : '#';
            
            if (bracketsMap[char] !== topElement) {
                return false;
            }
        } else if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// --- Test Cases Execution Log ---
console.log("--- Test Cases: Problem 1 ---");
console.log('Test Case "()": ', isValidParentheses("()"));       // Expected output: true
console.log('Test Case "()[]{}": ', isValidParentheses("()[]{}")); // Expected output: true
console.log('Test Case "(]": ', isValidParentheses("(]"));       // Expected output: false
console.log('Test Case "([)]": ', isValidParentheses("([)]"));   // Expected output: false
console.log('Test Case "{[]}": ', isValidParentheses("{[]}"));   // Expected output: true