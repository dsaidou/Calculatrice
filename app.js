const display = document.querySelector('.display');
const button = Array.from(document.querySelectorAll('.buttonContainer button'));
let colorMode = document.querySelector('.lightMode');
let modeIcon = document.querySelector('.fa-moon');
let container = document.querySelector('.container-calculator');
let body = document.querySelector('body');
let cadran = document.querySelector('.display');
let text = document.querySelector('.text');


button.map( button => {
    button.addEventListener("click", (e)=> {
        switch (e.target.innerText) {
            case "C":
                display.innerText = "";
                
                break;
            case "←":
                display.innerText = display.innerText.slice(0,-1);
                break;

            case "=": 
                try {
                    display.innerText = eval(display.innerText);
                }
                catch{
                    display.innerText ='ERROR !';
                }
                break;
        
            default:
                display.innerText += e.target.innerText;
                break;
        }
    })
})



colorMode.addEventListener('click', () => {
    colorMode.classList.toggle('darkmode');
    modeIcon.classList.toggle('fa-sun');
    modeIcon.classList.toggle('fa-moon');
    container.classList.toggle('darkContainer');
    body.classList.toggle('darkBody');
    cadran.classList.toggle('darkCadran');
    text.classList.toggle('dark-text')
    for(i=0; i<button.length; i++){
        button[i].classList.toggle('dark-button')
    }
})

const count = 50;
let i = 0;
let signTab = ["+","-","x","÷","y","z","√x"];
while( i < count){
    let sign = document.createElement('i');
    body.appendChild(sign);
    i++

    sign.innerText = signTab[Math.floor(Math.random() * signTab.length )]
    sign.style.fontSize = Math.random()*2 +"em";
    sign.style.position = "absolute";
    sign.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    sign.style.top = Math.floor(Math.random()* window.innerHeight) + "px";
    sign.style.zIndex = -1;
}