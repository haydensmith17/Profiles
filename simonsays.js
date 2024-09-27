const colors = ['green', 'red', 'yellow', 'blue'];
let progress = [];
let userInputStep = 0;

function start() {
    debugger
    progress = [];
    const sequence = colors[Math.floor(Math.random() * colors.length)];
    progress.push(sequence);
    showProgress();
}

function userInput(color) {
    debugger
    if (progress.length > 0) {
        sounds[color].play();
        if (progress[userInputStep] === color) {
            userInputStep++;
            if (userInputStep === progress.length) {
                const nextColor = colors[Math.floor(Math.random() * colors.length)];
                progress.push(nextColor);
                userInputStep = 0;
                showProgress();
            }
        } else {
            sounds.youBlewIt.play();
            alert(`Nice try you filthy animal: ${progress.length}`);
            progress = [];
            userInputStep = 0;
        }
    }
}

function showProgress() {
    let myColors = 0;
    const colorInserter = setInterval(() => {
        if (myColors < progress.length) {
            clearInputs();
            sounds[progress[myColors]].play();
            document.getElementById(progress[myColors] + 'Button').style.backgroundColor = 'black';
            myColors++;
        } else {
            clearInputs();
            clearInterval(colorInserter);
        }
        document.getElementById('score').innerHTML = "Score: " + progress.length;
    }, 1000);
}

function clearInputs() {
    colors.forEach(color => {
        document.getElementById(color + 'Button').style.backgroundColor = color;
    });
}

var sounds = {
    green: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    red: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    blue: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    yellow: new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
    youBlewIt: new Audio('./assets/you-blew-it!-ze7.mp3')
};
