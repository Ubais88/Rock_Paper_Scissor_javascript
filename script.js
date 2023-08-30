window.onload = function(){
    // fetching score from local storage
    let savedResult1 = localStorage.getItem("userScore");
    let savedResult2 = localStorage.getItem("pcScore");
// seting previous score if exists
    if(savedResult1){
        document.getElementById("userscore").innerHTML = savedResult1;
    }
    else{
        savedResult1 = 0;
    }
    if(savedResult2){
        document.getElementById("pcscore").innerHTML = savedResult2;
    }
    else{
        savedResult2 = 0;
    }
}

//al choices for computer pick
const choices = ["rock", "paper", "scissor"];
// generate a random choice 
function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

// scores functions
function changeUserScore() {
    let savedResult1 = localStorage.getItem("userScore");
    savedResult1++;
    document.getElementById("userscore").innerHTML  = savedResult1;
    localStorage.setItem("userScore", savedResult1);
}
function changePcScore() {
    let savedResult2 = localStorage.getItem("pcScore");
    savedResult2++;
    document.getElementById("pcscore").innerHTML  = savedResult2;
    localStorage.setItem("pcScore", savedResult2);
}

// handle user click on game-icon
function handleImageClick(event) {
    const userpick = event.target.alt;
    const computerpick = computerPlay();
    console.log(userpick, computerpick);

    // selecting image div
    const resulticonone = document.getElementById("resulticonone");
    const resulticontwo = document.getElementById("resulticontwo");

    // set defult class as empty string
    resulticonone.className = "";
    resulticontwo.className = "";

    // adding one class for image div
    resulticonone.classList.add(userpick);
    resulticontwo.classList.add(computerpick);

    // hide rules while playing
    hideRules()
    
    // slecting game area for changing dynamically
    const playArea = document.getElementById('playArea');
    const showResult = document.getElementById('showResult');
    const nextbtn = document.getElementById('next-btn');

    // text win or loss
    const wonorlosss = document.getElementById('wonorloss');
    const againstpc = document.getElementById('againstpc');
    againstpc.className = "";

    // selecting image 
    const imageone = document.getElementById("firstimg");
    const secondimg = document.getElementById("secondimg");

    // adding dynamic source
    imageone.src =`./Assets/${userpick}.png`;
    secondimg.src =`./Assets/${computerpick}.png`;

    // playarea hidden while result
    playArea.classList.add('hidden');

    //  logic for generating winner 
    // Its tie situtation
    if (userpick === computerpick){
        console.log("tie")
        showResult.classList.remove('hidden');
        wonorlosss.innerHTML = "TIE UP"
        againstpc.classList.add('hide');
    }  
    //  user win the game
    else if(
        (userpick === "rock" && computerpick === "scissor") ||
        (userpick === "paper" && computerpick === "rock") ||
        (userpick === "scissor" && computerpick === "paper"))
        {
        console.log("userwin")
        showResult.classList.remove('hidden');
        nextbtn.classList.remove('hidden');
        wonorlosss.innerHTML = "YOU WIN";
        // update userScore
        changeUserScore();
      } 
    //   computer win the game
    else{
        console.log("computer win");
        changePcScore();
        showResult.classList.remove('hidden');
        wonorlosss.innerHTML = "YOU LOST"
      }
    }

// play again button logic
function playAgain(){
    hideRules();
    playArea.classList.remove('hidden');
    showResult.classList.add('hidden');
    var nextbtn = document.getElementById('next-btn');
    nextbtn.classList.add('hidden');
}

// logic to show all the rules
function showRules(){
    const rulesid = document.getElementById('rulesid');
    rulesid.classList.remove('hidden');
}

// logic to hide all the rules
function hideRules(){
    var rulesid = document.getElementById('rulesid');
    rulesid.classList.add('hidden');
}






