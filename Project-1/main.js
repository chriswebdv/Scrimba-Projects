let totalPoints = 0;
let scoreBtn = document.querySelector('.score-btn');
let scoreBoard = document.querySelector('.score-board');

function addTwoPoints() {
  totalPoints += 2;
  return (scoreBoard.textContent = totalPoints);
}
function addThreePoints() {
  totalPoints += 3;
  return (scoreBoard.textContent = totalPoints);
}
function addSevenPoints() {
  totalPoints += 7;
  return (scoreBoard.textContent = totalPoints);
}
