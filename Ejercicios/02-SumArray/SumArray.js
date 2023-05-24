function SumArray(arr, n) {
  // Your code here:

  for (let i = 0; i < arr.length; i++) {
    const elemI = arr[i];

    for (let j = 1; j < arr.length - 1; j++) {
      const elemJ = arr[j];

      if (elemI + elemJ === n) {
        return true;
      }
    }
  }
  return false;
}
console.log(SumArray([2, 5, 9], 4));

module.exports = SumArray;
