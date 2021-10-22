const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.screen');

let gridSize = 50;
let pixel = '';

const drawGrid = (screenSize) =>{
    for(let i=0;i< screenSize ** 2;i++){
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.backgroundColor = 'white';
        screen.appendChild(pixel);
    }
    screen.style.gridTemplateColumns = `repeat(${screenSize},auto)`;
    screen.style.gridTemplateRows = `repeat(${screenSize},auto)`;
};

drawGrid(gridSize);

const clear = (request) =>{
    if(request === "resize"){
        gridSize = prompt("Please enter a number for the grid :");
        if(gridSize > 100 || gridSize === null){
            gridSize = 100;
        }
    }
    screen.innerHTML = '';
    drawGrid(gridSize);
    active();
};

let currentMode = 'black';

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.id === 'resize' || button.id === 'clear'){
            clear(button.id);
        }else{
            currentMode = button.id;
            clear(button.id);
        }
    });
});

const randomColor = () =>{
    let color = 'rgba(';
    for(let i=0;i<3;i++){
        color += Math.floor(Math.random() * 255) + ',';
    }
    return color + '1)';
};

  
const active = () => {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pxl => {
        pxl.addEventListener('mouseover',(e)=>{
            switch(currentMode){
                case 'black':
                    e.target.style.backgroundColor = 'black';
                    break;
                case 'rgb':
                    e.target.style.backgroundColor = randomColor();
                    break;
            }
        });
    });
};
active();