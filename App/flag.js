// function start(){
//   if(userflag){
//   console.log('hello!');
   
//   // console.log(document.location.pathname);
//   // window.location="file:///C:/Users/kapu/Desktop/Practise1/Mechloc/App/signin.html";

// }
// else{
//  document.getElementById("para").innerHTML='You have to login first!';

// }
// }
 
function formsubmit(){
	// console.log('Hello');
	
	var email=document.getElementById("loginform").elements.namedItem("inputEmail").value;
    var password=document.getElementById("loginform").elements.namedItem("login-password").value;
    // console.log(email);
    // console.log(password);
    if((email) && (password)){
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
      var flag=true;
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("flag",flag);
      window.location="file:///C:/Users/kapu/Documents/GitHub/Mechloc/App/index.html";


} else {
    // Sorry! No Web Storage support..
    console.log("sorry!");
    }
  }

}
function logout(){
	if(userflag){
	    console.log('ouch!');
	    var flag=false;
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		localStorage.setItem("flag",flag);
    }
    else{
    	window.location="file:///C:/Users/kapu/Desktop/Practise1/Mechloc/App/signin.html";

    }


}
// function map(){
// 	console.log('map');
// 	window.location="file:///C:/Users/kapu/Desktop/Practise1/Mechloc/App/geo.html";
// }
 var useremail=localStorage.getItem("email");
 var userflag=localStorage.getItem("flag");
 console.log(useremail);
 console.log(userflag);
var geoflag=false;
// start();