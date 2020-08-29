// const name = "Владислав";
// console.log(typeof name); // string;
// const age = 30;

// const output = "Привет, меня зовут " + name + "и мой возраст " + age + " лет.";
// const output = `Привет, меня зовут ${nane} и мой возраст ${age} лет.`;
// console.log(output); // Привет, меня зовут Владислав и мой возраст 30 лет.
// const output = `Привет, меня зовут ${nane} и мой возраст ${
//   age < 20 ? "A" : "B"
// } лет.`;

// console.log(output); // Привет, меня зовут Владислав и мой возраст B лет.

// const output = `
//   <div>this.is div</div>
//   <p>this.is p</p>
// `;

// const name = "Владислав";
// // Несмотря на то, что String это примитивный тип данных. JS за кулисами всё равно оборачивает строку в new String и за счёт такого подхода в строке существует множество методов.
// console.log(name.length); // 9
// console.log(name.toUpperCase()); // ВЛАДИСЛАВ
// console.log(name.toLowerCase()); // владислав
// console.log(name.charAt(2)); //  a
// console.log(name.indeOf("лав")); //  6
// console.log(name.indeOf("ufd")); //  -1
// console.log(name.startWith("влад")); //  false чувствительна к регистру
// console.log(name.endWith("ад")); //  false
// console.log(name.repeat(3)); // Повторяет строку 3 раза
// const string = "         password          ";
// console.log(string); // выводит с пробелами..
// console.log(string.trim()); // без пробелов
// console.log(string.trimLeft()); // без пробелов слева
// console.log(string.trimRight()); // без пробелов справа

function logPerson(s, name, age) {
  if (age < 0) {
    age = "Ещё не родился";
  }

  console.log(s, name, age);
  // [ 'Имя: ', ', Возраст: ', '!' ] Vladislav 30
  // return "Info about person";
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = "Vladislav";
const personName2 = "Vasya";
const personAge = 30;
const personAge2 = -10;

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
const output2 = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
// console.log(output); // Info about person

console.log(output);
console.log(output2); // выполняется условие функции
