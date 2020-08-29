const person = {
  name: "Vladislav",
  age: 30,
  isProgrammer: true,
  languages: ["ru", "en", "de"],
  // "complex key": "Complex Value",
  // ["key_" + (1 + 3)]: "Computed key", // key_4
  greet() {
    // метод, потому что внутри объекта.
    console.log("greet from person");
  },
  info() {
    // console.log('Информация человека по имени', person.name) // не универсально, так как обращаемся по названии переменной объекта, если она изменится, то работать не будет
    console.log("Информация человека по имени", this.name);
  },
};

// console.log(person.name);
// const ageKey = "age";
// console.log(person[ageKey]);
// console.log(person["complex key"]);
// person.greet();

// person.age++;
// console.log(person.age); // 31
// person.languages.push("by");
// console.log(person.languages); // ["ru", "en", "de", "by"]

// person["key_4"] = undefined;

// console.log(person["key_4"]); // undefined;

// delete person["key_4"]; // удаляется из объекта

// const name = person.name;
// const age = person.age;
// const languages = person.languages

// const { name, age: personAge = 10, languages } = person;

// console.log(name, personAge, languages);

// for (let key in person) {
//   if (person.hasOwnProperty(key)) {
//     // проверяет наличие ключей в самом объекте и не лезет в прототип.
//     console.log("key", key); // ключи объекта.
//     console.log("value", person[key]);
//   }
// }

// const keys = Object.keys(person); // вовзараещт массив ключей
// keys.forEach((key) => {
//   console.log("key", key); // ключи объекта.
//   console.log("value", person[key]);
// });

// ============================
// Context =================================
// console.log(person.info()); // Информация человека по имени Vladislav

const logger = {
  keys() {
    console.log("Object keys:", Object.keys(this));
  },
  keysAndValues() {
    // Object.keys(this).forEach((key) => {
    //   console.log(`${key}: ${this[key]}`);
    // });
    // const self = this; // 1 способ
    Object.keys(this)
      .forEach(function (key) {
        console.log(`${key}: ${this[key]}`);
      })
      .bind(this); // 2 способ
  },

  withParams(top = false, between = false, bottom = false) {
    if (top) {
      console.log("-------- Start ---------");
    }
    Object.keys(this).forEach((key, index, array) => {
      console.log(`${key}: ${this[key]}`);
      if (between && index !== array.length - 1) {
        console.log("-----------------");
      }
    });
    if (bottom) {
      console.log("-------- End ---------");
    }
  },
};

// logger.keys(person) // keys Потому что this  ссылкется на объект logger

// const bound = logger.keys.bind(logger);

// console.log(bound); // keys

// logger.keys.call(person); // делает байнд и сразу вызывает функцию
// logger.keysAndValues.call(person);

logger.keysAndValues.call(person, true, true); // Передаёт через запятую значения
logger.keysAndValues.apply(person, [true, true]); // Передаёт значения массивом
