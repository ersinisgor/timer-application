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

  document.querySelector('form').reset();
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

var inputh = document.getElementById('inputh');
inputh.addEventListener('input', function () {
  inputh.value = parseInt(inputh.value || 0);
  if (inputh.value > 24) inputh.value = 24;
  if (inputh.value < 0) inputh.value = 0;
});

var inputm = document.getElementById('inputm');
inputm.addEventListener('input', function () {
  inputm.value = parseInt(inputm.value || 0);
  if (inputm.value > 59) inputm.value = 59;
  if (inputm.value < 0) inputm.value = 0;
});

var inputs = document.getElementById('inputs');
inputs.addEventListener('input', function () {
  inputs.value = parseInt(inputs.value || 0);
  if (inputs.value > 59) inputs.value = 59;
  if (inputs.value < 0) inputs.value = 0;
});

h = h.toString();
m = m.toString();
s = s.toString();
if (h.match(/^\d$/)) {
  // If the hour is a single digit, add 0 in the front
  h = '0' + h;
}
if (m.match(/^\d$/)) {
  // If the minute is a single digit, add 0 in the front
  m = '0' + m;
}
if (s.match(/^\d$/)) {
  // If the second is a single digit, add 0 in the front
  s = '0' + s;
}

// Turn into OOP

const t1 = new Timmer();
t1.name = 'Timer 1';
const t2 = new Timmer();
t2.name = 'Timer 2';
const list_timmer = [t1, t2];
const list_sound = ['meow', 'woof'];
class Timmer {
  constructor() {
    this.name = 'undefined';
    this.timmer = undefined;
    this.h = 0;
    this.m = 0;
    this.s = 10;

    this._on_update_callback = undefined;
    this._on_stop_callback = undefined;
  }

  _on_update() {
    if (0 === this.h && 0 === this.m && 0 === this.s) {
      this.stop();
      return;
    } else if (0 === this.s) {
      this.s = 59;
      if (0 === this.m) {
        this.m = 59;
        this.h = this.h - 1;
      } else {
        this.m = this.m - 1;
      }
    } else {
      this.s = this.s - 1;
    }

    this.show();
    if (0 === this.h && 0 === this.m && 0 === this.s) {
      this.stop();
    }

    // call the external callback function if it exists
    if (
      this._on_update_callback &&
      typeof this._on_update_callback === 'function'
    ) {
      this._on_update_callback();
    }
  }

  start() {
    if (this.timmer) {
      console.log(`[${this.name}] started`);
      return;
    }
    console.log(`[${this.name}] starts`);
    this.timmer = setInterval(() => {
      this._on_update();
    }, 1000);
    this.show();
  }

  stop() {
    console.log(`[${this.name}] stopped`);
    clearInterval(this.timmer);
    this.timmer = undefined;

    // smiliar to update, check for the stop callback function
    if (
      this._on_stop_callback &&
      typeof this._on_stop_callback === 'function'
    ) {
      this._on_stop_callback();
    }
  }

  pause() {
    console.log(`[${this.name}] paused`);
    clearInterval(this.timmer);
    this.timmer = undefined;
  }

  show() {
    // display the current time
    console.log(`[${this.name}] current time: ${this.h}:${this.m}:${this.s}`);
  }
}
