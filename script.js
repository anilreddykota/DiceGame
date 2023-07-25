alert(
  " this is version 2.0 ;                             instructions: " +
    " 1. enter names of player1 N player2 and then total times you want to play  2. this game is available only in offline mode"
);
var player1name = prompt("enter player 1 name ");
var player2name = prompt("enter player 2 name ");
player1name = player1name.toUpperCase();
player2name = player2name.toUpperCase();
let totalgames = prompt("total games you want to play");
alert("roll the dicee to start the game have fun  ");

if (totalgames == "" || totalgames >= 50) {
  totalgames = 5;
}
let result = "404";
var randomnum1 = 0;
var randomnum2 = 0;
var player1 = 0;
var player2 = 0;
var gamesplayed = 0;
var matchesplayed =0;

function restart() {
  randomnum1 = 0;  
  randomnum2 = 0;
  document.getElementById("gamesplayed").innerHTML =
  gamesplayed + "/" + totalgames;
  document.getElementById("player1score").innerHTML = player1;
  document.getElementById("player2score").innerHTML = player2;
  document.getElementById("mybtn1").disabled = false;
  document.getElementById("mybtn2").disabled = false;
  document.getElementById("here2").hidden = false;
  document.getElementById("here1").hidden = false;
  matchesplayed= matchesplayed +1;
  document.getElementById("result").innerHTML = "play again  &#128521;";
  player1 = 0;
  player2 = 0;
  gamesplayed = 0;
  

}
function preset(){
    document.getElementById("player1nameagain").innerHTML=player1name;
    document.getElementById("player2nameagain").innerHTML=player2name;
}




function reload1() {
  randomnum1 = Math.floor(Math.random() * (6 - 0)) + 1;
  document.getElementById("player1name").innerHTML = player1name;
  document.getElementById("player1names").innerHTML = player1name + " score:";
  document.getElementById("demo1").src = "dice" + randomnum1 + ".png";
  gamesplayed = gamesplayed + 1;
  document.getElementById("gamesplayed").innerHTML =
    gamesplayed + "/" + totalgames;
  player1 = player1 + randomnum1;
  document.getElementById("player1score").innerHTML = player1;
  document.getElementById("mybtn1").disabled = true;
  document.getElementById("mybtn2").disabled = false;
  document.getElementById("here1").hidden = true;
  document.getElementById("here2").hidden = false;
}
function reload2() {
  randomnum2 = Math.floor(Math.random() * (6 - 0)) + 1;
  document.getElementById("demo2").src = "dice" + randomnum2 + ".png";
  document.getElementById("player2names").innerHTML = player2name + " score:";
  document.getElementById("player2name").innerHTML = player2name;
  player2 = player2 + randomnum2;
  document.getElementById("player2score").innerHTML = player2;
  document.getElementById("mybtn2").disabled = true;
  document.getElementById("mybtn1").disabled = false;
  document.getElementById("here2").hidden = true;
  document.getElementById("here1").hidden = false;
  if (gamesplayed == totalgames) {
    if (player1 > player2) {
        let lead= player1 - player2;
      result = player1name + " won the game with " + lead +"points";
    } else if (player1 == player2) {
      result = "game draw";
    } else {
        let lead= player2 - player1;
      result = player2name + " won the game with " + lead +"points";
    }
    
    document.getElementById("result").innerHTML = result;
    document.getElementById("mybtn1").disabled = true;
    document.getElementById("mybtn2").disabled = true;
    document.getElementById("here2").hidden = true;
    document.getElementById("here1").hidden = true;
    document.getElementById("restart").hidden = false;


    document.getElementById("mybtn").innerHTML =
      " game over <br>" + "refresh page to start playing again";
  }
}
