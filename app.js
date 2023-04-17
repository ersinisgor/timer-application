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

// pause the timer
function pause_counting() {
  // change the state of buttons and input fields to allow users to re-enter numbers
  document.getElementById('btn-start').disabled = false;
  document.getElementById('btn-pause').disabled = true;
  document.getElementById('btn-stop').disabled = false;
  document.getElementById('inputh').disabled = false;
  document.getElementById('inputm').disabled = false;
  document.getElementById('inputs').disabled = false;

  // pause the timer
  clearInterval(timer);
}

// stop the timer
function end_counting() {
  // change the state of buttons and input fields to allow users to re-enter numbers
  document.getElementById('btn-start').disabled = false;
  document.getElementById('btn-pause').disabled = true;
  document.getElementById('btn-stop').disabled = true;
  document.getElementById('inputh').disabled = false;
  document.getElementById('inputm').disabled = false;
  document.getElementById('inputs').disabled = false;

  // stop the timer
  clearInterval(timer);

  // reset the time variables
  h = 0;
  m = 0;
  s = 0;
  document.getElementById('currentTime').innerHTML = 'Timer stopped';
}

// countdown
function counting() {
  // check if the second is 0
  if (s == 0) {
    // check if the minute is 0 when the second is 0
    if (m == 0) {
      // the entered time has already been checked for legality before starting the timer, so there is no need to check the value of the variable h again here
      h--;
      m = 59;
      s = 59;
    } else {
      // when the minute is not 0, the minute minus 1 and the second becomes 59
      m--;
      s = 59;
    }
  } else {
    // when the second is not 0, the second minus 1
    s--;
  }

  // display current time
  document.getElementById('currentTime').innerHTML =
    'current time: ' + h + ' h ' + m + ' m ' + s + ' s';
  document.getElementById('inputh').value = h;
  document.getElementById('inputm').value = m;
  document.getElementById('inputs').value = s;

  // check if the second is 0
  if (s == 0) {
    // when the second is 0, check if the minute is 0
    if (m == 0) {
      // when the minute is 0, check if the hour is 0
      if (h == 0) {
        // when the hour is 0, stop the timer
        // stop the timer
        end_counting();
        // execute popup in the next event loop to prevent it from blocking DOM rendering
        setTimeout(function () {
          alert('The time is up!');
        }, 0);
        return;
      }
    }
  }
}
