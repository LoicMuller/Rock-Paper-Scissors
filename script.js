const game = () => {
  let pScore = 5;

  const displayRules = () => {
    const openRules = document.querySelector("#open-rules");
    const closeRules = document.querySelector("#close-rules");
    const rulesDisplay = document.querySelector(".rules-container");
    const introScreen = document.querySelector(".match");

    openRules.addEventListener("click", () => {
      rulesDisplay.style.display = "block";
      introScreen.classList.add("p_e_none");
    });

    closeRules.addEventListener("click", () => {
      rulesDisplay.style.display = "none";
      introScreen.classList.remove("p_e_none");
    });
  };

  const playGame = () => {
    const playAgainBtn = document.querySelector(".play-again");

    const introScreen = document.querySelector(".match");
    const choices = document.querySelector(".choices");
    const result = document.querySelector(".result");

    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const computerBg = document.querySelector(".computer-border");
    const playerBg = document.querySelector(".player-border");

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        introScreen.classList.add("fadeOut");
        choices.classList.add("fadeIn");
        result.classList.add("dBlock");

        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        compareHands(this.id, computerChoice);

        playerHand.src = `./images/icon-${this.id}.svg`;
        computerHand.src = `./images/icon-${computerChoice}.svg`;

        computerBg.classList.add(`${computerChoice}`);
        playerBg.classList.add(`${this.id}`);

        playAgainBtn.addEventListener("click", () => {
          introScreen.classList.remove("fadeOut");
          choices.classList.remove("fadeIn");
          result.classList.remove("dBlock");

          computerBg.classList.remove(`${computerChoice}`);
          playerBg.classList.remove(`${this.id}`);
        });
      });
    });
  };

  const updateScore = () => {
    const introScreen = document.querySelector(".match");
    const choices = document.querySelector(".choices");
    const result = document.querySelector(".result");
    const playerScore = document.querySelector("#current-score");
    const gameOver = document.querySelector(".game-over");
    const restartGame = document.querySelector(".restartGame");
    const exitGame = document.querySelector(".exitGame");

    playerScore.textContent = pScore;

    if (pScore <= 0) {
      choices.classList.remove("fadeIn");
      introScreen.classList.add("fadeOut");
      result.classList.remove("dBlock");
      gameOver.classList.add("dBlock");
    }
    restartGame.addEventListener("click", () => {
      window.location.reload();
    });
    exitGame.addEventListener("click", () => {
      window.location.href = "https://www.google.com/";
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const resultText = document.querySelector(".result-text");
    if (playerChoice === computerChoice) {
      resultText.textContent = "It is a tie";
      return;
    }
    // check for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        resultText.textContent = "You Win";
        pScore++;
        updateScore();
        return;
      } else {
        resultText.textContent = "You Lose";
        pScore--;
        updateScore();
        return;
      }
    }
    // check for paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        resultText.textContent = "You Lose";
        pScore--;
        updateScore();
        return;
      } else {
        resultText.textContent = "You Win";
        pScore++;
        updateScore();
        return;
      }
    }
    // check for scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        resultText.textContent = "You Lose";
        pScore--;
        updateScore();
        return;
      } else {
        resultText.textContent = "You Win ";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  // CALL INNER FUNCTIONS
  displayRules();
  updateScore();
  playGame();
};

game();
