//assign: evaluation

let a = 5;  
let b, c;

b = ((a) * (5));
console.log(b);

b=((c) = (b/2));
console.log(b);
console.log(c);
b = a * 5;
console.log(b);

b = c = b/2;
console.log(b);
console.log(c);

//Number: age
//За допомогою prompt запитати у користувача його вік та підрахувати рік народження. Рік народження вивести за допомогою alert.

// let dateOfBirth = prompt("");
// const currentYear = new Date().getFullYear();
// const birthYear = currentYear - dateOfBirth;

// alert(`Ви народилися у ${birthYear} році.`)


//Number: temperature по Цельсію та Фаренгейту
// const celsiusTemp = prompt("Введіть температуру в градусах Цельсія:");
// const fahrenheitTemp = (celsiusTemp * 1.8) + 32;
// console.log(`${celsiusTemp} градусів Цельсія = ${fahrenheitTemp} градусів Фаренгейта`);

//Number: divide
//Зробіть калькулятор для розрахунку поділу націло двох чисел. Використовуйте Math.floor або альтернативи.

// const dividend = prompt("Введіть ділене:");
// const divisor = prompt("Введіть дільник:");
// const result = Math.floor(dividend / divisor);
// console.log(`Результат: ${result}`);

//Number: currency
// const rate = 37.6; // курс валюти
// const amount = parseFloat(prompt('Введіть суму у валюті:'));
// const result = (amount * rate).toFixed(2); // обмін валюти з округленням до двох знаків після коми
// alert(`${amount} у валюті за курсом ${rate} = ${result} грн`);

//Number: RGB
// let red = parseInt(prompt("Введіть значення червоного кольору (0-255):"));
// let green = parseInt(prompt("Введіть значення зеленого кольору (0-255):"));
// let blue = parseInt(prompt("Введіть значення синього кольору (0-255):"));

// // Конвертування у шістнадцяткову систему числення та форматування CSS-кольору
// let cssColor = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
// // Виведення результату
// console.log(cssColor);

//flat
// let floors = parseInt(prompt("Введіть кількість поверхів у будинку:"));
// let flatsPerFloor = parseInt(prompt("Введіть кількість квартир на поверсі:"));
// let flatNumber = parseInt(prompt("Введіть номер квартири:"));

// Розрахунок поверху та під'їзду
// let flatsPerEntrance = flatsPerFloor * (floors / 2);
// let entrance = Math.ceil(flatNumber / flatsPerEntrance);
// let floor = Math.ceil((flatNumber - (entrance - 1) * flatsPerEntrance) / flatsPerFloor);
// console.log(`Квартира з номером ${flatNumber} знаходиться на ${floor}-му поверсі ${entrance}-го під'їзду.`);