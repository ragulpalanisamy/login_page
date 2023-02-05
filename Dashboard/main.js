
document.getElementById("signup").onclick = function(){
  window.location.assign("\login.html");
}

document.getElementById("sign").onclick = function(){
  window.location.assign("\index.html");
}

document.getElementById("loginbutton").onclick = function(){

  let username = document.getElementById("uname").value;
  let password = document.getElementById("password").value;

  if(username == "admin@gmail.com" && password == "admin123"){
    window.location.assign("dashboard.html");
    alert("You Successfully LogedIn!.....");
  }
  else{
    window.location.assign("index.html");
    alert("Invalid Details");

  }
}