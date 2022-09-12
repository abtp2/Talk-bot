window.onload = function(){
var a = localStorage.getItem("name");

if(a !== null) {
document.getElementById("form-div").style.display ="none";				
}
else{
document.getElementById("form-div").style.display ="flex";				
}		
}

document.getElementsByTagName("form")[0].onsubmit = function(){
var x = document.getElementById("uname");
var y = document.getElementById("uemail");
var z = document.getElementById("uqual");


event.preventDefault();
document.getElementById("form-div").style.bottom ="500%";
localStorage.setItem("name", x.value);
localStorage.setItem("email", y.value);
localStorage.setItem("qual", z.value);
}
