'use strict';
const btnRoll = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');
const current1 = document.querySelector('#current--0');
const currentScore = document.querySelectorAll('.current-score');
const player = document.querySelectorAll('.player');
const score = document.querySelectorAll('.score');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

const bigScore = [0, 0];
let cScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    currentScore[`${activePlayer}`].innerHTML = 0;
    cScore = 0;
    player[`${activePlayer}`].classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    player[`${activePlayer}`].classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
    if (playing) {

        let randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log(randomNumber);
        dice.src = `dice-${randomNumber}.png`;
        if (randomNumber !== 1) {
            cScore += randomNumber;
            currentScore[`${activePlayer}`].innerHTML = `${cScore}`;
        }
        else {
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {

        bigScore[activePlayer] += cScore;
        score[activePlayer].innerHTML = bigScore[activePlayer];

        if (bigScore[activePlayer] >= 20) {
            playing = false;
            dice.style.display = 'none';
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }

})

btnNew.addEventListener('click', function () {
    location.reload();
})