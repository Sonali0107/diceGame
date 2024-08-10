var randomNumber1 =Math.floor((Math.random() * 6)+1);
var randomdiceimg1 = "dice" + randomNumber1 + ".png";
var randomimgsrc = "images/" + randomdiceimg1;
var img = document.querySelectorAll("img")[0];
img.setAttribute("src", randomimgsrc);


var randomNumber2 = Math.floor((Math.random() * 6)+1);
var randomdiceimg2 = "dice" + randomNumber2 + ".png";
var randomimgsrc2 = "images/" + randomdiceimg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomimgsrc2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins🥳";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins🥳";
}
else{
    document.querySelector("h1").innerHTML="Match Draw";
}