// const cars = ["Мазда", "Форд", "БМВ", "Мерседес"];
// const fib = [1, 1, 2, 3, 5, 8, 13];
// const people = [
//   { name: "Vladislav", budget: 4200 },
//   { name: "Elena", budget: 3500 },
//   { name: "Victoria", budget: 1700 },
// ];

// // console.log(cars); // ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// // Function
// function addItemToEnd() {}
// // Method
// cars.push("Рено");

// console.log(cars); // ['Мазда', 'Форд', 'БМВ', 'Мерседес', 'Рено'];
// cars.unshift('Волга');
// console.log(cars); // ['Волга', 'Мазда', 'Форд', 'БМВ', 'Мерседес', 'Рено']

// const firstCar = cars.shift(); // Мутирует массив и возвращает элемент, который удалили.

// console.log(firstCar) // Волга

// const lastCar = cars.pop();

// console.log(lastCar) // Рено

// console.log(cars.reverse()); // Переворачивает массив

// console.log(cars.indexOf("БМВ")); // 2 возвращает индекс элемента который мы ищем. Работает с примитивныеми типами данных.

// const index = cars.indexOf("БМВ");
// cars[index] = "Porsche";
// console.log(cars); //  ['Мазда', 'Форд', 'Porsche', 'Мерседес']

// ===============
// 2. Работа с сложными массивами(в которых объекты) ===========

// const index = people.findIndex(function(person) {
//   return person.budget === 3500;
// }) // Ищет индекс по удовлетворению условию.

// console.log(index) // 1
// console.log(people[index]) //  {name: 'Elena', budget: 3500}

// const person = people.find(function(person) {
//   return person.budget === 3500;
// }) // Возвращает item , который удовлетворяет условию.

// console.log(person) // {name: 'Elena', budget: 3500}
// let findedPerson;
// for (const person of people) {
//   console.log(person);
//   if (person.budget === 3500) {
//     findedPerson = person;
//   }
// }
// console.log(finededPerson) // {name: 'Elena', budget: 3500}

// const person = people.find((person) => person.budget === 3500);
// Если же в массиве ввобще нет такого человека, то в переменной person будет undefined
// console.log(person); // {name: 'Elena', budget: 3500}

// cars.includes("Мазда"); // Проверяет входит ли в массив значение. Работает с примитивными данными. возвращает true or false.

// const uppercaseCars = cars.map((car) => car.toUpperCase());
// console.log(uppercaseCars); // Все значения массива cars приведётся к верхнему регистру. при чём метод мап возвращает новый массив. Поэтому сам cars не изменится.

// const pow2 = (num) => num ** 2;
// const sqrt = (num) => Math.sqrt(num);

// const pow2Fib = fib.map(pow2);
// console.log(pow2Fib); // [1, 1, 4, 9, 25, 64, 169]

// const backToNomralFib = pow2Fib.map(sqrt);
// console.log(backToNomralFib); // [1, 1, 2, 3, 5, 8, 13]

// const filteredNumbers = pow2Fib.filter((num) => num > 20); // фильтрует массив по условию. Возвращает новый массив.
// console.log(filteredNumbers); // [25, 64, 169]

// Задача 1
// const text = "Привет, мы изучаем JavaScript";

// const reverseText = text.split("").reverse().join(""); // создаёт массив по разделителю, который мы указываем как переменную метода split

// // join(); // пол умолчанию из массива делает строку через запятые, но также в себя может принимать значение по которому создавать строку.
// console.log(reverseText); // tpircSavaJ меачузи ым ,тевирП

const people = [
  { name: "Vladislav", budget: 4200 },
  { name: "Elena", budget: 3500 },
  { name: "Victoria", budget: 1700 },
];

const allBudget = people.reduce((acc, person) => {
  if (person.budget > 2000) {
    // так неправильно делать с точки зрения продвинутого программирования.
    acc += person.budget;
  }
  return acc;
}, 0); // Первый парааметр функция, второй параметр значение, с которого мы хотим начать читать.Функция принимает аккумулятор. То значение, которое будет переобновляться на каждой итерации и оно будет сохранено. Второй элемент это непосредственно наш элемент. reduce возвращает итоговый результат.

const allBudget = people
  .filter((person) => person.budget > 2000)
  .reduce((acc, person) => {
    acc += person.budget;
    return acc;
  }, 0);
// Чейнинг - вызванные подряд методы

// const displayItems = allItems.filter(item => item.name.contains('phone')) // contains проверяет содержится ли подстрока в строке.
