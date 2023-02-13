
function validate(){
let email = document.getElementById('email').value;
let user = document.getElementById('user').value;
let pass = document.getElementById('password').value;


function vali(){

  let username = document.getElementById( "uname").value;
  let password = document.getElementById("pward").value;

  if((username == email || username == user) && password == pass){
    window.location.assign("#Dashboard");
    alert("You Successfully LogedIn!.....");
  }
  else{
    window.location.assign("#login1");
    alert("Invalid Details");

  }
}
}