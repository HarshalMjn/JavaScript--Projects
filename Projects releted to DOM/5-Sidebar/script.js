const btn = document.querySelector(".btn")
const nav = document.querySelector(".navbar")


btn.addEventListener("click",function(){
    if(nav.classList.contains("active")) {
        nav.classList.remove("active");
    }
    else{
        nav.classList.add("active");
    }
   
    
    
})