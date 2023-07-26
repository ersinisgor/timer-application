# Timer Application

Demo 👉 https://codepen.io/ersinisgor/pen/jOQeWXx

This Timer Application allows users to set countdown timers and manage them interactively through a user-friendly interface. The application is implemented using HTML, JavaScript and a little bit CSS, without any external libraries or frameworks.

## Features

#### 1. Initialize Button State:

The application initializes by disabling the "Pause" and "Stop" buttons to prevent user interaction until a timer is started.

#### 2. Global Variables:

Global variables are declared to store the timer, hour (h), minute (m), and second (s) values.

#### 3. Start the Timer:

The `start_counting()` function is defined to start the timer based on the input values provided by the user. If invalid or empty inputs are detected, an alert is displayed.

#### 4. Pause the Timer:

The `pause_counting()` function allows the user to pause the timer. The "Start" button becomes enabled again, while "Pause" and "Stop" buttons are disabled.

#### 5. Stop the Timer:

The `end_counting()` function enables the user to stop the timer at any time. The "Start" button becomes enabled, and "Pause" and "Stop" buttons are disabled. The timer is cleared, and the input fields are re-enabled for user input.

#### 6. Countdown Logic:

The `counting()` function is responsible for implementing the countdown logic. It decrements the seconds, minutes, and hours, and updates the display accordingly. When the countdown reaches zero, an alert is triggered to inform the user that the time is up.

#### 7. Input Validation:

Event listeners are added to the input fields (`inputh`, `inputm`, `inputs`) to validate and restrict the user input within valid time ranges (hours: 0-24, minutes: 0-59, seconds: 0-59).

#### 8. Convert Single-Digit Time:

Before displaying the time, the single-digit values of hours, minutes, and seconds are padded with a leading zero.

## Learning Outcomes

- **DOM Manipulation:** Understanding and utilizing DOM (Document Object Model) manipulation in JavaScript to interact with HTML elements.

- **Event Handling:** Handling events such as button clicks and input changes to trigger specific functions.

- **Input Validation:** Implementing input validation to ensure that users provide valid data.

- **Countdown Logic:** Building the logic for countdown functionality, including handling decrement and reset operations.
