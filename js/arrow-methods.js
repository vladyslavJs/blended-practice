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

console.table(users);

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }
// виведення даних циклом for

// for (const item of users) {
//     console.log(item) 
// }
// виведення даних циклом for or, для масивів

//-------------------------------------
// users.forEach(function (item, index) {
//     console.log(item);
//     console.log(index);
// });
// метод forEach - це спрощення методу for of

// const count = {
//     men: 0,
//     women: 0,
// }

// users.forEach(function (element, index) {
//     element.sex === 'male' ? count.men++ : count.women++;
// });

// console.log(count);

//-------------------------------------
// const adultsUsers = users.filter(function (item) {
//     return item.age >= 18;
// });
// метод filter

// console.log(adultsUsers);

//-------------------------------------
const correctNames = users.map(function (item) {
    return item.sex === 'male' ? 'Mr. ' + item.name : 'Mrs. ' + item.name;
});


// метод map

//-------------------------------------
// Метод reduce.Принцип дії
// Акамулятор, іншими словами накопичувач.currentValue - поточне значення.Відклік починається з 0. 
// Нам потрібно вивести вік користувачів, а саме до накопичувача додавати поточні значення і так по кожному об'єкту 
// 1. accamulator = 0, currentValue = 26
// 1. accamulator = 26, currentValue = 17
// 1. accamulator = 43, currentValue = 16
// 1. accamulator = 59, currentValue = 20
// 1. accamulator = 79, currentValue = 34
// Result = 113
const sum = users.reduce(function (accmulator, currentValue) {
    return accmulator + currentValue.age;
}, 0);

console.log(sum / users.length);

//-------------------------------------
// Метод find. Шукає елемент в масиві.
const foundObj = users.find(function (item) {
    return item.name === 'Vitaly';
});

console.log(foundObj);

//-------------------------------------
// Метод some. Перевіряє чи хоч одна умова задовілняється.
const foundObject = users.some(function (item) {
    return item.age > 18;
});

console.log(foundObject);

//-------------------------------------
// Метод every. Перевіряє чи кожна умова задовілняється.
const found = users.every(function (item) {
    return item.age  >= 16;
});

console.log(found);

//-------------------------------------
// Метод findIndex. Шукає порядковий номер в масиві.
const foundIn = users.findIndex(function (item) {
    return item.age > 16;
});

console.log(foundIn);

console.log(users);
