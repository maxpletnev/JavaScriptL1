/*Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 Операция префикс-инкремента возвращает                                         значение уже измененной переменной.
d = b++; alert(d);           // 1 Операция пост-инкремента возвращает значение                                   переменной до выполнения этого инкремента.
c = (2+ ++a); alert(c);      // 5 текущее значение a = 2 + 1(префиксный                                         инкремент) + 2
d = (2+ b++); alert(d);      // 4 текущее значение b = 2 + 2, так как                                           используется постфиксный инкремент b                                           увеличиться на 1 при следующем обращении
alert(a);                    // 3 текущее значение a = 3 с учетом всех ранее                                     выполненых операций над a
alert(b);                    // 3 текущее значение b = 3 с учетом всех ранее                                     выполненых операций над b
*/

/*Задание 2
var a = 2;
var x = 1 + (a *= 2);        // var x = 1 + (a = a * 2);
alert (x)                    // x = 5;
*/

/*Задание 3
var a = 5;
var b =  -10;
if (a >= 0){
    alert ("Положительное значение");
}
else if (a < 0){
    alert ("Отрицательное значение");
}
if (b >=0){
    alert ("Положительное значение");
}
else if (b < 0){
    alert ("Отрицательное значение");
}
var c = a + b; 
    alert (c);
*/

/*Задание 4
var a = 7;
switch (a) {
    case 0:
        console.log (a++);
    case 1:
        console.log (a++);
    case 2:
        console.log (a++);
    case 3:
        console.log (a++);
    case 4:
        console.log (a++);
    case 5:
        console.log (a++);
    case 6:
        console.log (a++);
    case 7:
        console.log (a++);
    case 8:
        console.log (a++);
    case 9:
        console.log (a++);
    case 10:
        console.log (a++);
    case 11:
        console.log (a++);
    case 12:
        console.log (a++);
    case 13:
        console.log (a++);
    case 14:
        console.log (a++);
    case 15:
        console.log (a++);
    break;
}
*/

/*Задание 5
function sum(x = 5, y = 7) {
    var z = x + y;
    alert(z);
    return (z);
}
function subtraction (x = 7, y = 5){
    var z = x - y
    alert (z);
    return (z);
}
function multiplication (x = 11, y = 11){
    var z = x * y
    alert (z);
    return (z);
}
function division (x = 50, y = 2){
    var z = x / y
    alert (z);
    return (z);
}
var result = 10 + sum(10, 10);
alert(result);
var result = 90 - sum(10, 10);
alert(result);
var result = 120 - sum(10, 10);
alert(result);
var result = 100 - sum(1, 1);
alert(result);
*/

/*Задание 6
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
    case 'sum':
    return (arg1, arg2);
    }
}
console.log(mathOperation(5, 2, 'sum'));
*/

/*Задание 7
var a = null;
var b = 0;
var c = a >= b; //true
var d = a <= b; //true
alert(c);
alert(d);
*/

/*Задание 8
function power(val, pow) {
  if (pow == 1) {
    return val;
  } else {
    return val * power(val, pow - 1);
  }
}

alert( power(2, 3) );
*/