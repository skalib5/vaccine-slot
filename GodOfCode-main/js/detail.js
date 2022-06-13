function saveData()
{
let name,email,age,phone,adhaar,address,date,gender;
name   =document.getElementById("name").value;
gender =document.getElementById("gender").value;
email  =document.getElementById("emails").value;
phone  =document.getElementById("phones").value;
adhaar =document.getElementById("adhaar").value;
address=document.getElementById("address").value;
date   =document.getElementById("date").value;
age    =   document.getElementById("age").value;



if(name==""  ||  email=="" || phone=="" || adhaar=="" || address==""){
alert("FILL DATA")
}
else{
let user_records=new Array();
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email}))
{
  alert("duplicate data");
}
else
{
  user_records.push({
  "name   ":name,
  "gender ":gender,
  "email  ":email,
  "phone  ":phone,
  "adhaar ":adhaar,
  "address":address,
  "date   ":date,
  "age    ":age
})
localStorage.setItem("users",JSON.stringify(user_records));
alert("data stored in localstorage!");
window.location = "index.html";
}
}

}
console.log(false && false);