
var randomnumber1=Math.floor((Math.random()*6)+1);

var randomnumber2=Math.floor((Math.random()*6)+1);

var dice1=document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+randomnumber1+".png");
var dice2=document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+randomnumber2+".png");


    if(randomnumber1 > randomnumber2)
    {
        document.querySelector("h1").textContent="🚩Player 1 wins!";

    }
    else if(randomnumber2 > randomnumber1)
    {
        document.querySelector("h1").textContent="🚩Player 2 wins!";

    }
    else{
        document.querySelector("h1").textContent="Draw!";

    }