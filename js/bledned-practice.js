// Blended - practice :

// Оголоси функцію canOpenTheDoor(hasKey, isFriend, isDoorLocked),
// яка перевіряє, чи можна відкрити двері.
// І повертає рядок "Двері можна відкрити" - якщо двері можна відкрити і
// "Двері зачинені", якщо - ні.
// Двері можна відкрити, якщо ключ є у власника або у його
// друга, або двері не закриті на замок.
// Значення параметрів будуть задаватися під час виклику функції:
// hasKey - буль (вказує чи є ключ у власника);
// isFriend - буль  (вказує чи є ключ у його друга);
// isDoorLocked - буль  (вказує чи відкриті двері, true - двері зачинені, false - двері відчинені);

function canOpenTheDoor(hasKey, isFriend, isDoorLocked) {
    if (!isDoorLocked || hasKey || isFriend) { 
        return 'Door is open';
    } else {
        return 'Door is close';
    }
}

// if (!isDoorLocked || hasKey || isFriend ? 'Door is open' : 'Door is close');

console.log(canOpenTheDoor(false,true,false))

 //Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане значення - число
// або за можливості перетворити рядок на число
// Якщо це число функція возводить число у квадрат і виводить рядок
// `The square of ${numberValue} is ${squaredNumber}`
// numberValue - отримане число або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.

function calculateSquare(value) {
    const number = Number.parseFloat(value);
    console.log(number);
    console.log(isNaN(number));
    if (isNaN(number)) {
        return 'Invalid input';
    } else {
        return `The square of ${number} is ${Math.pow(number, 2)}}`;
    }
}    
console.log(calculateSquare('hello')) 

// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

function checkString(value) {
    if (typeof value === 'string' && !value.includes('$')) {
        return `Довжина рядка ${value.length} символів`
    } else {
        return 'Помилка'
    }
}

console.log(checkString('Hello world'))

// Оголоси функцію isEvenNumber(number), яка перевіряє
// (за допомогою тернарного оператору) чи отримане значення
// є парним числом і виводить відповідне повідомлення
// "Число парне" або "Число непарне"
// Якщо функція отримує не число вивести повідомлення
// "Невалідне значення"

function isEvenNumber(number) {
    if (typeof number === 'number') {
        return number % 2 === 0 ? 'Odd (парне)' : 'Even (непарне)'
    } else {
        return 'Невалідне значення'
    }
}

console.log(isEvenNumber(5))

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

function formatMinutesToTime(minute) {
    const hours = Math.floor(minute / 60);
    const modifiedHours = String(hours).padStart(2, '0');
    const modifiedMinute = String(minute % 60).padStart(2, '0');

    return `${modifiedHours} : ${modifiedMinute}`;

    // console.log(hours)
    console.log(modifiedHours)
    console.log(modifiedMinute)
}

formatMinutesToTime(70);
console.log(formatMinutesToTime(70))

//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;


// for (let i = max; i >= min; i--) {
//     if (i % 2 === 0) {
//       console.log(i)
//     }

// }


// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно


// const max = 5;
// const min = 4;

// let sum = 0;

// for (let i = min; i <= max; i++) {
//     if (i % 2 === 0) {
//         sum += i;
//     }
// }
// console.log(sum)


// Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`


// let sum = 0;

// for (let i = 1; i <= 80; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//     }
    
// }
// console.log(`Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`)


// Знайти перше натуральне число, яке ділиться як на 2, так і на 3.


// let number;

// for (number = 1; ; number++) {
//     if (number % 2 === 0 && number % 3 === 0)
//         break;
// }

// console.log(number)


// Знайти суму всіх натуральних чисел в діапазоні від 1 до N,
// за винятком тих, які кратні 3.


// let n = 67;
// let sum = 0;

// for (let i = 1; i<= n; i++) {
//     if (i % 3 === 0) {
//        continue;
//     }
//     sum += i;
// }

// console.log(sum)



// Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."

function getCountryInfo(country) {
    let inFormation;
    switch (country) {
        case 'China':
            inFormation = 'Китай - найбільша країна за населенням у світі.'
            break;
         case 'Australia':
            inFormation = 'Австралія - найбільший острів та країна в Океанії.'
            break;
         case 'France':
            inFormation = 'Франція відома своєю гастрономією та мистецтвом.'
            break;
         case 'Germany':
            inFormation = 'Німеччина - найбільша економіка в Європі.'
            break;
         case 'Canada':
            inFormation = 'Канада - друга за площею країна у світі, відома своєю природою.'
            break;
        default: 
            inFormation = 'Інформація про цю країну відсутня.'
 
    }
    return inFormation;
        
}
console.log(getCountryInfo('Canada'))
