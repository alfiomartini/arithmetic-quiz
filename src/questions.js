import { getQuestion } from "./random.js";

const questions = document.querySelector(".questions");
questions.addEventListener("click", processQuestion);
const scoreElm = document.querySelector(".score-value");
const NUM_QUESTIONS = 5;

const STATE = {
  num_questions: NUM_QUESTIONS,
  scoreVal: 0,
  answered: new Array(NUM_QUESTIONS).fill(false),
};

function setScore() {
  scoreElm.innerText = `score: ${STATE.scoreVal}`;
}

for (let j = 0; j < STATE.num_questions; j++) {
  const question = getQuestion();
  const btnsClass = `.q0${j + 1} > button`;
  const expClass = `.q0${j + 1} > .expression`;
  const expElem = questions.querySelector(expClass);
  expElem.innerText = question.exp;
  const buttons = questions.querySelectorAll(btnsClass);
  buttons.forEach((btn, index) => {
    btn.innerText = question.choices[index].toString();
    const answer = question.answer.toString();
    if (answer === btn.innerText) {
      btn.dataset.answer = "true";
    } else {
      btn.dataset.answer = "false";
    }
  });
}

function processQuestion(event) {
  const button = event.target;
  const question = button.parentElement;
  const mark = question.querySelector(".is-correct");

  if (button.dataset.answer === "true") {
    STATE.scoreVal++;
    setScore();
    mark.innerHTML = "&#10003"; // check mark
  } else {
    mark.innerHTML = "&#9932";
  }
}