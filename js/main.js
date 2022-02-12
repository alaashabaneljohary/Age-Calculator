
let dateInput = document.getElementById("date");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");
let btnClick = document.getElementById("btnClick");
let age = document.getElementById("age");

var typeElement = document.getElementById("type");
 btnClick.addEventListener("click" , function(){
    let day = dateInput.value;
    let month = monthInput.value;
    let year = yearInput.value;
    let date = new Date();
   // console.log(date.getDate());

    let finalResult1 = day - date.getDate();
    let  finalResult2 =  date.getFullYear() - year;
    console.log(finalResult1 ,finalResult2)
    age.innerHTML = 'Your Age is '+finalResult2+' Years  '+finalResult1+' Days';
    if(finalResult2 >= 18 ){
        typeElement.innerHTML = "You are a young"
    }else{
        typeElement.innerHTML = "You are a kid"
    }

 });


    






























