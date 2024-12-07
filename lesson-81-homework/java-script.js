// Задание 1: Вывод четных чисел из массива

console.log("Задание 1: Четные числа из массива:");
const numbers = [1, 4, 7, 12, 9, 20, 15, 2, 18, 5]; 

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}



console.log("Задание 2: Цвета радуги в обратном порядке:");
const rainbowColors = ["красный", "оранжевый", "желтый", "зеленый", "голубой", "синий", "фиолетовый"];

for (let i = rainbowColors.length - 1; i >= 0; i--) {
    console.log(rainbowColors[i]);
}