console.log('🟥 🟦 🟩 🟨');
// input function for each color 
function handleRedClick(){
//  dont forget to test---    console.log( 'Ya it ran!');
let selectColor = document.querySelector('#blocks');
selectColor.innerHTML += `<div class="block red-fill" onclick = "removeBlock(event)"></div>`;

}

function handleBlueClick(){
    //  dont forget to test---    console.log( 'Ya it ran!');
    let selectColor = document.querySelector('#blocks');
    selectColor.innerHTML += `<div class="block blue-fill" onclick = "removeBlock(event)"></div>`;
    selectColor.innerHTML += `<span onclick="deleteblue(event)"></span>`;

}

function handleGreenClick(){
    //  dont forget to test---    console.log( 'Ya it ran!');
    let selectColor = document.querySelector('#blocks');
    selectColor.innerHTML += `<div class="block green-fill" onclick = "removeBlock(event)"></div>`;
}

function handleYellowClick(){
    //  dont forget to test---    console.log( 'Ya it ran!');
    let selectColor = document.querySelector('#blocks');
    selectColor.innerHTML += `<div class="block yellow-fill" onclick = "removeBlock(event)"></div>`;
}

function removeBlock(event){
   // event.target.remove();
}

//3 steps
//. 1. find correct html element 
// 2. read the vaule from the header 
// 3.assign the new vaule adding 1 to the vaule we just read ++1

