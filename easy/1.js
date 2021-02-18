var twoSum = function(nums, target) {
    let cache = new Map()

    for(let [index, num] of nums.entries()){
        if(cache.has(num)) return [index, cache.get(num)]
        else{
            cache.set(target-num, index)
        }
    }
};
