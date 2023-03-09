const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter a date (mm/dd/yyyy): ", (answer) => {
  if (isNaN(Date.parse(answer))) {
    console.log("Invalid date");
    rl.close();
    return;
  }
  let date = new Date(answer);
  let date2 = new Date("12/31/1967");
  let diff = Math.abs(date.getTime() - date2.getTime());
  let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  console.log(diffDays);
  rl.close();
});
