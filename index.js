




// Dice logical Code
var randomNumber1 ;
var randomNumber2 ;
var randomNumber1 = Math.floor((Math.random() * 6)+1);
var randomNumber2 = Math.floor((Math.random() * 6)+1);
// randomeNumber1=Math.round(randomeNumber1);
document.querySelector(".player1 img").setAttribute("src","./images/dice"+randomNumber1+".png");
document.querySelector(".player2 img").setAttribute("src","./images/dice"+randomNumber2+".png");

if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else if(randomNumber1 > randomNumber2){
           document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else {
    document.querySelector("h1").innerHTML="Draw !";
}
