function validate(callback){
    var username=document.getElementById("username");
    var pass=document.getElementById("password");
    var alert=document.getElementById("alert");
    if(username.value==="admin"&&pass.value==="12345"){
        callback();
    }
    else{
        alert.style.display="block";
        alert.innerHTML="<p>Invalid login credentials</p>"
        username.value="";
        pass.value="";
    }

}
function redirect(){
    
    window.location.href="todoapp.html";
}

