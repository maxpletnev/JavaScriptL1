	var score = 0;
	var answer = "";
	answer = prompt("У какого молодца, утром капает с конца?");
	if (answer == "Кран") {
	    alert("верно");
	    score = score + 100;
	} else {
	    alert("неверно");
	}
	answer = prompt("Волоса, волоса, посередине колбаса?");
	if (answer == "Кукуруза") {
	    alert("верно");
	    score = score + 200;
	} else {
	    alert("неверно");
	}
	answer = prompt("Тихо сзади подошел, дважды сунул и пошел.");
	if (answer == "Тапки") {
	    alert("верно");
	    score = score + 300;
	} else {
	    alert("неверно")
	}
alert("Вы выиграли МИЛЛИОН")
