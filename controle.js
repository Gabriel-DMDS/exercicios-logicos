const array = [10, 20, 30, 40, 60];

if (array.some(num => num > 50)) {
    console.log("O array possui ao menos um número maior que 50");
} else {
    console.log("O array não possui números maiores que 50");
}