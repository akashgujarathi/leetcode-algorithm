var twoSum = function(numbers, target) {
    let cache = new Map()

    for(let [index, num] of numbers.entries()){
        if(cache.has(num)) return [cache.get(num)+1, index+1]
        else{
            cache.set(target-num, index)
        }
    }
};
/*
  Method 2
  let first_pointer = 0, last_pointer = numbers.length-1
     for(let i = 0; i < numbers.length; i++){
         if(numbers[first_pointer]+numbers[last_pointer] === target) return [first_pointer+1, last_pointer+1]
         else if(numbers[first_pointer]+numbers[last_pointer] > target) last_pointer--
         else first_pointer++
     }

*/
