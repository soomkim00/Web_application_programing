let count = 0;
function retryRandomTask() {
  setTimeout(randomTask, 2000);
}
function randomTask() {
  if (Math.random() < 0.5) {
    console.log("Success");
    process.exit();
  } else {
    console.log("Error");
    count++;
    setTimeout(randomTask, 2000);
  }
  if (count == 3) {
    console.log("Failed after 3 attempts");
    process.exit();
  }
}
retryRandomTask();
