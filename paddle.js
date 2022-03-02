export class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 20;

        this.maxSpeed = 7;
        this.speed = 0;


        this.position = {
            x: gameWidth / 2 - this.width / 2,

            y: gameHeight - this.height - 10
        };
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }


    draw(ctx) {
        ctx.fillStyle = '#0ff'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update(deltaTime) {
        if(!deltaTime) return;

        this.position.x += this.speed;
        
        if(this.position.x < 0) this.position.x = 0
    }

    
}