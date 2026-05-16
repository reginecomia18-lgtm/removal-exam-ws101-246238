/**
 * Problem 2: Two Sum
 * Iterates over numerical parameters identifying specific indices targeting an accurate combined sum value.
 */
function findTwoSum(nums, target) {
    // Primary execution structural search loop
    for (let i = 0; i < nums.length; i++) {
        // Inner matching secondary conditional sweep
        for (let j = i + 1; j < nums.length; j++) {
            // Check if values at both pointer structures combine correctly to target parameters
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // Return empty configuration array layer if parameters yield no matching instances
    return [];
}

// --- Test Cases Execution Log ---
console.log("--- Test Cases: Problem 2 ---");

// Test Case 1
let nums1 = [2, 7, 11, 15];
let target1 = 9;
console.log(`Input: nums = [${nums1}], target = ${target1}`);
console.log("Output indices portfolio: ", findTwoSum(nums1, target1)); // Expected output: [0, 1]

// Test Case 2
let nums2 = [3, 2, 4];
let target2 = 6;
console.log(`Input: nums = [${nums2}], target = ${target2}`);
console.log("Output indices portfolio: ", findTwoSum(nums2, target2)); // Expected output: [1, 2]