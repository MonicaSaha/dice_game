function play(){
function random1(){
    var randomNumber= Math.random()*6+1;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}
var player1=random1();
var img1="./images/dice"+player1+".png";
document.querySelector(".image1").setAttribute("src",img1);
var player2=random1();
var img2="./images/dice"+player2+".png";
document.querySelector(".image2").setAttribute("src",img2);

if(player1>player2){
    document.querySelector("h1").textContent="😍 Woooohooooo! Player1 win ";
}
else if (player1<player2){
    document.querySelector("h1").innerHTML="Woooohooooo! Player2 win 😍";
}
else{
    document.querySelector("h1").innerHTML="🤗 Draw !!! 😊";
}
}
