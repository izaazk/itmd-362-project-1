function addtext()
          {
              DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
             var fname = document.myform.first_name.value;
             var lname = document.myform.last_name.value;
             var email = document.myform.email.value;

             document.writeln("Thank you! You are registered with the following details:");
             document.writeln("<pre>");
             document.writeln("First Name    : " + fname);
             document.writeln("Last Name     : " + lname);
             document.writeln("Email Address : " + email);
       }
  