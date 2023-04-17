// initialize button state
document.getElementById('btn-pause').disabled = true;
document.getElementById('btn-stop').disabled = true;

// define global variables
var timer = null; // store the returned value of timer
var h = 0; // store the value of hour
var m = 0; // store the value of minute
var s = 0; // store the value of second

// define a function
// start the timer
function start_counting() {
  // get the time entered or set a default value
  h = +document.getElementById('inputh').value || h;
  m = +document.getElementById('inputm').value || m;
  s = +document.getElementById('inputs').value || s;

  // check for illegal input
  if ((h == 0 && m == 0 && s == 0) || h < 0 || m < 0 || s < 0) {
    alert('The time entered is illegal!');
    return;
  }

  // start the timer
  timer = setInterval(counting, 1000);

  // change the state of buttons and input fields to prohibit users from re-entering numbers
  document.getElementById('btn-start').disabled = true;
  document.getElementById('btn-pause').disabled = false;
  document.getElementById('btn-stop').disabled = false;
  document.getElementById('inputh').disabled = true;
  document.getElementById('inputm').disabled = true;
  document.getElementById('inputs').disabled = true;
}
