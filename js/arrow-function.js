// Вираз стрілкової функції — це компактна альтернатива традиційному виразові функції, що має певні семантичні відмінності й свідомі обмеження у використанні:

// Стрілкові функції не мають власних зв'язувань this, arguments та super, і їх не слід використовувати як методи.

// Стрілкові функції не можуть використовуватися як конструктори. Виклик їх з new викидає TypeError. Крім цього, вони не мають доступу до ключового слова new.target.

// Стрілкові функції зручні для простих операцій, особливо для тих, що можна записати в один рядок. Вони бувають двох видів:

// Без фігурних дужок: (...args) => expression - права частина є виразом: функція виконує його і повертає результат.Дужки можна опускати, якщо є лише один аргумент, напр.n => n * 2.

// З фігурними дужками: (...args) => { body } - дужки дозволяють включити в функцію більше однієї інструкції, але при цьому потрібно явно вказати return, щоб щось повернути.

//Arrow function. Syntax

function sayHello() {
    console.log('Hello');
}
sayHello();


const sayHello2 = () => {
    console.log('Hello2');
};
sayHello2();

function sayHelloToPerson(name) {
    console.log('hello, ' + name);
}

const sayHelloToPerson2 = (name) => {
    console.log('hello 2, ' + name);
}

sayHelloToPerson2('Vladyslav');


function summ(a, b, c, d) {
    // console.log(arguments);
    console.log(a + b + c + d);

}

summ(1, 2, 3, 4);


const summ2 = (a, b) => {
    console.log(a + b);
    // return a + b;
}

summ2(5, 20);


const summ3 = (a, b) => a + b;

console.log(summ3(85, 15));

// Example 

const users = [
    {
        name: 'Vitaly',
        age: 26,
        sex: 'male',
    },
     {
        name: 'Jessica',
        age: 17,
        sex: 'female',
    },
      {
        name: 'Robert',
        age: 16,
        sex: 'male',
    },
       {
        name: 'Sarah',
        age: 20,
        sex: 'female',
    },
        {
        name: 'Rob',
        age: 34,
        sex: 'male',
    },
];

//-------------------
//Звичайний вигляд, за допомогою методу filter.
// const filteredArr = users.filter(function (item) {
//     return item.age > 17;
// });

//-------------------
//Запис за допомогою стрілочних функцій.
// const filteredArr = users.filter((item) => {
//     return item.age > 17;
// });

//-------------------
// Скорочений запис стрілочної функції
const filteredArr = users.filter((item) => item.age > 17);

console.log(filteredArr);
