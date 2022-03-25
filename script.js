// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


//Global Variables
//var pattern = [1, 5, 4, 2, 3, 1, 2, 4];
var pattern = [Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1), Math.floor(Math.random() * 5 + 1)];   // I could not get the required understanding of JavaScript to implement a for loop in the time I gave myself. I am looking forwards to learning more HTML, CSS, and JS. I had a blast with this project!
var progress = 0;
var gamePlaying = false;
var volume = 0.5;   //must be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound, will decrease as progress increases


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
var tonePlaying = false
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)


//function pat(length){     // supposed to generate a new pattern for each start of the game
//  var pattern = []
//  for (let i = 0; i<length + 1; i++){
//    //pattern[i] = Math.floor(Math.random() * 5 + 1);
//    //pattern.push(Math.floor(Math.random() * 5 + 1))
//  }
//  return pattern
//}


function startGame(){
    //initialize game variables
    //var pattern = pat(8)
    progress = 0;
    gamePlaying = true;  
    
    // swap the Start and Stop buttons (:
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
  
    playClueSequence()
}

function stopGame(){
    gamePlaying = false; 
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 536
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  clueHoldTime = clueHoldTime - 21.5; //progressevly speeds up the clue sequence
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You Lost.");
}
function winGame(){
  stopGame();
  alert("Game Completed! You Won!");
}


function guess(btn){
  console.log("user guessed: " + btn);
  
  if(!gamePlaying){
    return;    
  }
  
  if(pattern[guessCounter] == btn){
    //Correct guess
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //Game Complete, WIN
        winGame();
      }else{
        //Pattern correct. add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //good so far, check next guess
      guessCounter++;
    }
  }else{
    //Guess was incorrect, Game Over
    loseGame();
  }
}



