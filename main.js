class inputHandling{
    constructor(ctx){
        window.addEventListener("keydown", function(event) {
            if(event.code=="Space"){
                console.log(event.code);
            }else{
                return;
            }
          }, true)
    }
}

class FlappyBirdGame {
    constructor() {
        const canv = document.createElement("canvas");
        document.body.appendChild(canv);
        canv.id = 'Flappy';
        canv.width = 300;
        canv.height = 530;
        const ctx = canv.getContext('2d');
        new inputHandling(ctx);
    }
    build(){

    }
    render(){

    }
}

window.addEventListener('DOMContentLoaded', () => {
    const flappygame = new FlappyBirdGame();
});
