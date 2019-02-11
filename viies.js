var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

function dateTime(){
  var short = document.getElementById("date");
  short.innerHTML = hours + ":" + minutes + ":" + seconds;

  var button = document.getElementById("myButton");
  button.addEventListener("click", function(){
    button.style.display = "none";
  });

  document.body.style.backgroundColor = "blue";
}

window.addEventListener("keypress", function(e){
  console.log(e);
  if(e.charCode == 13){
    console.log("Kasutaja vajutas enterit");
  }
});
