// Асинхронность. Event Loop

// const timeout = setTimeout(() => {
//   clearTimeout(timeout);
//   console.log('hello');
// }, 1000)
// const interval = setInterval(() => {
//   clearInterval(interval);
//   console.log('hello');
// }, 1000)

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait);
// };

// delay(() => {
//   console.log("After two seconds");
// }, 2000);

const delay = (wait = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve();
      // reject("Что-то пошло не так. Повторите попытку.");
    }, wait);
  });

  return promise;
};

// delay(2500)
//   .then(() => {
//     console.log("After two seconds");
//   })
//   .catch((err) => console.log("Error", err))
//   .finally(() => console.log("finally"));

const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

getData().then((data) => console.log(data)); // [1, 1, 2, 3, 5, 8, 13]

async function asyncExample() {
  try {
    await delay(3000);
    const data = await getData();
    console.log("Data", data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }
}

asyncExample();
