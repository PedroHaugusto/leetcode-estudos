function findDuplicate(nums: number[]): number {
    const repeats = new Set<number>();
    return nums.find(num => repeats.has(num) || !repeats.add(num)) ?? -1;
};