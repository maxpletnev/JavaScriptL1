var stringsX = 20;
var columnsY = 20;
var snakeSpeed = 200;
var snake = [];
var direction = 'y+';
var gameIsRunning = false;
var snakeTimer;
var foodTimer;
var points = 0;
var score = 0;
var BARRIER_INTERVAL = 10000;
var barrier_timer;

function init() {
    prepareGameField();
    var wrap = document.getElementsByClassName('wrap')[0];
    wrap.style.width = '400px';
    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);
    addEventListener('keydown', changeDirection);
}

function prepareGameField() {
    var gameTable = document.createElement('table');
    gameTable.setAttribute('class', 'game-table ');
    
        for (var i = 0; i < stringsX; i++) {
        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;
        
        for (var j = 0; j < columnsY; j++) {
        var cell = document.createElement('td');
        cell.className = 'game-table-cell cell-' + i + '-' + j;
        row.appendChild(cell);
        }
    gameTable.appendChild(row);
    }
document.getElementById('snake-field').appendChild(gameTable);    
}

function startGame() {
    gameIsRunning = true;
    respawn();
    snakeTimer = setInterval(move, snakeSpeed);
    setTimeout(createFood, 5000);
       var barrier = document.querySelectorAll('.barrier-unit');
        for (i = 0; i < barrier.length; i++) {
        barrier[i].classList.remove('barrier-unit');
       }
       clearInterval(barrier_timer);
       barrier_timer = setInterval(createBarrier, BARRIER_INTERVAL);
       clearInterval(snake_timer);
       respawn();
}

function respawn() {
    var startCoordX = Math.floor(stringsX / 2);
    var startCoordY = Math.floor(columnsY / 2);
    
    var snakeHead = document.getElementsByClassName('cell-' + startCoordY + '-' + startCoordX)[0];
    snakeHead.setAttribute('class', snakeHead.getAttribute('class') + ' snake-unit');
    
    var snakeTail = document.getElementsByClassName('cell-' + (startCoordY-1) + '-' + startCoordX)[0];
    snakeTail.setAttribute('class', snakeTail.getAttribute('class') + ' snake-unit');
    
    snake.push(snakeHead);
    snake.push(snakeTail);
}

function move() {
    var snake_head_classes = snake[snake.length-1].getAttribute('class').split(' ');
    var new_unit;
    var snake_coords = snake_head_classes[1].split('-');
    var coord_y = parseInt(snake_coords[1]);
    var coord_x = parseInt(snake_coords[2]);
     if (direction == 'x-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
     }
     else if (direction == 'x+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
     }
     else if (direction == 'y+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
     }
     else if (direction == 'y-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
     }


     if (!isSnakeUnit(new_unit) && new_unit !== undefined) {

        new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
        snake.push(new_unit);
       
	   if (!haveFood(new_unit)) {

           var removed = snake.splice(0, 1)[0];
            var classes = removed.getAttribute('class').split(' ');
			

            removed.setAttribute('class', classes[0] + ' ' + classes[1]);
        }
     }
    else {
        finishTheGame();
    }
}

function isSnakeUnit(unit) {
    var check = false;

    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}

function haveFood(unit) {
    var check = false;
    var unitClasses = unit.getAttribute('class').split(' ');
    if (unitClasses.includes('food-unit')){
        check = true;
        createFood();
        score++;
    }
    return check;
}

function haveMine(unit) {
    var check = false;

    var unitClasses = unit.getAttribute('class').split(' ');

    // Если мина
    if (unitClasseslasses.includes('mine-unit')) {
        check = true;
        createMine();
        
    
    }
    return check;
}

function createFood() {
    var foodCreated = false;

    while (!foodCreated) { 
   
        var foodX = Math.floor(Math.random() * stringsX);
        var foodY = Math.floor(Math.random() * columnsY);

        var foodCell = document.getElementsByClassName('cell-' + foodY + '-' + foodX)[0];
        var foodCellClasses = foodCell.getAttribute('class').split(' ');


        if (!foodCellClasses.includes('snake-unit')) {
            var classes = '';
            points.textContent++;
            for (var i = 0; i < foodCellClasses.length; i++) {
                classes += foodCellClasses[i] + ' ';
            }

            foodCell.setAttribute('class', classes + 'food-unit');
            foodCreated = true;
            points = document.getElementsByClassName('points')[0]
        }
    }
}

function createBarrier() {
    var barrierCreated = false;
    while (!barrierCreated) {
        // Рандом
        var barrier_x = Math.floor(Math.random() * stringsX);
        var barrier_y = Math.floor(Math.random() * columnsY);
        // Проверка на змейку
        var barrier_cell = document.querySelector('.cell-' + barrier_y + '-' + barrier_x);
        if (!barrier_cell.classList.contains('snake-unit') && !barrier_cell.classList.contains('food-unit')) {
            barrier_cell.classList.add('barrier-unit');
            barrierCreated = true;
        }
    }
}

function changeDirection(e) {
    console.log(e.keyCode);
	switch (e.keyCode) {
        case 37: // Клавиша влево
            if (direction != 'x+') {
                direction = 'x-'
            }
            break;
        case 38: // Клавиша вверх
            if (direction != 'y-') {
                direction = 'y+'
            }
            break;
        case 39: // Клавиша вправо
            if (direction != 'x-') {
                direction = 'x+'
            }
            break;
        case 40: // Клавиша вниз
            if (direction != 'y+') {
                direction = 'y-'
            }
            break;
    }
}

function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snakeTimer);
    alert('Вы проиграли! Ваш результат: ' + score.toString());
}

function refreshGame() {
    location.reload();
}

window.onload = init;