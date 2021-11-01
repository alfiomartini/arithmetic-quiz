const { evalExp } = require("../src/random_node");

describe("Arithmetic Quiz", () => {
  beforeAll(async () => {
    await page.goto("http://localhost:5000");
  });
  /*
   * tests specifications
   */
  it("Check question #1 - increment score", async () => {
    const btn = await page.$(`.q01 > button[data-answer = "true"]`);
    await btn.click();
    const result = await page.$eval(".score-value", (elm) => elm.innerText);
    expect(result).toMatch("1");
  });

  it("Check question #1 - correct answer", async () => {
    const expText = await page.$eval(".q01 > .expression", (e) => e.innerText);
    const answer = evalExp(expText).toString();
    const result = await page.$eval(
      `.q01 > button[data-answer = "true"]`,
      (elm) => elm.innerText
    );
    expect(result).toMatch(answer);
  });

  //  it("Check question #2", async () => {});
  it("Check question #2 - increment score", async () => {
    const btn = await page.$(`.q02 > button[data-answer = "true"]`);
    await btn.click();
    const result = await page.$eval(".score-value", (elm) => elm.innerText);
    expect(result).toMatch("2");
  });

  it("Check question #2 - correct answer", async () => {
    const expText = await page.$eval(".q02 > .expression", (e) => e.innerText);
    const answer = evalExp(expText).toString();
    const result = await page.$eval(
      `.q02 > button[data-answer = "true"]`,
      (elm) => elm.innerText
    );
    expect(result).toMatch(answer);
  });

  // it("Check question #3", async () => {});
  it("Check question #1 - increment score", async () => {
    const btn = await page.$(`.q03 > button[data-answer = "true"]`);
    await btn.click();
    const result = await page.$eval(".score-value", (elm) => elm.innerText);
    expect(result).toMatch("3");
  });

  it("Check question #3 - correct answer", async () => {
    const expText = await page.$eval(".q03 > .expression", (e) => e.innerText);
    const answer = evalExp(expText).toString();
    const result = await page.$eval(
      `.q03 > button[data-answer = "true"]`,
      (elm) => elm.innerText
    );
    expect(result).toMatch(answer);
  });

  // it("Check question #4", async () => {});
  it("Check question #4 - increment score", async () => {
    const btn = await page.$(`.q04 > button[data-answer = "true"]`);
    await btn.click();
    const result = await page.$eval(".score-value", (elm) => elm.innerText);
    expect(result).toMatch("4");
  });

  it("Check question #4 - correct answer", async () => {
    const expText = await page.$eval(".q04 > .expression", (e) => e.innerText);
    const answer = evalExp(expText).toString();
    const result = await page.$eval(
      `.q04 > button[data-answer = "true"]`,
      (elm) => elm.innerText
    );
    expect(result).toMatch(answer);
  });

  // it("Check question #5", async () => {});
  it("Check question #5 - increment score", async () => {
    const btn = await page.$(`.q05 > button[data-answer = "true"]`);
    await btn.click();
    const result = await page.$eval(".score-value", (elm) => elm.innerText);
    expect(result).toMatch("5");
  });

  it("Check question #5 - correct answer", async () => {
    const expText = await page.$eval(".q05 > .expression", (e) => e.innerText);
    const answer = evalExp(expText).toString();
    const result = await page.$eval(
      `.q05 > button[data-answer = "true"]`,
      (elm) => elm.innerText
    );
    expect(result).toMatch(answer);
  });
});

/*
 *  https://github.com/puppeteer/puppeteer/issues/5165
 *  answer binds to arg, bellow
 * const btnAnswer = await page.$$eval(
 *   ".q01 > button",
 *   function (btns, arg) {
 *     return btns[0];
 *     return btns.filter((btn) => btn.innerText === arg)[0];
 *   },
 *   answer
 * );
 *
 */
