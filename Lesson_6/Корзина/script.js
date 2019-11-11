var d = document, itemBox = d.querySelectorAll('.item_box'), cartCont = d.getElementById('cart_content');
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}
function getCartData(){
	return JSON.parse(localStorage.getItem('cart'));
}
function setCartData(o){
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}
function addToCart(e){
	this.disabled = true;
	var cartData = getCartData() || {},	parentBox = this.parentNode, itemId = this.getAttribute('data-id'),	itemTitle = parentBox.querySelector('.item_title').innerHTML, itemPrice = parentBox.querySelector('.item_price').innerHTML;
	if(cartData.hasOwnProperty(itemId)){
		cartData[itemId][2] += 1;
	} else {
		cartData[itemId] = [itemTitle, itemPrice, 1];
	}
	if(!setCartData(cartData)){ 
		this.disabled = false;
		cartCont.innerHTML = 'Товар добавлен в корзину.';
		setTimeout(function(){
			cartCont.innerHTML = 'Продолжить покупки...';
		}, 500);
	}
	return false;
}
for(var i = 0; i < itemBox.length; i++){
	addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
}
function openCart(e){
	var cartData = getCartData(),
			totalItems = '',
			totalCount = 0,
			totalSum = 0;
	if(cartData !== null){
		totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th><th></th></tr>';
		for(var items in cartData){
			totalItems += '<tr>';
			for(var i = 0; i < cartData[items].length; i++){
				totalItems += '<td>' + cartData[items][i] + '</td>'; 
			}
			totalSum += cartData[items][1] * cartData[items][2];
			totalCount += cartData[items][2];
			totalItems += '<td><span class="del_item" data-id="'+ items +'">X</span></td>';
			totalItems += '</tr>';
		}
		totalItems += '<tr><td><strong>Итого</strong></td><td><span id="total_sum">'+ totalSum +'</span> $</td><td><span id="total_count">'+ totalCount +'</span> шт.</td><td></td></tr>';
		totalItems += '<table>';
		cartCont.innerHTML = totalItems;
	} else {
		cartCont.innerHTML = 'В корзине пусто!';
	}
	return false;
}
function closest(el, sel) {
	if (el !== null)
	return el.matches(sel) ? el : (el.querySelector(sel) || closest(el.parentNode, sel));
}
addEvent(d.getElementById('checkout'), 'click', openCart);
addEvent(d.body, 'click', function(e){
	if(e.target.className === 'del_item') {
		var itemId = e.target.getAttribute('data-id'),
		cartData = getCartData();
		if(cartData.hasOwnProperty(itemId)){
			var tr = closest(e.target, 'tr');
			tr.parentNode.removeChild(tr);
			var totalSumOutput = d.getElementById('total_sum'),
			totalCountOutput = d.getElementById('total_count');
			totalSumOutput.textContent = +totalSumOutput.textContent - cartData[itemId][1] * cartData[itemId][2];
			totalCountOutput.textContent = +totalCountOutput.textContent - cartData[itemId][2];
			delete cartData[itemId];
			setCartData(cartData);
		}
	}
}, false);
addEvent(d.getElementById('clear_cart'), 'click', function(e){
	localStorage.removeItem('cart');
	cartCont.innerHTML = 'Корзина очишена.';	
});
