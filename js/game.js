var canvas;
var context;
var player;
var ball;
var timer;
var interval = 1000/60; //60 fps

canvas = document.getElementById("myCanvas");
context = canvas.getContext("2d");

// the paddle
player = new gameObject(200, canvas.height / 2, 30, 150, '#ff00f2'); // new not New
player.vx = 0; 
player.vy = 0;

// the ball
ball = new Ball(canvas, context);
ball.moveBall();

timer = setInterval(animate, interval);

function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // player movement
        if (w) {
                player.y -= 4;
        }

        if (s) {
                player.y += 4;
        }

        boundry();

        player.drawRect();
        player.move();

        ball.drawBall();
        ball.update();
}

function boundry() {
    if (player.y > canvas.height - player.height / 2) {
        player.y = canvas.height - player.height / 2;
    }

    if (player.y < player.height / 2) {
        player.y = player.height / 2;
    }
}
