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

window.addEventListener('DOMContentLoaded', () => {
    const flappygame = new FlappyBirdGame();
});
