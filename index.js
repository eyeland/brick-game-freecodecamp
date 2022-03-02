import { Paddle } from './paddle.js';
import { InputHandler } from './input.js';

let canvas = document.getElementById('gameScreen');
//ctx = context
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, 800, 600);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

new InputHandler(paddle);

let lastTime = 0

let imgBall = document.getElementById('img_ball')

function gameLoop(timestamp) {
    let deltaTime = (timestamp - lastTime);
    lastTime = timestamp;

    ctx.clearRect(0, 0, 800, 600);
    paddle.update(deltaTime);
    paddle.draw(ctx);

    ctx.drawImage(imgBall, 10, 10, 40, 40)

    requestAnimationFrame(gameLoop);

}

gameLoop()