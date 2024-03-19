let input = "Augustgit "; // to test

function checkSeason(season) {
  switch (season) {
    case "January":
    case "February":
    case "December":
      console.log("We are in Winter");
      break;
    case "March":
    case "April":
    case "May":
      console.log("We are in Spring");
      break;
    case "June":
    case "July":
    case "August":
      console.log("We are in Summer");
      break;
    case "September":
    case "October":
    case "November":
      console.log("We are in Autumn");
      break;
    default:
      console.log("That's not a month!");
  }
}

checkSeason(input);
