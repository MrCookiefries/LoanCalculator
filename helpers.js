function mean(nums) {
    return nums.reduce((total, num) => total + num) / nums.length;
}

function mode(nums) {
    const count = new Map(nums.map(n => [n, 0]));
    for (const num of nums) {
        count.set(num, count.get(num) + 1);
    }
    const high = Math.max(...count.values());
    return [...count.keys()].filter(k => count.get(k) === high);
}

function median(nums) {
    nums.sort((a, b) => a - b);
    const half = Math.floor(nums.length / 2);
    if (nums.length % 2) {
        return nums[half];
    }
    return (nums[half - 1] + nums[half]) / 2;
}

function convertNums(stringNums) {
    const nums = stringNums.split(',').map(n => +n);
    if (nums.some(n => Number.isNaN(n))) {
        throw new Error(`Only numbers are allowed!`);
    }
    return nums;
}

function checkQueryItem(query, item) {
    if (!query[item]) {
        throw new Error(`Missing query argument "${item}"!`);
    }
}

function buildResponse(operation, value) {
    return {response: {
        operation,
        value
    }};
}

module.exports = {mean, mode, median, convertNums, checkQueryItem, buildResponse};
