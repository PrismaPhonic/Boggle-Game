class GameServices {
  constructor() {
  }

  checkWord(word, callback) {
    console.log("Checking word: ", word);

    $.get("/check-word", { "guess": word }, function success(response) {
      console.log("Wordcheck success: response is ", response.result);

      callback(response.result);
    })
  }
}

class Display {
  construction() {
  }

  displayResult(result) {
    $("#response-text").text(result);
    $("#word-response").modal('show');
  }
}