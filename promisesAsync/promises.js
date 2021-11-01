const outer = "World!";
const promise = new Promise((resolve) => resolve("Hello"));
promise
  .then((result) => result + " " + outer)
  .then((result) => console.log(result));

const promise2 = async () => {
  return "Hello";
};

(async () => {
  const hello = await promise2();
  const message = await promise3(hello);
  console.log(message);
  console.log(hello);
  const message2 = await promise4(funTest);
  console.log(message2);
})();

async function promise3(message) {
  return message + " " + outer;
}

async function promise4(fun) {
  return fun(outer);
}

function funTest(message) {
  return message;
}
