let scoreBtn = document.querySelector('.score-btn');
let scoreBoard = document.querySelector('.score-board');
scoreBoard.textContent = 0;

function addTwoPoints() {
  return (scoreBoard.textContent += 2);
}
function addThreePoints() {
  return (scoreBoard.textContent += 3);
}
function addSevenPoints() {
  return (scoreBoard.textContent += 7);
}
