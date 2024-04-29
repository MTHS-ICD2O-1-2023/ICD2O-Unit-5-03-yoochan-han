// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html
function ShowAnswer() {
  const userAnswer = document.getElementById("get_UserAnswer").value
  //get user's answer
  if (userAnswer >= 18) {
    document.getElementById("TheAnswer").innerHTML = "You can go see a NC-17 or all of movie alone!"
  } else if (userAnswer >= 17) {
    document.getElementById("TheAnswer").innerHTML = "You can go see an R rated movie alone"
  } else if (userAnswer >= 13) {
    document.getElementById("TheAnswer").innerHTML = "You can go see a PG-13 rated movie alone"
  } else if (userAnswer > 3) {
    document.getElementById("TheAnswer").innerHTML = "You can go see a PG or G rated movie alone"
  } else {
    document.getElementById("TheAnswer").innerHTML = "You're too young for most things"
  }
}