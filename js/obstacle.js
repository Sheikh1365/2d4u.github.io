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
  }
