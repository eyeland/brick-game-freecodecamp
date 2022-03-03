import { Paddle } from './paddle.js';
import { InputHandler } from './input.js';
import { Ball } from './ball.js';
import { Brick } from './brick.js';
import { level1, buildLevel } from './levels.js'

export class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = buildLevel(this, level1)
        
    
       

        this.gameObjects = [
            this.ball,
            this.paddle,
             ...bricks
           
        ]

        new InputHandler(this.paddle);
    }

    
    

    
    

    update(deltaTime) {

        this.gameObjects.forEach(object => object.update(deltaTime));

        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion)
    }

    draw(ctx) {
       
        this.gameObjects.forEach(object => object.draw(ctx))
    }
}