/*Задание 1
var a = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var i = 0;
while (i < a.length) {
  console.log(a[i++]);
}
*/

/* Задание 2
var x1 = "Товар №1";
var x2 = "Товар №2";
var x3 = "Товар №3";
var x4 = "Товар №4";
var x5 = "Товар №5";
var basket = [x1,x2,x3,x4,x5];
for(var i=0;i<basket.length;i++){
    document.write(basket[i]+"<br>")
}
var basket = [], sum = 0;
for(var i=0; i<5;i++){
    basket[i] = parseInt(Math.random() * 500 + 2000);
    console.log("Товар № "+(i+1)+" стоит " + basket[i]+"\n");
    sum += basket[i];
}
alert("Стоимость товаров в корзине на " +sum+ " рублей");
*/

/*Задание 3
var basketPrice = 0;
basket = [{name:"Рубашка ", price:1700}, {name:"Туфли ", price:2300},{name:"Джинсы ", price:3000}];
function countBasketPrice(x) {
    for (i=0; i<basket.length; i++) { 
        basketPrice = basketPrice + basket[i].price;
    }
    return basketPrice;
}
document.write("В корзине: <br>");
for (i=0;i<basket.length;i++){document.write(basket[i].name + basket[i].price +' руб</br>');}
document.write('</br>Стоимость заказа: '+countBasketPrice(basket));
*/

/*Задание 4
for (var count = 0; count <= 10; count++);
    console.log(count);
*/

/*Задание 5
for (var i = 1, pyramid = " "; i <= 20; i++){
     pyramid += "x";
     console.log(pyramid);
}
*/