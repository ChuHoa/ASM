//search input on focus
let x=document.getElementById("input_text")
x.addEventListener("focus",inputOnClick)
function inputOnClick(){
    let wrap=document.getElementById("wrap_search")
    wrap.style.width="80%";
}
x.addEventListener("focusout",inputFocusOut)
function inputFocusOut(){
    let wrap=document.getElementById("wrap_search")
    wrap.style.width="30%";
}
//search button on focus
let y=document.getElementById("button_search")
y.addEventListener("focus",inputOnClick)
function inputOnClick(){
    let wrap=document.getElementById("wrap_search")
    wrap.style.width="80%";
}
y.addEventListener("focusout",inputFocusOut)
function inputFocusOut(){
    let wrap=document.getElementById("wrap_search")
    wrap.style.width="30%";
}