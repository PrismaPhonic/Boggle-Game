const gameMethods = new GameServices();
const displayMethods = new Display();

/* 
 * EVENT HANDLERS
*/

$(document).ready(function () {

  //When word is submitted, check word and display results in modal
  $('#submit-button').on("click", function () {
    let userWord = $('input').val();

    gameMethods.checkWord(userWord, function (result) {
      displayMethods.displayResult(result);
    })
  })

})