const Seconds = parseInt(prompt("Введите количество секунд: "));

const minutes = Math.floor(Seconds / 60);
const hours = Math.floor(minutes / 60);
const days = Math.floor(hours / 24);

console.log(`Количество секунд: ${Seconds}`);
console.log(`Минуты: ${minutes}`);
console.log(`Часы: ${hours}`);
console.log(`Дни: ${days}`);
