// 1. Number ========================
// const num = 42; // integer
// const float = 42.42; // float
// const pow = 10e3; //
// console.log(num); // 42

// console.log("Number.MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER); // Максимальное число в js, которое можно обрабатывать.

// console.log("Math.pow 53", Math.pow(2, 53) - 1); // получим тоже число, что и выше.

// console.log("Number.MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);

// console.log("MAX_VALUE", Number.MAX_VALUE);
// console.log("MIN_VALUE", Number.MIN_VALUE);
// console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
// console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
// console.log("2 / 0", 2 / 0); // Infinity бесконечность.
// console.log(Number.NaN); // Not a Number
// console.log(typeof Number.NaN); // number
// console.log(2 / undefined); // NaN
// const weird = 2 / undefined;
// console.log(Number.isNaN(weird)); // true
// console.log(Number.isNaN(42)); // false
// console.log(Number.isFinite(Infinity)); // false Проверяет конечность числа.
// console.log(Number.isFinite(42)); // true

// const stringInt = "40";
// const stringFloat = "40.42";
// console.log(stringInt + 2); // 402 string
// console.log(Number.parseInt(stringInt) + 2); // 42 string
// console.log(Number(stringInt) + 2); // 42 string
// console.log(+stringInt + 2); // 42 string

// console.log(parseInt(stringFloat) + 2); // 42;
// console.log(parseFloat(stringFloat) + 2); // 42.42;
// console.log(+stringFloat + 2); // 42.42;

// console.log(0.4 + 0.2); // 0.6 , но консоль выведет 0.6000000000000001

// console.log(2 / 5 + 1 / 5); // делает тоже самое...

// console.log((0.4 + 0.2).toFixed(4)); // 0.6000 string Оставляет количество цифр после запятой, без округления.

// console.log(parseFloat((0.4 + 0.2).toFixed(1))); // 0.6

// 2. BigInt ==========================================
// Отдельный тип данных, который нужен для того, чтобы мы могли оперировать числами, который больше чем максимальный integer .
// Bigint может оперировать только с  Bigint
// console.log(typeof 90071992547409919999); // number
// console.log(typeof 90071992547409919999n); // bigint
// console.log(90071992547409919999n - 9007199254740991999n); // bigint

// console.log(-90071992547409919999n);
// console.log(-90071992547409919999.23231n) // error

// console.log(10n - 4); // error Cannot mix BigInt and other types
// console.log(parseInt(10n) - 4); // 6
// console.log(10n - BigInt(4)); // 6n
// console.log(5n / 2n); // 2n Так как дробная часть отсекается у BigInt

// 3. Math =================================
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.sqrt(25)); // 5
// console.log(Math.pow(5, 3)); // 125
// console.log(Math.abs(-42)); // 42
// console.log(Math.max(42, 12, 30, 11, 422)); // 422
// console.log(Math.min(42, 12, 30, 11, 422)); // 11
// console.log(Math.floor(4.9)); // 4 округляет вниз
// console.log(Math.ceil(4.1)); // 5 округляет вверх
// console.log(Math.round(4.6)); // 5 окргуляет к ближнему целому.
// console.log(Math.trunc(4.6)); // 4  возвращает целую часть числа путём удаления всех дробных знаков.
// console.log(Math.random()); // рандомное значение от 0 до 1

// 4 Example ================================
// function getRandomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRandomBetween(10, 42)); // рандомное число в пределах дипазона
