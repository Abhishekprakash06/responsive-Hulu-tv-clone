let hamburg = document.querySelector("#hamburg");
let dots = document.querySelector(".dots");
let container1 = document.querySelector(".container1");
hamburg.addEventListener("click",()=>{
    if(dots.style.display=="none"){
        dots.style.display="inline";
        

    }
    else{
        dots.style.display="none"
    }
    
})
container1.addEventListener("mouseover", ()=>{
    dots.style.display="none";
})



let container3 = document.querySelector(".container3");
let l1 = document.querySelector(".l1");
let l2 = document.querySelector(".l2");
let l3 = document.querySelector(".l3");
let r1 = document.querySelector(".br");
let r2 = document.querySelector(".br2");
let r3 = document.querySelector(".br3");

l1.addEventListener("click",()=>{
    container3.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(images/p1.jpg)";
    r2.style.display="none";
    r1.style.display="inline-flex";
    r1.classList.add("born");
    r3.style.display="none";
    l1.style.color="white";
    l2.style.color="#70767A";
    l3.style.color="#70767A";
});

l2.addEventListener("click",()=>{
    container3.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(images/p2.jpg)"
    r2.style.display="inline-flex";
    r2.classList.add("born");
    container3.style.backgroundPosition="start";
    container3.style.backgroundSize="cover";
    r1.style.display="none";
    r3.style.display="none";
    l2.style.color="white";
    l1.style.color="#70767A";
    l3.style.color="#70767A";
});
l3.addEventListener("click",()=>{
    container3.style.backgroundImage="linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(images/p3.jpg)"
    container3.style.backgroundPosition="center";
    container3.style.backgroundSize="cover";
    r3.style.display="inline-flex";
    r3.classList.add("born");
    r2.style.display="none";
    r1.style.display="none";
    l3.style.color="white";
    l1.style.color="#70767A";
    l2.style.color="#70767A";
});


let showbtn = document.querySelector(".show");
let container5 = document.querySelector(".container5");
let hidebtn = document.querySelector(".hide");
let newdiv = document.querySelector(".onlyjs");

showbtn.addEventListener("click",()=>{
    container5.style.display="block";
    container5.classList.add("pop");
    showbtn.style.display="none";
})

hidebtn.addEventListener("click",()=>{
    // newdiv.classList.add("chop");
    container5.style.display="none";
    showbtn.style.display="flex";
})


let toggleoff = document.querySelector("#ticon");
let toggleon = document.querySelector("#toggleon");


toggleoff.addEventListener("click",()=>{
    toggleoff.style.display="none";
    toggleon.style.display="block";

})
toggleon.addEventListener("click",()=>{
    toggleon.style.display="none";
    toggleoff.style.display="block";
})









