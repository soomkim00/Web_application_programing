let i = 1;
function run() {
  switch (i) {
    case 1:
      console.log("First");
      i++;
      setTimeout(run, 2000);
      break;
    case 2:
      console.log("Second");
      i++;
      setTimeout(run, 3000);
      break;
    case 3:
      console.log("Third");
      break;
  }
}
setTimeout(run, 1000);
