function loadPerson(){
  var person = {
    firstName: "Tauri",
    lastName: "Kirsipuu",
    age: 29,
    eyeColor:"green"
  };

  var par = document.getElementById("myPar");

  par.innerHTML = person.firstName + " on " + person.age + " aastat vana.";
}

window.onload = function compareElements(){
  var num = 5;
  var num2 = 6;
  var notnum = "6";

  if(num2 === notnum && num2 > num){
    console.log("Number ja mittenumber on võrdsed");
  }else if(num2 !== notnum || num2 > num){
    console.log("Number ja mittenumber ei ole võrdsed");
  } else{
    console.log("Kumbki pole õige.");
  }
};
