let diceContainer = document.querySelector(".dice");
let dice = document.querySelector("i");

let arr = [ {
    num: `<i class="fa-solid fa-dice-two"></i>`,
},
{
    num: `<i class="fa-solid fa-dice-three"></i>`,
},
{
    num: `<i class="fa-solid fa-dice-four"></i>`,
},
{
    num: `<i class="fa-solid fa-dice-six"></i>`,
    
},
{
    num: `<i class="fa-solid fa-dice-one"></i>`,

},
{
    num: `<i class="fa-solid fa-dice-five"></i>`,
}]


diceContainer.addEventListener("click",function(){
    let randomNum = Math.floor(Math.random() * arr.length);
    diceContainer.innerHTML = arr[randomNum].num;
   
})


