let message = "There is no war in Ba Sing Se";
let words = 1;
for (var i = 0; i < message.length; i++) {
  if (message[i] == " " ) {
    words++;
  }
}
console.log(words);

// message.split(" ").length ?
