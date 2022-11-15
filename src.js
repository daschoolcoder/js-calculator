const e = document.createElement("div");
e.innerHTML=` <html> <body> <div id="bo"> <div>
<br>
<lable for="1"> number 1 </lable> <input id="1" placeholder="num1"> </input> <br> <br><lable for="2"> number 2</lable> <input id="2" placeholder="num2"> </input>  
<br>                      
<br>
<lable for="op"> opporator </lable><input id="op" placeholder="opporator"> <button id="s"> Enter </button> 
<br>
<br> <p id="c">answer: </p> 
 </div> </body> </html> `;

document.body.appendChild(e);
var i1= document.getElementById("1"),i2 = document.getElementById("2"),i3 = document.getElementById("op");
i1.style = 'border-width:3px;border-color:black;';
i2.style = 'border-width:3px;border-color:black;';
i3.style = 'border-width:3px;border-color:black;';
var bo = document.getElementById("bo");

bo.style='background-color:rgb(12,1,255); width:400px;height:190px;';

const b = document.getElementById("s");
b.style='border-width:3px;background-color:rgb(100,100,100);border-color:black';
b.onclick = function Calc () {
const num1 = parseFloat(document.getElementById("1").value);
const num2 = parseFloat(document.getElementById("2").value);
const opp =  document.getElementById("op").value;

var answ;

if (opp == "/") {
answ = num1/num2;}

else if (opp == "*")

{answ = num1*num2
      ;}

else if (opp=="+")

{answ = num1 + num2
 ;}
 
else if (opp == "-")

{
answ = num1 - num2
 ;}

var o = document.getElementById("c");
o.innerHTML="answer: " + answ;  }
