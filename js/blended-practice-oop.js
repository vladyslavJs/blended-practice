// Напишіть стрілочну функцію яка буд перевіряти чи всі студенти
// у нашому масиві старші 18 років.

// Перевірити чи всі студенти старші 18 років.

const students = [
  { name: 'Alex', age: 17 },
  { name: 'Stas', age: 18 },
  { name: 'Mike', age: 22 },
  { name: 'Den', age: 20 },
];

const checkAge = students.every(student => student.age > 18);

console.log(checkAge);

// Є масив користувачів, кожен з яких має поля id та name. 
//  Потрібно знайти той де id = 1 і виведемо ім'я цього користувача у консоль

 let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
 ];

const user = users.find(user => user.id === 1);

console.log(user.name);

// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses.flatMap(course => course.topics).filter((elem, ind, arr) => arr.indexOf(elem) === ind);

// console.log(allTopics);

// const array = ['css', 'css', 'html'];

// Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
// перебирає масив і додає до кожного ім'я привітання.
// Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]   

// const names = ['Ivan', 'Maria', 'Anna'];

// const sayHi = names.map(name => `${name} Hello!`);

// console.log(sayHi);

// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.

const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' }
];

const getTotalBoysYears = (arr) =>
    arr
    .filter((friend) => friend.sex === 'm')
    .reduce((acc, friend) => acc += friend.age, 0);

console.log(getTotalBoysYears(friends));

