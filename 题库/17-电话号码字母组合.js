/*
  
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/ 

/*
  这种题目的刚开始我的想法是，如果是只有两个数字，那么只要嵌套两层循环就可以解题，如果是三个数字，三层循环，思路上是这样，但是代码怎么样都写不下来，还是思路被锁定死了，这种的题目是可以使用递归的形式来解题的。刚好递归是我程序中最弱的一环节

  递归是同步执行，不涉及异步的领域，最重要的就是找准时机能够退出递归即可

  当按下三个数字的时候，我们可以先把前面两个数字的结果进行计算处理，最后用这个结果再跟第三个数字进行计算处理。逻辑就是这样，写一个递归函数，执行此处小于数字的个数即可，别的没有什么复杂的，虽然这个我写了非常久才写出来，很多时间都在调试代码。
*/ 

var letterCombinations = function(digits) {
  let arr = [null,null,['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']]
  let strArr = [...digits.toString()]
  let stackObj = {}

  let anser = []
  strArr.forEach((item,index)=>{
    stackObj[index] = arr[item]
  })
  let keyCount = Object.keys(stackObj).length
  if(keyCount === 1){
    anser = Object.values(stackObj)[0]
    return anser
  }
  commit(stackObj,anser,0)

  function commit(before,arr,start){
    let ansers = []
    start++
    if( start === keyCount+1 ){
      console.log('结束了',arr,start)
      return
    }
    if(arr.length === 0){
      console.log('第一次进入')
      commit(before,before[start-1],start)
      return
    }
    console.log('before',before[start-1])
    let arr1 = before[start-1]
    let arr2 = arr
    if(start === 3){
      console.log('arr1',arr1)
      console.log('arr2',arr2)
    }
    for(let i = 0;i<arr1.length;i++){
      for(let j = 0;j<arr2.length;j++){
        let str = arr2[j]+arr1[i]
        ansers.push(str)
      }
    }
    anser = ansers
    commit(before,anser,start)
  }
  // console.log('最终',anser)
  return anser
};



console.log('答案',letterCombinations(234))