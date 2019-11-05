var max = 999;
var digit = {number: Math.round(Math.random() * max), units: 0, tens: 0, hundreds: 0}
        if (digit.number <= 9) {
            digit.units = digit.number;
        } else if (digit.number <= 999) {
            digit.units = Math.floor(digit.number % 10);
            digit.tens = Math.floor(digit.number / 10 % 10);
            digit.hundreds = Math.floor(digit.number / 100 % 10);
        } else {
            digit.number = 0;
        }
        console.log(digit);
