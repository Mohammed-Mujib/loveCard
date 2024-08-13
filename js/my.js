let word = document.querySelector(".word");
let yes = document.querySelector("#yesbtn");
let no = document.querySelector("#nobtn");
let icon = document.querySelector("#icon");
let box = document.querySelector(".box");
let conRec = box.getBoundingClientRect();
let btnRec = no.getBoundingClientRect();
yes.addEventListener("click",(e)=>{
    word.textContent = "I love You Too";
    // word.style.color = "var(--main-color)";
    icon.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    // icon.style.color =  "var(--main-color)";

    no.style.display = "none"
    yes.style.display = "none"
    
})
no.addEventListener("mouseover",()=>{
    // icon.innerHTML = `<i class="fa-solid fa-face-frown"></i>`
    no.style.position = "absolute";
    let w = Math.floor(Math.random() * (conRec.width - btnRec.width)) + 1;
    let h = Math.floor(Math.random() * (conRec.height - btnRec.height)) + 1;
    no.style.left = w + "px";
    no.style.top = h + "px";
})