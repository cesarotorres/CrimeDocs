//esta funcion verifica si los campos de input estan vacios.
function validateRequired(){
  var name = document.myForm.name.value;  
  var email= document.myForm.email.value; 
    var comment= document.myForm.comment.value;
    if (name == null || name=="") { document.getElementById("messagename").innerHTML = "*Fill the name field please!";
    }
    if (comment == null || comment=="") { document.getElementById("messageemail").innerHTML = "*Fill the Email field!";
    }
    if (email == null || email=="") {
    document.getElementById("messagecomment").innerHTML = "*Please insert something in the comment.";
    return false;
    }

  }
//Esta funcion valida la cantidad de caracteres en el input de nombre.
   function validateName(){
    var name=document.getElementById("name")

if(name.value.length>7){
alert("Your name is valid");
return true;
}
else { alert("Make sure your Full Name has at least 7 characters.");

return false;
}
   }
   //Esta funcion valida si hay un @ en tu email.
    function validateEmail(){
var mailformat = "@";

if (email.value.match(mailformat))
{
alert("Your email is valid.");    
return true;
}
else
{
alert("Make sure you're typing in a valid email.");    

return false;
}  
}
//Esta funcion se asegura de que el mensaje de feedback sea de mas de 9 caracteres.
function validateComment(){
var comment=document.getElementById("comment")

if(comment.value.length>9){
alert("Your message is valid");
return true;
}
else { alert("Make sure your comment has at least 10 characters.");

return false;
}
}
