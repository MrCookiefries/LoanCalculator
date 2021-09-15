const {mean, mode, median} = require("./helpers");

let nums;
beforeEach(() => nums = [2, 2, 1, 3, 2]);

describe("mean", () => {
    test("finds mean", () => {
        expect(mean(nums)).toBe(2);
    });
});

describe("mode", () => {
    test("finds mode", () => {
        expect(mode(nums)).toEqual([2]);
    });
    test("finds mode tied nums", () => {
        nums.push(3, 3);
        expect(mode(nums)).toEqual([2, 3]);
    });
});

describe("median", () => {
    test("finds median ood nums", () => {
        expect(median(nums)).toBe(2);
    });
    test("finds median even nums", () => {
        nums.push(4);
        expect(median(nums)).toBe(2);
    });
});
