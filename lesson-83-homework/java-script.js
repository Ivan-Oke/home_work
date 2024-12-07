
const myProfile = {
    firstName: "Иван",
    lastName: "Ширяев",
    age: 25,
    city: "Москва",
    isadmin: false,
};

console.log("Задание 1: Мой профиль:", myProfile);



myProfile.greet = function (name) {
    return `Hello "${name}"`;
};

console.log("Задание 2:");
console.log(myProfile.greet("Петр"));




const users = [
    { firstName: "Alice", lastName: "Smith", age: 25, isadmin: false },
    { firstName: "Bob", lastName: "Johnson", age: 30, isadmin: true },
    { firstName: "Charlie", lastName: "Brown", age: 28, isadmin: false },
    { firstName: "David", lastName: "Lee", age: 35, isadmin: true },
    { firstName: "Eve", lastName: "Wilson", age: 22, isadmin: false },
];

let simpleUserCount = 0;

console.log("Задание 3: Массив пользователей:", users);

for (let i = 0; i < users.length; i++) {
    if (!users[i].isadmin) {
        simpleUserCount++;
    }
}

console.log("Количество простых пользователей:", simpleUserCount); 