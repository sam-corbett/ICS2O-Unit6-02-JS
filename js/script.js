// Copyright (c) 2022 Sam Corbett All rights reserved
//
// Created by: Sam Corbett
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-02-JS/sw.js", {
    scope: "/ICS2O-Unit6-02-JS/",
  })
}

/**
 * This function displays an alert.
 */
function onLoadCookieCount() {
  if (localStorage.previousCookieCount) {
    document.getElementById("cookie-counter").innerHTML =
      "Your cookie count is " + localStorage.previousCookieCount + "."
  } else {
    localStorage.previousCookieCount = 0
  }
}

/**
 * This function adds to a cookie counter with every click
 */
var counter = 0

function myImageClicked() {
  localStorage.previousCookieCount++
  document.getElementById("cookie-counter").innerHTML =
    "<p> Your cookie count is " + localStorage.previousCookieCount + ". </p>"
}
