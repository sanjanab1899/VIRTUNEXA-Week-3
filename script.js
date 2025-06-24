let num1, num2, score = 0;

function generateProblem() {
  num1 = Math.floor(Math.random() * 20) + 1;
  num2 = Math.floor(Math.random() * 20) + 1;
  document.getElementById('problem').textContent = `${num1} + ${num2} = ?`;
  document.getElementById('answer').value = '';
  document.getElementById('answer').focus();
  document.getElementById('resultMessage').textContent = '';
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value);
  const resultMessage = document.getElementById('resultMessage');

  if (userAnswer === num1 + num2) {
    score++;
    resultMessage.textContent = "Correct!";
    resultMessage.className = "result correct";
  } else {
    resultMessage.textContent = `Incorrect! The answer was ${num1 + num2}`;
    resultMessage.className = "result incorrect";
  }

  document.getElementById('score').textContent = `Score: ${score}`;
  setTimeout(generateProblem, 2000); // Wait 2 seconds before next problem
}
generateProblem();