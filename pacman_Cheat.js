// Needs to be completed in breakout
window.pacman = pacman

// Needs to be complete when game is running 
// infinte lives

function infintelives(){if(pacman.lives <3){pacman.lives = 3}}
var bot = setInterval(infintelives,100)// 100 ms (Time)

// Needs to be complete when game is running 
// Invincibility 
pacman.die =function(){} // Calls to an empty function 


// Enable Power Pill \\
// Attacking the ghosts for this version 
// Needs to be completed in breakout
window.inky = inky
window.pinky = pinky 
window.blinky = blinky
window.clyde = clyde
// Needs to be complete when game is running 
function powerup (){
inky.dazzle();
pinky.dazzle();
blinky.dazzle();
clyde.dazzle();}
var bot = setInterval(powerup,100); // 100 ms (Time)
