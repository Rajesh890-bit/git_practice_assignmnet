function reverse() {
  let string = "aman";
  let bag = "";
  for (let i = string.length - 1; i >= 0; i--) {
    bag += string[i];
  }
  console.log(bag);
}

let rev_str = reverse();

if (str == rev_str) {
  console.log("palindrome");
} else {
  console.log("NA");
}
