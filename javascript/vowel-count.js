function getCount(str) {
  allLetters = str.split("");
  let totalOfVowels = 0;

  allLetters.forEach((letter) => {
    if (
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u"
    ) {
      totalOfVowels++;
    }
  });

  return totalOfVowels;
}

console.log(getCount("pear tree"));
