
let msTens = document.getElementById('msTens');
let msHundreds = document.getElementById('msHundreds');
let secondOnes = document.getElementById('secondOnes');
let secondTens = document.getElementById('secondTens');


var timer;
var msTensVal= 0;
var msHundredsVal= 0;
var secondOnesVal= 0;
var secondTensVal= 0;

let msTensFunc = function(){
    msTensVal++;
    if (msTensVal === 10){
        msTensVal = 0;
        msHundredsVal++;
        if (msHundredsVal === 10){
            msHundredsVal = 0;
            secondOnesVal++;
            if (secondOnesVal === 10){
                secondOnesVal = 0;
                secondTensVal++;
            }
        }
    }
    msTens.textContent = msTensVal;
    msHundreds.textContent = msHundredsVal;
    secondOnes.textContent = secondOnesVal;
    secondTens.textContent = secondTensVal;
    console.log(msTensVal);
    return msTensVal;
}
function startTimer() {
    timer = window.setInterval(msTensFunc, 10);
    startButton.onclick = false;
    stopButton.onclick = stopTimer;
}
function stopTimer(){
    clearInterval(timer);
    startButton.onclick = startTimer;
}
function resetTimer(){
    msTensVal = 0;
    msHundredsVal = 0;
    secondOnesVal = 0;
    secondTensVal = 0;
    msTens.textContent = msTensVal;
    msHundreds.textContent = msHundredsVal;
    secondOnes.textContent = secondOnesVal;
    secondTens.textContent = secondTensVal;
}
function printValues(){
    console.log('secondTens: ' + secondTensVal);
    console.log('secondOnes: ' + secondOnesVal);
    console.log('msHundreds: ' + msHundredsVal);
    console.log('msTens: ' + msTensVal);
}
let body = document.querySelector('body');
let buttonDiv = document.createElement('div');
let startButton = document.createElement('button');
let stopButton = document.createElement('button');
let resetButton = document.createElement('button');
startButton.textContent = 'Start';
stopButton.textContent = 'Stop';
resetButton.textContent = 'Reset';
buttonDiv.style.width = '90%';
buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = "center";
stopButton.style.margin = "0 10px";
body.append(buttonDiv);
body.style.flexWrap= "wrap";

startButton.onclick = startTimer;
resetButton.onclick = resetTimer;

buttonDiv.append(startButton);
buttonDiv.append(stopButton);
buttonDiv.append(resetButton);