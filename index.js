let order = []; // keeps track of order of lights flashing
let playerOrder = []; // order that player is pressing the lights
let flash; // basic integer - number of flashes that have appeared in the game
let turn; // what turn we're on
let good; // boolean - whether player is hitting correct colors or NOT
let compTurn; // boolean - keep track if comp turn or player turn
let intervalId;
let strict = false; // check if CHECK mark button has been checked (start at unchecked)
let noise = true;
let on = false; // if powerbutton is turned on (start turned off)
let win; // state if player has won game or not

const turnCounter = document.querySelector("#turn"); // red turn count screen
const topLeft = document.querySelector("#topleft"); // green button
const topRight = document.querySelector("#topright"); // red button
const bottomLeft = document.querySelector("#bottomleft"); // yellow button
const bottomRight = document.querySelector("#bottomright"); // blue button
const strictButton = document.querySelector("#strict"); // strict mode button
const onButton = document.querySelector("#on"); // on button
const startButton = document.querySelector("#start"); // start button

// checkboxes accepts booleans
strictButton.addEventListener("click", (event) => {
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});

onButton.addEventListener("click", (event) => {
  if (onButton.checked == true) {
    on = true;
    turnCounter.innerHTML = ":)";
  } else {
    on = false;
    turnCounter.innerHTML = "";
    clearColor(); // clear simon buttons when OFF
    clearInterval(intervalId);
  }
});

startButton.addEventListener("click", (event) => {
  if (on || win) {
    play();
  }
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  intervalId = 0;
  turn = 1;
  turnCounter.innerHTML = 1;
  good = true;
  //   comp chooses random number for color for 20 turns
  for (let i = 0; i < 20; i++) {
    order.push(Math.floor(Math.random() * 4) + 1);
  }
  compTurn = true;

  intervalId = setInterval(gameTurn, 800); // computer flashes light every 800 miliseconds
}

function gameTurn() {
  on = false; // does not allow player to click buttons while computer is flashing

  //   if number of times lights have flashed = turn number we're on THEN comp turn over
  if (flash == turn) {
    clearInterval(intervalId);
    compTurn = false;
    clearColor();
    on = true; // player can start pressing buttons
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) one();
      if (order[flash] == 2) two();
      if (order[flash] == 3) three();
      if (order[flash] == 4) four();
      flash++;
    }, 200);
  }
}

// functions for clicking color buttons
// green
function one() {
  if (noise) {
    let audio = document.getElementById("clip1");
    audio.play();
  }
  noise = true;
  topLeft.style.backgroundColor = "lightgreen";
}
// red
function two() {
  if (noise) {
    let audio = document.getElementById("clip2");
    audio.play();
  }
  noise = true;
  topRight.style.backgroundColor = "tomato";
}
// yellow
function three() {
  if (noise) {
    let audio = document.getElementById("clip3");
    audio.play();
  }
  noise = true;
  bottomLeft.style.backgroundColor = "yellow";
}
// blue
function four() {
  if (noise) {
    let audio = document.getElementById("clip4");
    audio.play();
  }
  noise = true;
  bottomRight.style.backgroundColor = "lightskyblue";
}

function clearColor() {
  topLeft.style.backgroundColor = "darkgreen";
  topRight.style.backgroundColor = "darkred";
  bottomLeft.style.backgroundColor = "goldenrod";
  bottomRight.style.backgroundColor = "darkblue";
}
