function openOrSenior(data) {
  let result = [];

  data.forEach((array, index) => {
    if (array[0] >= 55 && array[1] > 7) {
      result[index] = "Senior";
    } else {
      result[index] = "Open";
    }
  });

  return result;
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));
console.log(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]));
console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]));
