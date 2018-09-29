class GameServices {
  constructor() {
    this.score = 0;
    this.timer = 0;
  }

  checkWord(word, callback) {
    console.log("Checking word: ", word);

    $.get("/check-word", { "guess": word }, function success(response) {
      console.log("Wordcheck success: response is ", response.result);

      callback(response.result);
    })
  }

  isSuccessfulGuess(result) {
    if (result === "ok") {
      return true;
    }
    return false;
  }

  updateScore(word) {
    this.score += word.length;
  }

}

class Display {
  constructor() {
  }

  updateTime() {
    this.timer += 2.1;
    console.log(this.timer);
    $(".progress-bar").attr("aria-valuenow", this.timer).css("width", this.timer * 2);
  }

  makeFriendly(result) {
    let friendlyResult = '';
    if (result === "ok") {
      friendlyResult = "Well done";
    }
    else if (result === "not-on-board") {
      friendlyResult = "That word is not on the board.";
    }
    else {
      friendlyResult = "That's not a real word";
    }

    return friendlyResult;
  }

  displayResult(message) {

    $("#response-text").text(message);
    $("#word-response").modal('show');
  }

  displayScore(score) {
    $("#score").text("Score = " + score);
  }

}