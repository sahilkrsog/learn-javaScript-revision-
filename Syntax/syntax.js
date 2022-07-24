// how to create a variables:
var x;
let y;
var str = "var x;"+
"<br> let y;"+
"<br> x = 5;"+
"<br> y = 6;";

//how to use variables:

x = 5;
y = 6;
let z = x+y;

function printZ(){
    document.getElementById("para").innerHTML = str + "<br> Rrsult :"+ z;
    // document.write(str +"<br> Result :"+ z);
    
}
