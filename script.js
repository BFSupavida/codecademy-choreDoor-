// Access HTML elements Getting Started
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
//4
const startButton = document.getElementById('start')

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

// Define game logic to check doors, progress game, end game, and choose a random chore door
//Checking Doors
function isClicked(door) {
  if (door.src === closedDoorPath) {
    return true;
  } else {
    return false;
  }
};

function isBot(door) {
  if (door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }
};

//Writing Play and Game Over Logic
function gameOver(status) {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?' 
  } else {
    startButton.innerHTML = 'Game over! Play again?'
  }
  currentlyPlaying = false
}
//short form above
// startButton.innerHTML = status === "win" ? "You win! Play again?" : "Game over! Play again?"

function playDoor(door) {
  numClosedDoors = numClosedDoors -1
//numClosedDoors--
if(numClosedDoors === 0){
  gameOver('win');
} else if (isBot(door)) {
  gameOver();
}
}

doorImage1.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying && isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false) {
    startRound();
  }
}
let choreDoor;
//Choosing a Random Chore Door
function randomChoreDoorGenerator() {
  choreDoor = Math.floor(Math.random()*numClosedDoors);
    if (choreDoor === 0) {
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
      openDoor1 = beachDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = spaceDoorPath;
    } else {
      openDoor1 = beachDoorPath;
      openDoor2 = spaceDoorPath;
      openDoor3 = botDoorPath;
    }

}

// Start a game round
function startRound() {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3
    currentlyPlaying = true
    startButton.innerHTML = 'Good Luck!'
    randomChoreDoorGenerator()
} 

startRound();
