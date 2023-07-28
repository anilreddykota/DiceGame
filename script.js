
alert(
  "instructions: " +
    " 1. enter names of player1 and  player2 and then total no of rounds you want to play  2.this game is available only in offline mode 3.anter all values properly "
);
var player1name = prompt("enter player 1 name ");
var player2name = prompt("enter player 2 name ");
player1name = player1name.toUpperCase();
player2name = player2name.toUpperCase();
let totalgames = prompt("number of rounds you want to play");
alert("roll the dicee to start the game have fun ");

if (totalgames == "" || totalgames >= 25 ||totalgames%1!=0||totalgames==NaN) {
  totalgames = 7;
}
totalgames = totalgames;
let result = "404";
var randomnum1 = 0;
var randomnum2 = 0;
var player1 = 0;
var player2 = 0;
var gamesplayed = 0;
var matchesplayed =0;
var fakesplayed = 0;
function restart() {
  randomnum1 = 0;  
  randomnum2 = 0;
  player1 = 0;
  player2 = 0;
  gamesplayed = 0;
  fakesplayed = 0;
  var audio = new Audio("green.mp3");
  audio.play();
  document.getElementById("gamesplayed").innerHTML =
  fakesplayed + "/" + totalgames;
  document.getElementById("player1score").innerHTML = player1;
  document.getElementById("player2score").innerHTML = player2;
  document.getElementById("mybtn1").disabled = false;
  document.getElementById("mybtn2").disabled = false;
  document.getElementById("here2").hidden = false;
  document.getElementById("here1").hidden = false; 
  document.getElementById("result").innerHTML = "play again  &#128521;";
  document.getElementById("restart").hidden = true;
  document.getElementById("mybtn").hidden = true;
  gameover();

}
function reload1() {
  
  displayplayernames();
  randomnum1 = Math.floor(Math.random() * (6 - 0)) + 1;
  document.getElementById("player1name").innerHTML = player1name;
  document.getElementById("player1names").innerHTML = player1name + " score:";
  document.getElementById("demo1").src = "dice" + randomnum1 + ".png";
  gamesplayed = gamesplayed + 0.5;
  fakesplayed = fakesplayed + 1;
  document.getElementById("gamesplayed").innerHTML =
    fakesplayed + "/" + totalgames;
  player1 = player1 + randomnum1;
  document.getElementById("player1score").innerHTML = player1;
  document.getElementById("mybtn1").disabled = true;
  document.getElementById("mybtn2").disabled = false;
  document.getElementById("here1").hidden = true;
  document.getElementById("here2").hidden = false;
  var audio = new Audio("blue.mp3");
  audio.play();
  gameover();
  
}
function reload2() {
  
  displayplayernames();
  randomnum2 = Math.floor(Math.random() * (6 - 0)) + 1;
  document.getElementById("demo2").src = "dice" + randomnum2 + ".png";
  document.getElementById("player2names").innerHTML = player2name + " score:";
  document.getElementById("player2name").innerHTML = player2name;
  player2 = player2 + randomnum2;
  gamesplayed = gamesplayed + 0.5;
  // document.getElementById("gamesplayed").innerHTML =
  //   gamesplayed + "/" + totalgames;
  document.getElementById("player2score").innerHTML = player2;
  document.getElementById("mybtn2").disabled = true;
  document.getElementById("mybtn1").disabled = false;
  document.getElementById("here2").hidden = true;
  document.getElementById("here1").hidden = false;
  var audio = new Audio("blue.mp3");
  audio.play();
  gameover();
  
}
function gameover(){
  if (gamesplayed == totalgames) {
    var audio = new Audio("wrong.mp3");
    if (player1 > player2) {
        let lead= player1 - player2;
      result = player1name + " won the game with " + lead +"points";
      
      setTimeout(() => {
        audio.play();
      }, 1000)
    } else if (player1 == player2) {
      result = "game draw";
    
      setTimeout(() => {
        audio.play();
        audio.play();
        audio.play();

      }, 1500)
    } else {
        let lead= player2 - player1;
      result = player2name + " won the game with " + lead +"points";
      
      setTimeout(() => {
        audio.play();
        audio.play();
      }, 1000)
    }
    
    document.getElementById("result").innerHTML = result;
    document.getElementById("mybtn1").disabled = true;
    document.getElementById("mybtn2").disabled = true;
    document.getElementById("here2").hidden = true;
    document.getElementById("here1").hidden = true;
    document.getElementById("restart").hidden = false;
    document.getElementById("mybtn").hidden = false;


    document.getElementById("mybtn").innerHTML =
      " game over ! <br>" + "refresh page to start new game";
  }
}
function displayplayernames(){
  document.getElementById("player1nameagain").innerHTML=player1name;
  document.getElementById("player2nameagain").innerHTML=player2name;
 
}

