const BG_COLOUR = '#231f20';
const SNAKE_COLOUR = '#D5D5D5';

const gameScreen = document.getElementById('gameScreen');
let canvas, ctx;

const gameState = {
    player: {
        pos: {
            x: 3,
            y: 10,
        },
        vel: {
            x: 1,
            y: 0,
        },
        snake: [
            {x:1, y: 10},
            {x:2, y: 10},
            {x:3, y: 10},
        ]
    },
    food: {
        x: 7,
        y: 7,
    },
    gridsize: 20,
};

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    canvas.width = canvas.height = 600;
    
    ctx.fillStyle = BG_COLOUR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    document.addEventListener('keydown', keydown);
}

function keydown(e){
    console.log(e.keyCode);
}

init();

function paintGame(state){
    ctx.fillStyle = BG_COLOUR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.ellipse(300, 300, 300, 300, 0, 0, Math.PI*2);
    ctx.fill();
    
    const food = state.food;
    const gridsize = state.gridsize;
    const size = canvas.width / gridsize;
    ctx.fillStyle = '#FFA928';
    ctx.fillRect(food.x * size, food.y * size, size, size);
    
    paintPlayer(state.player, size, SNAKE_COLOUR);
}

function paintPlayer(playerState, size, colour){
    const snake = playerState.snake;
    
    ctx.fillStyle = colour;
    for(let cell of snake){
        ctx.fillRect(cell.x * size, cell.y * size, size, size);
    }
}

paintGame(gameState);