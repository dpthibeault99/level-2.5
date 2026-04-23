class Ball {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;

        this.x = canvas.width / 2;
        this.y = canvas.height / 2;

        this.radius = 50;
        this.color = "#6c14ba";

        this.speedX = 0;
        this.speedY = 0;
    }

    drawBall() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }

    moveBall() {
        this.speedX = 5;
        this.speedY = 5;
    }
  
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // RIGHT
        if (this.x + this.radius > this.canvas.width) {
            this.x = this.canvas.width - this.radius;
            this.speedX = -this.speedX;   
            this.color = "#e42222";
        }

        // LEFT
        if (this.x - this.radius < 0) {
            this.x = this.radius;
            this.speedX = -this.speedX;
            this.color = "#3700ff";
        }

        // BOTTOM
        if (this.y + this.radius > this.canvas.height) {
            this.y = this.canvas.height - this.radius;
            this.speedY = -this.speedY;
            this.color = "#48fd42";
        }

        // TOP
        if (this.y - this.radius < 0) {
            this.y = this.radius;
            this.speedY = -this.speedY;
            this.color = "#ffa600";
        }
    }
}
