function removeDuplicates(nums: number[]): number {
    const uniqueElements = Array.from(new Set(nums));
    nums.splice(0, nums.length, ...uniqueElements)
    return uniqueElements.length
};


