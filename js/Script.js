//Prevents entire page from reloading on submit
$(document).ready(function() {
  $("#contact").on('submit', function(e) {
    e.preventDefault();
  })
})

function checkAll() {
  //Resets output from previous check
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var x = 0;

  if( name ==='' || email ==='')
	   {
		alert("Please fill all fields...!!!!!!");
		return false;
	   }
	else
	   {
         alert(" Name : " + name + " \n Email : " + email + " \n Results: \n\n Form Submitted Successfully......");
          $('input[type="text"], textarea').val('');
         $('input[type="email"], textarea').val('');
         
	   }   
}


