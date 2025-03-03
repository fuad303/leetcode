let arry = [1, 2, 3, 4, 5];
function twoSum(target: number) {
  for (let i = 0; i < arry.length; i++) {
    for (let j = i + 1; j < arry.length; j++) {
      if (arry[i] + arry[j] === target) return [i, j];
    }
  }
  return [];
}
let target = 7;

console.log(twoSum(target));
