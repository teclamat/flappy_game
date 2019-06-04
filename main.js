

class FlappyBirdGame {
    constructor() {
        this.canv = document.createElement("canvas");
        document.body.appendChild(this.canv);
        this.canv.width = 440;
        this.canv.height = 600;
        this.ctx = this.canv.getContext('2d');
        window.addEventListener('keydown', (ev) => this.handleInput(ev));
    }

    handleInput(event) {
        if (event.code == "Space") {
            console.log(event.code);
        }
    }

    build() {

    }
    render() {

    }
}

const gap = 100;
const constant;

const bX = 10;
const bY = 100;

const gravity = 2;

const score = 0;

document.addEventListener("keydown",moveUp);

function moveUp(){
    bY -= 80;
    fly.play();


window.addEventListener('DOMContentLoaded', () => {
    const flappygame = new FlappyBirdGame();
});



