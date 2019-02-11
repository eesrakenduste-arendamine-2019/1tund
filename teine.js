var txt = "See on tekst.";
var num = 5;
var notnumber = "5";

//console.log(notnumber);
//console.log(num);
/*console.log(num + num);
console.log(num + notnumber);
console.log("Mingi tekst " + txt + notnumber);*/

function changeText(){
  document.getElementById("text").innerHTML = "T-series will never win.";
}

window.onload = function showAlert(){
  console.log("Leht on laetud!");
};
