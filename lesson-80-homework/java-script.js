console.log("Задание 1: Четные числа от 2 до 12 (цикл for):");
for (let i = 2; i <= 12; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}




console.log("Задание 2: Числа от 10 до 1 в обратном порядке (цикл for):");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}




console.log("Задание 3: Четные числа от 2 до 12 (цикл while):");
let i = 2;
while (i <= 12) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

console.log("Задание 3: Числа от 10 до 1 в обратном порядке (цикл while):");
i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}