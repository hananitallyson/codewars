var countBits = function (n) {
  const binary = n.toString(2);
  const arrayOfBits = binary.split("").map(Number);
  let totalOfBits = 0;

  arrayOfBits.forEach((bit) => {
    if (bit == 1) {
      totalOfBits++;
    }
  });

  return totalOfBits;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(9));
console.log(countBits(10));
console.log(countBits(4937611087));
