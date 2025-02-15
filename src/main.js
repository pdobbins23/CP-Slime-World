// Code Practice: Slime World
// Name: Peter Dobbins
// Date: 15/2/25

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    width: 320,
    height: 240,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    zoom: 2,
    scene: [ Overworld ]
};

const game = new Phaser.Game(config);
