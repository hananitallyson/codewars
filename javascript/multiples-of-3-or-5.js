function solution(number) {
  let sum = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }

  if (sum < 0) {
    return 0;
  }

  return sum;
}

console.log(solution(-10));
console.log(solution(10));
console.log(solution(20));
console.log(solution(200));
console.log(solution(7692));
