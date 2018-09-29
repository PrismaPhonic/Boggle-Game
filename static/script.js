const gameMethods = new GameServices();
const displayMethods = new Display();

let nIntervId;

function startCount() {
  nIntervId = setInterval(displayMethods.updateTime.bind(gameMethods), 1000);
}

/* 
 * EVENT HANDLERS
*/

$(document).ready(function () {

  //Start 60 second countdown timer
  startCount();

  //When word is submitted, check word and display results in modal
  $('#submit-button').on("click", function () {
    let userWord = $('input').val();

    gameMethods.checkWord(userWord, function (result) {
      if (gameMethods.isSuccessfulGuess(result)) {
        gameMethods.updateScore(userWord);
        console.log("score is: ", gameMethods.score)
        displayMethods.displayScore(gameMethods.score)
      }
      let friendly = displayMethods.makeFriendly(result);
      displayMethods.displayResult(friendly);
    })
  })

})