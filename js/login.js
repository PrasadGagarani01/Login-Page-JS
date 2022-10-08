function submit()
{
    let user=document.getElementById("user").value;
    let pwd=document.getElementById("pwd").value;
    let loggedin=document.getElementById("loggedin");

    

    if(user=="admin")
    {
        if(pwd=="password")
        {
            alert("You're logged in")
            return;
        }
    }

    alert("Incorrect UserID or Password")
}