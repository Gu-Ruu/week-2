// ## Create a counter in JavaScript
var counter = 1;
function timing() {
  console.log(counter);
  ++counter;
}
const Interval = setInterval(timing, 1000);
setTimeout(function () {
  clearInterval(Interval);
}, 10100);
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript

// It should go up as time goes by in intervals of 1 second
