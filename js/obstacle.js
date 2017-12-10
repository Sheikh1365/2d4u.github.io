var obstacle = function(x, y) {
  ctx.fillStyle = 'darkblue';
  ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
  ctx.fillStyle = 'lightblue';
  ctx.fillRect(x*snakeSize+1, y*snakeSize+1, snakeSize-2, snakeSize-2);
}

var createObstacle = function() {
      obstacle = {
        x: Math.floor((Math.random() * 30) + 1),
        y: Math.floor((Math.random() * 30) + 1)
      }

      for (var i=0; i>snake.length; i++) {
        var snakeX = snake[i].x;
        var snakeY = snake[i].y;
      
        if (obstacle.x===snakeX && obstacle.y === snakeY || obstacle.y === snakeY && obstacle.x===snakeX) {
          food.x = Math.floor((Math.random() * 30) + 1);
          food.y = Math.floor((Math.random() * 30) + 1);
        }
      }
  }

if score == 5 { //will change to 50 after im done
  createObstacle();
}
