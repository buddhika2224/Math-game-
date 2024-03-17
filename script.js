const questionSection = document.querySelector("#question-section");
      const question = document.querySelector("#question");
      const answer = document.querySelector("#answer");
      const startButton = document.querySelector("#start");
      const score = document.querySelector("#score");
      const submitButton = document.querySelector("#submit-button");
      const q = document.querySelector("#q");
      const timeOutput = document.querySelector("#time");

      let correctAnswer = 0;
      let count = 0;
      let timer;
      let time;
      let duration = 10;

      function startGame() {
        startButton.classList.add("hidden");
        questionSection.classList.remove("hidden");
        score.textContent = 0;
        count = 0;
        generateQuestion();
      }

      //JS Random number function
      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      function generateQuestion() {
        answer.value = "";
        let questType = randomNumber(1, 4);
        switch (questType) {
          case 1:
            //addition
            let num1 = randomNumber(10, 100);
            let num2 = randomNumber(10, 100);
            question.textContent = num1 + " + " + num2;
            correctAnswer = num1 + num2;
            duration = 10;
            break;
          case 2:
            //subtraction
            let num3 = randomNumber(10, 100);
            let num4 = randomNumber(10, 100);
            question.textContent = num3 + " - " + num4;
            correctAnswer = num3 - num4;
            duration = 20;
            break;
          case 3:
            //multiplication
            let num5 = randomNumber(2, 10);
            let num6 = randomNumber(2, 10);
            question.textContent = num5 + " x " + num6;
            correctAnswer = num5 * num6;
            duration = 30;
            break;
          case 4:
            //division
            let num7 = randomNumber(2, 10);
            let num8 = randomNumber(2, 10);
            question.textContent = num7 * num8 + " / " + num8;
            correctAnswer = num7;
            duration = 35;
          default:
            break;
        }

        console.log(correctAnswer);
        count++;
        q.innerHTML = count;
        startTimer();
      }
      startButton.onclick = startGame;

      function nextQuestion() {
        if (answer.value == correctAnswer) {
          score.textContent++;
        }
        if (count == 10) {
          alert("Game over.  Your score is " + score.textContent + "/10");
          question.innerHTML = "";
          score.textContent = 0;
          startButton.classList.remove("hidden");
          questionSection.classList.add("hidden");
          q.textContent = 0;
          count = 0;
        }
        generateQuestion();
      }
      submitButton.onclick = nextQuestion;

      function startTimer() {
        time = 0;
        timeOutput.textContent = duration - time;
        clearInterval(timer);
        timer = setInterval(function () {
          time++;
          timeOutput.textContent = duration - time;
          if (time >= duration) {
            nextQuestion();
          }
        }, 1000);
      }