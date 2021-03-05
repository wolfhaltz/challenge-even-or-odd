const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

const oddOrEven = e => e % 2 == 0;

let result = numbers.map(oddOrEven);

console.log(result);