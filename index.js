let locateY = 0;
let topButton = document.querySelector(".topButton");

window.onload = function() {
    setTimeout (function () {
        scrollTo(0,0);
    },100);
}

window.addEventListener("scroll", (e) => {
    locateY = Math.round(window.scrollY);

    if (locateY >= 50) {
        topButton.style.right="60px";
    } else {
        topButton.style.right="-70px";
    }
})

topButton.addEventListener("click", ()=> {
    window.scrollTo({ top:0, behavior:'smooth'});
})

let subTab = document.querySelectorAll(".subTab");
let nav = document.querySelector("nav");
let MenuWrap = document.querySelectorAll(".MenuWrap");
let hidden = document.querySelector(".hidden");

for (let i = 0; i < subTab.length; i++) {
    subTab[i].addEventListener("mouseover", ()=> {
        nav.style.display="block";
        for (let j = 0; j < MenuWrap.length; j++) {
            MenuWrap[j].style.display="none";
        }
        MenuWrap[i].style.display="block";
        hidden.style.display="block";
    })
}
nav.addEventListener("mouseleave", ()=> {
    nav.style.display="none";
    hidden.style.display="none";
})