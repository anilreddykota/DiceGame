var randomnum1 = 0;
var randomnum2 = 0;
var player1 =0;
var player2 =0;
var gamesplayed =0;
var player1name = prompt("enter player 1 name ");
var player2name = prompt("enter player 2 name ");
player1name = player1name.toUpperCase();
player2name = player2name.toUpperCase();


let totalgames= prompt("total games you want to play");
let result ="404";

function reload() {
  randomnum1 = Math.floor(Math.random() * (6 - 1)) + 1;
  randomnum2 = Math.floor(Math.random() * (6 - 2)) + 1;
 document.getElementById("player1name").innerHTML = player1name;
 document.getElementById("player2name").innerHTML = player2name;
 document.getElementById("player1names").innerHTML = player1name +" score:";
 document.getElementById("player2names").innerHTML = player2name +" score:";
  
  gamesplayed=gamesplayed+1;

  document.getElementById("gamesplayed").innerHTML = gamesplayed +"/"+totalgames;
   player1 = player1 + randomnum1;
   player2 = player2 + randomnum2;
   //displaying players score
  document.getElementById("player1score").innerHTML = player1;
  document.getElementById("player2score").innerHTML = player2;
  //random die
  document.getElementById("demo1").src = "dice" + randomnum1 + ".png";
  document.getElementById("demo2").src = "dice" + randomnum2 + ".png";
  // result time
  if(gamesplayed == totalgames ){
    
    if (player1 > player2) {
        result =   player1name+" won the game";
      } else if (player1 == player2) {
        result =  "game draw";
      }
      else{
        result=  player2name+ " won the game ";
      }
      console.log(result);
      document.getElementById("result").innerHTML = result;
      document.getElementById("mybtn").disabled = true;
      document.getElementById("mybtn").innerHTML= "refresh page to start playing again";
      document.getElementById('mySound').play();
    }
  

}
