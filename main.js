
// .....DARK-MODE.....

// Screen
let light =document.getElementById("checkbox");
let ballp = document.querySelector(`.label .ball`)
let balls = document.querySelector(`.balll`)



light.addEventListener('change',()=>{
    
    if(localStorage.getItem('mode') == "light"){
        localStorage.clear()
        localStorage.setItem("mode","Dark")
    }else{
        
        window.localStorage.setItem("mode","light")
    }
    document.body.classList.toggle(localStorage.getItem('mode'))
    
})


if(localStorage.getItem('mode') == "light"){
    console.log("You Are In Light Mood")
    balls.style.cssText =" background-color: white;  transform: translateX(-24px);"
    ballp.style.cssText =" background-color: white; transform: translateX(-24px);"
}else{
    console.log("You Are In Dark Mood")
    balls.style.cssText =" background-color: #969696; transform: translateX(0px);"
    ballp.style.cssText =" background-color: #969696; transform: translateX(0px);"
}

light.addEventListener('change',()=>{location.reload()})


// Phone


let screen = document.getElementById("check");

screen.addEventListener('change',()=>{
    
    if(localStorage.getItem('mode') == "light"){
        console.log("You Are In Dark Mode.")
        localStorage.clear()
        localStorage.setItem("mode","Dark")
    }else{
        
        console.log("You Are In Light Mode.")
        window.localStorage.setItem("mode","light")
    }
    document.body.classList.toggle(localStorage.getItem('mode'))
})
document.body.classList.toggle(localStorage.getItem('mode'))

screen.addEventListener('change',()=>{location.reload()})

//------------------------------------------------------------------------

// FORM.......

let x = document.querySelector('.x');
let form = document.querySelector('.parent');
let Courses = document.querySelector('.Courses');
let blur = document.getElementById('blur');
//.....................
let whatsapp =document.querySelector("#whatsapp");
let phone =document.querySelector("#phone");
//...........................

x.onclick=function () {
    form.classList.add('none')
    blur.classList.add('none')

}

Courses.onclick=function () {
    form.classList.remove('none')
    blur.classList.remove('none')
}

document.forms[0].onsubmit = function(e){
    let whatsappV = false;
    let phoneV = false;
    
        console.log(whatsapp.value)
        console.log(whatsapp.value.length)
        console.log(phone.value)
        console.log(phone.value.length)

    if(whatsapp.value !== "" && whatsapp.value.length ==11) {
        console.log("Valid")
        whatsappV = true;
    };  
    
    if(phone.value !== "" && phone.value.length ==11) {
        console.log("Valid")
        phoneV = true;
    } ;  

    if(whatsappV === false || phoneV === false){

        e.preventDefault();
    };
}


