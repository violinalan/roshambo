const { argv } = require('yargs')

class Game {
    constructor(playerMove) {
        this._playerMove = playerMove;
    }

    play() {
        const computerMove = Computer.generate();

        if(playerMove === computerMove) {
            console.log("~It's a tie.~");
        }
        else if(playerMove === "rock") {
            if(computerMove === "paper") {
                console.log("~Computer wins.~");
            }
            else {
                console.log("~Player wins.~");
            }
        }
        else if(playerMove === "paper") {
            if(computerMove === "rock") {
                console.log("~Player wins.~");
            }
            else {
                console.log("~Computer wins.~");
            }
        }
        else {
            if(computerMove === "paper") {
                console.log("~Player wins.~");
            }
            else {
                console.log("~Computer wins.~");
            }
        }
    }
}

class Computer {
    static generate() {
        const rps = ["rock", "paper", "scissors"];
        const computerMove = rps[Math.floor(Math.random() * 3)];
        console.log(`Computer plays ${computerMove}!`);
        return computerMove;
    }
}

const playerMove = argv.move.toString();
console.log('Playing a game of Roshambo against the computer.');
console.log(`Player plays ${playerMove}!`);

let myGame = new Game(playerMove);
myGame.play();