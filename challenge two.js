let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];

var tmp = 1;
let country = "Japan"; //to test

for (var i = 0; i < countries.length; i++) {
  if (country == countries[i]) {
    console.log(
      "Your country :",
      countries[i],
      " has the capital named : ",
      capital[i]
    );
    tmp--;
  }
}
if (tmp) {
  console.log("Your country isn't listed in our database.");
}
