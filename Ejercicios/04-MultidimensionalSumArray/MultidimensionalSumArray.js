function mdArraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (typeof current === "number") {
      sum = sum + current;
    } else {
      sum = sum + mdArraySum(current);
    }
  }

  return sum;
}

module.exports = mdArraySum;
