let Button=document.querySelector("#button");
let Display=document.querySelector("#display");

Button.addEventListener("click",()=>{
    let first=Math.floor(Math.random()*10);
    let second=Math.floor(Math.random()*10);
    let third=Math.floor(Math.random()*10);
    let fourth=Math.floor(Math.random()*10);
    let fifth=Math.floor(Math.random()*10);
    let sixth=Math.floor(Math.random()*10);

    Display.innerText=`${first}  ${second}  ${third}  ${fourth}  ${fifth}  ${sixth}`;
})