const users = [
    {
        name: 'Vitali',
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

// console.table(users);

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }
//виведення даних циклом for

// for (const item of users) {
//     console.log(item) 
// }
//виведення даних циклом for or, для масивів

// users.forEach(function (item, index) {
//     console.log(item);
//     console.log(index);
// });
//метод forEach - це спрощення методу for of

// const count = {
//     men: 0,
//     women: 0,
// }

// users.forEach(function (element, index) {
//     element.sex === 'male' ? count.men++ : count.women++;
// });

// console.log(count);

const adultsUsers = users.filter(function (item) {
    return item.age >= 18;
});

console.log(adultsUsers);
console.log(users);
