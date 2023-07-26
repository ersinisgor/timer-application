# Timer Application

Demo 👉 https://codepen.io/ersinisgor/pen/jOQeWXx

The Timer Application is a web-based tool that allows users to set custom timers and countdowns. It helps users manage their time effectively by providing a simple interface to track time.

## Initialization

Upon loading the page, the application initializes the state of the buttons. The "Pause" and "Stop" buttons are disabled initially, so users cannot interact with them until a timer is started.

## Global Variables

The application defines global variables to store various timer-related information:

`timer`: This variable stores the ID of the timer set using the setInterval() function.
`h`: This variable stores the value of the hour component of the timer.
`m`: This variable stores the value of the minute component of the timer.
`s`: This variable stores the value of the second component of the timer.

## Timer Functions

### start_counting()

This function is called when the user clicks the "Start" button. It retrieves the time entered by the user from the input fields or sets default values for hours, minutes, and seconds if no input is provided. It then checks for illegal input (e.g., negative values or all zeroes for time). If the input is legal, it starts the timer by calling the `setInterval()` function with the `counting` function as the callback and a time interval of 1000 milliseconds (1 second).

After starting the timer, it disables the "Start" button and enables the "Pause" and "Stop" buttons to prevent users from re-entering timer values while the timer is running.

### pause_counting()

This function is called when the user clicks the "Pause" button. It changes the state of the buttons and input fields to allow users to re-enter timer values. It also pauses the timer by calling the `clearInterval()` function, effectively stopping the countdown.

### end_counting()

This function is called when the timer completes or when the user clicks the "Stop" button. It changes the state of the buttons and input fields to allow users to re-enter timer values. It stops the timer by calling the `clearInterval()` function and resets the time variables (`h`, `m`, and `s`) to zero. It also displays a message indicating that the timer has stopped.

### counting()

This function is the core of the timer functionality and is called every second while the timer is running. It decrements the seconds, minutes, and hours to create a countdown effect. When the seconds reach zero, it checks if the minutes are also zero. If so, it checks if the hours are zero. If all three components are zero, it calls the `end_counting()` function to stop the timer and displays an alert indicating that the time is up.

The `counting()` function also updates the display to show the current time in hours, minutes, and seconds.

Input Validation
The application listens for changes in the input fields for hours, minutes, and seconds. If the user enters a value greater than the maximum allowed value (24 for hours and 59 for minutes and seconds) or a negative value, the application automatically corrects the input to the nearest valid value.

## Input Validation

The application listens for changes in the input fields for hours, minutes, and seconds. If the user enters a value greater than the maximum allowed value (24 for hours and 59 for minutes and seconds) or a negative value, the application automatically corrects the input to the nearest valid value.
