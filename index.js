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
