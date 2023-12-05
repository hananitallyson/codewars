function solution(str, ending) {
  let strEnding = str.substring(str.length - ending.length);

  if (strEnding == ending) {
    return true;
  }

  return false;
}

console.log(solution("samurai", "ai"));
console.log(solution("coding", "co"));
