var string = 
"let x = 10; // statement1 "+
"<br>var y = 20; // statement 2"+
"<br>y += 10; // statement 3";
let x = 10; // statement1 
var y = 20; // statement 2
y += 10; // statement 3

function printY(){
    document.getElementById("cal").innerHTML = string + 
   "<br>" + y;
}

