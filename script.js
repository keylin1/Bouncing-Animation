var canvas = document.getElementById("creativeCoding");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;

// Here I am going to set the speed   
//ctx.fillStyle = 'rgb(27, 73, 101)';
//ctx.fillRect(x+250, 80, 520, 150);
var incrementor = 2;

function Square() {
  ctx.fillStyle = 'rgb(98, 182, 203)';
  ctx.fillRect(50, y, 250, 250);

  ctx.fillStyle = 'rgb(27, 73, 101)';
  ctx.fillRect(x, x, 50, 150);

  ctx.fillStyle = 'rgb(190, 233, 232)';
  ctx.fillRect(x, 10, 100, 70);

  ctx.fillStyle = 'rgb(202, 233, 255)';
  ctx.fillRect(x, 500, 620, 50);
  
  ctx.fillStyle = 'rgb(255, 200, 221)';
  ctx.fillRect(x+500, y, 110, 100);
}

function drawBoxxy() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Square();

  while (x + incrementor > canvas.width || x + incrementor < 0) {
    incrementor = -incrementor;
  }
  
  while (y + incrementor > canvas.height || x + incrementor < 0) {
    incrementor = -incrementor;
  }

  x += incrementor;
  y += incrementor;
  console.log(incrementor + "  incrementor value");
}

setInterval(drawBoxxy, 3);
