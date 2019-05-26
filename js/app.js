var leftLife = 20;
var rightLife = 20;
var lifeElement1 = document.getElementById("lifeElement1");
var lifeElement2 = document.getElementById("lifeElement2");

function LeftLifeUp() {
  leftLife++;
  lifeElement1.innerHTML = leftLife;
}

function LeftLifeDown() {
  leftLife--;
  lifeElement1.innerHTML = leftLife;
}

function RightLifeUp() {
  rightLife++;
  lifeElement2.innerHTML = rightLife;
}

function RightLifeDown() {
  rightLife--;
  lifeElement2.innerHTML = rightLife;
}

function ResetLife() {
  leftLife = 20;
  rightLife = 20;
  lifeElement1.innerHTML = leftLife;
  lifeElement2.innerHTML = rightLife;
}