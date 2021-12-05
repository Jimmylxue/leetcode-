/*

给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例 1:

输入: numRows = 5
输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
示例 2:

输入: numRows = 1
输出: [[1]]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/pascals-triangle
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * 这题的解题思路有很多 有用递归的方式解决也可以，这里我使用的是 两层for循环暴力解题
 *
 * 举个例子 将杨辉三角的三角形都写上坐标
 *
 *                 （0，0）
 *             （1，0）（1，1）
 *          （2，0）（2，1）（2，2）
 *       （3，0）（3，1）（3，2）（3，3）
 *
 * 用 （i，j）来表示坐标
 *  我们会发现 j=0 的点 值一定是为 1  i===j 的点 对应的值一定为1
 *      其他情况下 arr[i][j] = arr[i-1][j-1]+arr[i-1][j]
 *      根据这个公式 就可以完美的解出来这一题的答案了
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let arr = [];
  for (let i = 0; i < numRows; i++) {
    arr[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || i === j) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
      }
    }
  }
  return arr;
};
