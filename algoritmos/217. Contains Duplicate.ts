var nums = [1,2,3,4]

function containsDuplicate(nums: number[]): boolean {
    return (new Set(nums)).size !==  nums.length;
};

containsDuplicate(nums)