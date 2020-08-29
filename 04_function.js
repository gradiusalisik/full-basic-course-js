// 1. Функции ==================
// 1.1 Function Declaration

// greet("Влад"); // Привет - Влад.

// 1.2 Function Expression
// const greet2 = function greet2(name) {
//   console.log("Привет2 - ", name);
// };

// greet2("Влад"); // Привет2 - Влад.

// function greet(name) {
//   console.log("Привет - ", name);
// }

// Отличия ========
// Когда мы создаём FD , то обращаться мы можем к ней когда угодно. Это связано с тем, как работает интерпретатор JS. Т.е. мы можем объявить функцию ниже вызова и всё будет работать.
// В FE работает по другому. Будет выводится ошибка
// Cannot access 'greet2' before initialization

// console.log(typeof greet); // function
// console.dir(greet) Не что иное, как объект

// 2. Анонимные функции ================
// const counter = 0;
// const interval = setInterval(function () {
//   if (counter === 5) {
//     clearInterval(interval); // clearTimeout if use setTimeout
//   } else {
//     console.log(++counter);
//   }
// }, 1000);

// // 3. Стрелочные функции =================
// const arrow = (name) => {
//   console.log("Привет - ", name);
// };

// arrow("Влад");

// const arrow2 = (name) => console.log("Привет - ", name);
// arrow2("Влад");

// const pow2 = (num) => num ** 2;

// // 4. Параметры по умолчанию (нововведения в ES6)
// const sum = (a = 40, b = 1) => a + b;

// function sumAll(...all) {
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   console.log(all);
//   return result;
// }

// const res = sumAll(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5];
// console.log(res); // 15;

// 5. Замыкания
// из одной функции возвращаем другую с сохранением контекста.
function createMember(name) {
  return function (lastName) {
    console.log(name + lastName);
  };
}

const logWithlastName = createMember("Vladislav");

console.log(logWithlastName); // function
console.log(logWithlastName("Ivanov")); // VladislavIvanov
