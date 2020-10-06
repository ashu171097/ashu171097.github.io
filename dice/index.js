var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;


 var randomImage1= "images/dice" + randomNumber1 +".png";
 console.log(randomImage1);

 var randomImage2="images/dice" + randomNumber2 + ".png";
 console.log(randomImage2);

var first= document.querySelector(".img1").setAttribute("src", randomImage1);
console.log(first);
 var second =document.querySelector(".img2").setAttribute("src", randomImage2);

 if(randomNumber1>randomNumber2){
   console.log("Player 1 is win")
   document.getElementsByTagName("h1")[0].innerHTML="Player 1 is win";
 }else if(randomNumber2>randomNumber1){
   console.log("Player 2 is win")
  document.querySelector("h1").innerHTML="Player 2 is win";
} else if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="draw";
  console.log("draw");

}
