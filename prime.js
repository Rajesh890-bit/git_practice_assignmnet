function prime(num) {
  let factor = 0;
  for (i = 1; i <= num; i++) {
    if (num % i == 0) {
      factor++;
    }
  }
  if (factor == 2) {
    return true;
  } else {
    return false;
  }
}

console.log(prime(10));
