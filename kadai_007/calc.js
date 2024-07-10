// Randomization numbers from 1 - 100
let num = Math.floor(Math.random() * 100) + 1;

// If the number is multipliable to [3] and [5] then it says "3と５の倍数です"
if (num % 3 === 0 && num % 5 === 0) {
    console.log('3と５の倍数です');
}

// If the number is multipliable to only [5] then it says "5の倍数です"
else if (num % 5 === 0) {
    console.log('5の倍数です');
}
// If the number is multipliable to only [3] then it says "3の倍数です"
else if (num % 3 === 0) {
    console.log('3の倍数です');
}
// If its not any of the above, just display the number.
else {
    console.log(num)
}