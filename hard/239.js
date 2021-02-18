/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

  let deque = new Array(), result = new Array()

  if(nums.length <= 0) return result

  const add = n =>{
      while(deque.length > 0 && n > deque[deque.length-1]){
          deque.pop()
      }
      deque.push(n)
  }

  const remove = n =>{
      if( n === deque[0]) deque.shift()
  }

  let kCount = 0;
  nums.forEach((n, index)=>{
      add(n)
      if( index >= (k-1)){
          result.push(deque[0])
          remove(nums[kCount])
          kCount++
      }

  })
    return result
};
