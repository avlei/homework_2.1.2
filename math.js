const value1 = 20;
let value2 = Math.floor(Math.random() * 20);
console.log(value2);
/* В JavaScript операции выполняются в следующем порядке: Сначала выполняются деление (/) и умножение (*), так как это операции с более высоким приоритетом, чем сложение (+) и вычитание (-). */
console.log(value1 + value2 / 5 + 17);
