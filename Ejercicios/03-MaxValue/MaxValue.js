function MaxValue(shares) {
  let x = 0;

  for (let i = 0; i < shares.length - 1; i++) {
    const indexI = shares[i];

    for (let j = i + 1; j < shares.length; j++) {
      const indexJ = shares[j];

      const y = indexJ - indexI;
      if (y > x) {
        x = y;
      }
    }
  }
  return x;
}

console.log(MaxValue([23, 7, 3, 4, 8, 6]));

// function MaxValue(arr) {
//   let difMax = -Infinity;
//   let minValue = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] - minValue > difMax) {
//       difMax = arr[i] - minValue;
//     }
//     if (arr[i] < minValue) {
//       minValue = arr[i];
//     }
//   }
//   return difMax;
// }

module.exports = MaxValue;
