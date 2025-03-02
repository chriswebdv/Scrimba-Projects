let totalPointsHome = 0;
let totalPointsGuest = 0;
let scoreBtnHome = document.querySelector('.score-btn-home');
let scoreBtnGuest = document.querySelector('.score-btn-guest');
let scoreBoardHome = document.querySelector('.score-board-home');
let scoreBoardGuest = document.querySelector('.score-board-guest');

function addTwoPointsHome() {
  totalPointsHome += 2;
  return (scoreBoardHome.textContent = totalPointsHome);
}
function addThreePointsHome() {
  totalPointsHome += 3;
  return (scoreBoardHome.textContent = totalPointsHome);
}
function addSevenPointsHome() {
  totalPointsHome += 7;
  return (scoreBoardHome.textContent = totalPointsHome);
}

function addTwoPointsGuest() {
  totalPointsGuest += 2;
  return (scoreBoardGuest.textContent = totalPointsGuest);
}
function addThreePointsGuest() {
  totalPointsGuest += 3;
  return (scoreBoardGuest.textContent = totalPointsGuest);
}
function addSevenPointsGuest() {
  totalPointsGuest += 7;
  return (scoreBoardGuest.textContent = totalPointsGuest);
}
