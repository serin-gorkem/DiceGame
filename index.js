var dice1 = RandomGen();
var dice2 = RandomGen();

ChangeImg(1, dice1);
ChangeImg(2, dice2);
if (dice1 == dice2) {
  document.querySelector(".title-header").innerHTML =
    "<p><i class='fa-regular fa-flag'></i>Draw<i class='fa-regular fa-flag'></i></p>";
  alert("go");
} else if (dice1 > dice2) {
  document.querySelector(".title-header").innerHTML =
    "<p><i class='fa-regular fa-flag'></i>   Player 1 WIN!!</p>";
} else if (dice2 > dice1) {
  document.querySelector(".title-header").innerHTML =
    "<p>Player 2 WIN !!   <i class='fa-regular fa-flag'></i></p>";
}

function RandomGen() {
  return (randomDice = Math.floor(Math.random() * 6 + 1));
}
function ChangeImg(turn, random) {
  var diceImg = document.querySelector(".dice-img" + turn);
  diceImg.setAttribute("src", "images/dice" + random + ".png");
}
