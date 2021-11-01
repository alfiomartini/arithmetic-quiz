//  arithop is a string describing an binary arithOp between integers
function evalExp(arithOp) {
  let validOp = /^\s*\d+\s*[-+*/]\s*\d+\s*$/;
  if (validOp.test(arithOp)) {
    const opnds = arithOp.split(/[-+/*]/).map((opnd) => parseInt(opnd.trim()));
    const opRegex = /[-+*/]/;
    const optor = arithOp[arithOp.search(opRegex)];
    switch (optor) {
      case "+":
        return opnds[0] + opnds[1];
      case "-":
        return opnds[0] - opnds[1];
      case "*":
        return opnds[0] * opnds[1];
      case "/":
        return Math.floor(opnds[0] / opnds[1]);
    }
  } else {
    console.log("invalid exp");
    return null;
  }
}

function generateExp() {
  const opnd1 = Math.floor(Math.random() * 100);
  const opnd2 = Math.floor(Math.random() * 100);
  const optors = "+-*/";
  const index = Math.floor(Math.random() * 4);
  const arithOp = `${opnd1.toString()} ${optors[index]} ${opnd2.toString()}`;
  return arithOp;
}

function getNeighbour(value) {
  let delta = Math.floor(Math.random() * 10);
  if (value < 0) delta = -delta;
  return delta + value;
}

function getChoices(value) {
  const NUM_OPTIONS = 5;
  const choices = [];
  choices.push(value);
  for (let k = 1; k < NUM_OPTIONS; k++) {
    let candidate = getNeighbour(value);
    while (choices.includes(candidate)) {
      candidate = getNeighbour(value);
    }
    choices.push(candidate);
  }
  // remove value from position 0
  choices.splice(0, 1);
  const rndIndex = Math.floor(Math.random() * 5);
  // add value again in a random position
  choices.splice(rndIndex, 0, value);
  return choices;
}

/*
 * const exp01 = generateExp();
 * const exp02 = generateExp();
 * const exp03 = generateExp();
 * const exp04 = generateExp();
 * const val01 = evalExp(exp01);
 * const val02 = evalExp(exp02);
 * const val03 = evalExp(exp03);
 * const val04 = evalExp(exp04);
 * console.log(`${exp01} = ${val01}`);
 * console.log(`${exp02} = ${val02}`);
 * console.log(`${exp03} = ${val03}`);
 * console.log(`${exp04} = ${val04}`);
 * for (let k = 1; k <= 4; k++) {
 *   let exp = generateExp();
 *   let val = evalExp(exp);
 *   console.log(exp, val, getChoices(val));
 * }
 */

function getQuestion() {
  const exp = generateExp();
  const answer = evalExp(exp);
  const choices = getChoices(answer);

  return {
    exp,
    answer,
    choices,
  };
}

module.exports = {
  evalExp,
  getQuestion,
};
// console.log(getQuestion());
