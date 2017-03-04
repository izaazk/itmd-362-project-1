// Name and Email validation Function.
function validation(){
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
if( name ==='' || email ===''){
alert("Please fill all fields...!!!!!!");
return false;
}else if(!(email).match(emailReg)){
alert("Invalid Email...!!!!!!");
return false;
}else{
return true;
}
}


// Submit form with HTML <form> tag function.
function submit_by_tag() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
var x = document.getElementsByTagName("contact");
x[0].submit(); //form submission
alert(" Name : " + name + " \n Email : " + email + " \n Form Tag : <contact>\n\n Form Submitted Successfully......");
}
}