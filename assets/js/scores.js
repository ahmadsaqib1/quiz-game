document.addEventListener("DOMContentLoaded", function () {
  let highScoresList = document.getElementById("highscores");
  let clearButton = document.getElementById("clear");

  // Load and display high scores from local storage
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Sort the highScoresList by score in descending order
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  if (highScores.length > 0) {
    highScores.forEach(record => {
      let listItem = document.createElement("li");
      listItem.textContent = record.initials + " - " + record.score;
      highScoresList.appendChild(listItem);
    });

  } else {
    highScoresList.textContent = "No high scores available.";
  }

  // Clear high scores
  clearButton.addEventListener("click", function () {
    localStorage.removeItem("highScores");
    highScoresList.innerHTML = "";
  });
});
