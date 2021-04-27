/* 
    Задание 1:

    Вам необходимо поделиться информацией о вашем родном городе.
     Все данные необходимо записать в отдельную переменную.
    Информация о городе: 
    - Название города (строка)
    - В какой стране находится этот город (строка)
    - Численность населения (число)
    - Есть ли футбольный стадион (boolean [ true(да) / false(нет) ])
*/
console.log("Task 1: ");

let myCity = {
	name: "Minsk",
	country: "Belarus",
	population: 2_000_000n,
	haveFootBallStadium: true,
};

console.log("My city information: ");
console.log(myCity);

/* 
    Задание 2:
    
    Напишите скрипт, который находит площадь прямоугольника

    - высота 40см
    - ширина 70см

    ps: каждая сущность должна находиться в отдельной переменной
*/

console.log("Task 2: ");

let rectangle = {
    height: 40,
    width: 70,
};

let height = rectangle.height;
let width = rectangle.width;

let rectangleArea = rectangle.height * rectangle.width;
console.log("Rectangle area, where width = "  
    + width + "sm , height = " 
    + height + "sm equals " 
    + rectangleArea + "sm");

/*
    Задание 3:
    
    Два автомобиля одновременно выехали навстречу друг другу из двух городов
    и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.

    Цель: Выяснить на каком расстоянии находятся города друг от друга
    и после всех вычеслений записать результат в переменную.

    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;

*/
console.log("Task 3: ");

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;

let distanceOfFirst = time * speedOfFirst;
let distanceOfSecond = time * speedOfSecond;

let generalDistance = distanceOfFirst + distanceOfSecond;

console.log("The wole distance is " + generalDistance + " kilometers");

/* 
    Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число
     и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : 
    "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение :
     "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение :
     "randomNumber больше 20, и меньше 50"
*/

console.log("Task 4: ");

const randomNumber = Math.floor(Math.random() * 100);
let messageOne = "Random number less than 20";
let messageTwo = "Random number more than 50";
let messageThree = "Random number more than 20, and less than 50 or equals 20 or 50";
let valueOne = 20;
let valueTwo = 50;
let condiditionOne = randomNumber < valueOne;
let condiditionTwo = randomNumber > valueTwo;
let flag = true;
console.log(flag);

console.log("Random number is : " + randomNumber);

if(condiditionOne) {
    console.log(messageOne);
} else if (condiditionTwo) {
    console.log(messageTwo);
} else {
    console.log(messageThree);
}

/* 
    Задание 5:
    
    Условную конструкцию из задания 4, 
    перепишите с помощью Switch Case
*/

console.log("Task 5: ");

switch(flag) {
    case condiditionOne:
        console.log(messageOne);
        break;
    case condiditionTwo:
        console.log(messageTwo);
        break;
    default:
        console.log(messageThree);
}