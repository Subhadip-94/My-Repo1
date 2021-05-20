function validateForm(event){
    if(document.getElementById("email").value=='') {
        alert('email is mandatory');
    }
   
    if(document.getElementById("password").value=='') {
        alert('password is mandatory');
        }
    //return false;   
}