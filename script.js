function form_submit()
{
    let a=String(document.getElementById("name").value);
    let b=String(document.getElementById("gmail").value);
    let c=String(document.getElementById("Password").value);

if (a=="")
{
    alert("Name must be required");
    a.focus();
    return false;

}
if (b=="")
{
    alert("gmail must be required");
    b.focus();
    return false;
}
if (c.length <8)
{
    alert("password is too short!")
    c.focus();
    return false;
}
if (c.length >12)
{
    alert("password is too long!")
    c.focus();
    return false;
}
else
{
    alert("Register Successfully")
}

}