function HasBalancedBrackets(string) {
  const brackets = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  const validating = [];

  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (brackets[element]) {
      validating.push(element);
    } else if (brackets[validating.pop()] !== element) {
      return false;
    }
  }

  return validating.length === 0;
}
console.log(HasBalancedBrackets("{}()[")); // true

module.exports = HasBalancedBrackets;
