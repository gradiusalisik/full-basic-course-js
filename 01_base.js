// 1. Переменные ===================
// var  = variable

// var name = "Vladislav"; // считается устаревшим объявлением. Можно менять переменную
// const lastName = "Grigorzhevskii"; // Нельзя напрямую менять переменную
// let age = 30; //  В данном контексте можно тоже менять. Имеет область видимости фигурные скобки.
// const isProgrammer = true; // boolean;
// name = "Vlad"; // string

// console.log(name); // Vlad

// Какие названия переменных возможны в JS
// const _ = "private";
// const $ = "some value";
// const withNum5 = "5";

// Не можем
// const 5withNum = '5' // err
// const if = 'mkef' // err

// 2. Мутирование ===================
// console.log("Имя человека:" + firstName + ", а возраст человека:" + age); // Конкатенация. Даже несмотря на то, что age это число, то при конкатенации с строкой будет строка на выходе.
// alert("Имя человека:" + firstName + ", а возраст человека:" + age);

// const lastName = prompt('Введите фамилию');
// alert(firstName + ' ' + lastName);

// 3. Операторы  ===================
// let currentYear = 2020;
// const birthYear = 1990;
// // const age = currentYear - birthYear;
// // console.log(age) // 30

// const a = 10;
// const b = 5;
// let c = 32;
// // с = с + a === c += a Эти выражения равны.

// console.log(a + b); // 15
// console.log(a - b); // 5
// console.log(a * b); // 50
// console.log(a / b); // 2

// console.log(currentYear++); // Если константа, то менять не можем, поэтому вверху меняем на let  // 2020
// // В заисимости от того, где используем оператор ++ такое значение будет выводиться, если слева, то сначала увеличение потом вывод. Если справа, сначала вывод, потом увеличение. с -- также.
// console.log(currentYear); // 2021

// // 4. Типы данных ===================
// const isProgrammer = true; // boolean;
// const name = "Vladislav";
// const age = 30;
// let x;

// // 5 примитивный типов данных
// console.log(typeof isProgrammer); // boolean
// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof x); // undefined
// console.log(typeof null); // object - баг JS

// 5. Приоритет операторов  ===================
const fullAge = 30;
const birthYear = 1990;
const currentYear = 2020;

// > < >= <=
const isFullAge = currentYear - birthYear >= fullAge; // 30 >= 30 true

// 6. Условный операторы ===================
// const courseStatus = "pending"; // ready, fail, pending

// if (courseStatus === "ready") {
//   console.log("Курс уже готов и его можно проходить");
// } else if (courseStatus === "pending") {
//   console.log("Курс пока находится в процессе разработки");
// } else {
//   console.log("Курс не получился");
// }

const isReady = true;
// if (isReady) {
//   console.log("Всё готово"); // выполнится.
// } else {
//   console.log("Всё не готово");
// }

// isReady ? console.log("Всё готово") : console.log("Всё не готово") тернарное выражение - идентично тому, что написано выше.

// const num = 42; // number
// const num = "42"; // string

// console.log(num1 == num2); // с приведением типов true
// console.log(num1 === num2); // строгое сравнение, без приведения типов. false

// 7. Логические операторы  ===================
// && - логическое и
// || - логическое или
// ?? - если левая часть равна null
// !! - логическое отрицание
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8. Функции  ===================
// function calculateAge(year) {
//   return 2020 - year;
// }

// // const myAge = calculateAge(1990);

// // myAge(); // 30
// // calculateAge(1990); // 30

// function logInfoAbout(name, year) {
//   const age = calculateAge(year);
//   if (age > 0) {
//     console.log("Человек по имени " + name + "сейчас имеет возраст " + age);
//   } else {
//     console.log("Вообще-то это уже будущее!");
//   }
// }

// logInfoAbout('Владислав', 1990) // 30;
// logInfoAbout('Вася', 1980) // 40;

// 9. Массивы  ===================
// const cars = ['Мазда', 'Мерседес', 'Форд'];
// console.log(cars) // ['Мазда', 'Мерседес', 'Форд']

// const cars = new Array(['Мазда', 'Мерседес', 'Форд'])
// console.log(cars) // ['Мазда', 'Мерседес', 'Форд']

// console.log(cars.length); // 3
// console.log(cars[1]); // Мерседес

// cars[0] = "Porsche";

// console.log(cars); // ['Porsche', 'Мерседес', 'Форд']
// cars[cars.length] = "Mazda";

// console.log(cars); // ['Porsche', 'Мерседес', 'Форд', 'Mazda]

// 10. Циклы ===================
// const cars = ['Мазда', 'Мерседес', 'Форд'];

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i];
//   console.log(car) // выводит каждый элемент массива.
// }

// for (let car of cars) {
//   console.log(car); // результат такой же
// }

// 11. Объекты ===================
// const person = {
//   firstName: "Vladislav",
//   lastName: "Grigorzhevskii",
//   year: 1990,
//   languages: ["Ru", "En", "De"],
//   hasWife: false,
//   greet: function () {
//     console.log("greet from person");
//   },
// };

// console.log(person.name); // Vladislav
// console.log(person["lastName"]); // Grigorzhevskii
// const key = "year";
// console.log(person[key]); // 1990
// person.hasWife = true;
// console.log(person.hasWife); // true;
// person.isProgrammer = true;
// console.log(person.isProgrammer); // true;
// person.greet(); // greet from person
