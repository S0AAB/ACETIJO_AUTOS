var vida= 3;
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    
    this.classList.toggle("active");

   
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


const imagenes = [
    'imagen-0', 'imagen-1', 'imagen-2',
    'imagen-3', 'imagen-4', 'imagen-5',
    'imagen-6', 'imagen-7'
];

const imagenes2 = [
    'imagen-8', 'imagen-9', 'imagen-10',
    'imagen-11', 'imagen-12', 'imagen-13',
    'imagen-14', 'imagen-15'
];




function dibujar(){
var canvas = document.getElementById("lienzo");
if (canvas && canvas.getContext) {
var ctx = canvas.getContext("2d");
    if (ctx) {
                var centerX = canvas.width/2;
                
                
                ctx.font="15pt Verdana";
                ctx.fillStyle = "black";
                ctx.fillText("Intentos:"+ String(vida),vida,30);
                
               
                
           
            }
}
}
function limpiar(){
    var canvas = document.getElementById("lienzo");
    if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
        if (ctx) {
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    
               
                }
}
}
dibujar();



const puzzle = document.getElementById('puzzle');
const piezas = document.getElementById('piezas');

const puzzle2 = document.getElementById('puzzle2');
const piezas2 = document.getElementById('piezas2');


const mensaje = document.getElementById('mensaje');


let terminado = imagenes.length;
let terminado2 = imagenes2.length;


while (imagenes.length) {
    const index = Math.floor(Math.random() * imagenes.length);
    const div = document.createElement('div');
    div.className = 'pieza';
    div.id = imagenes[index];
    div.draggable = true;
    div.style.backgroundImage = `url("recursos/${imagenes[index]}.jpg")`;
    piezas.appendChild(div);
    imagenes.splice(index, 1);
}

while (imagenes2.length) {
    const index = Math.floor(Math.random() * imagenes2.length);
    const div = document.createElement('div');
    div.className = 'pieza2';
    div.id = imagenes2[index];
    div.draggable = true;
    div.style.backgroundImage = `url("recursos/${imagenes2[index]}.jpg")`;
    piezas2.appendChild(div);
    imagenes2.splice(index, 1);
}


for (let i = 0; i <=7; i++) {
    const div = document.createElement('div');
    div.className = 'placeholder';
    div.dataset.id = i;
    div.draggable=false;
    puzzle.appendChild(div);
}


for (let i = 8; i <=15; i++) {
    const div = document.createElement('div');
    div.className = 'placeholder2';
    div.dataset.id = i;
    puzzle2.appendChild(div);
}




piezas.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
});


piezas2.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
});




puzzle.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover');
});

puzzle2.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover');
});




puzzle.addEventListener('dragleave', e => {
    e.target.classList.remove('hover');
});

puzzle2.addEventListener('dragleave', e => {
    e.target.classList.remove('hover');
});



puzzle.addEventListener ('drop', e => {
    e.target.classList.remove('hover');

    const id = e.dataTransfer.getData('id');
    const numero = id.split('-')[1];
    
    if (e.target.dataset.id === numero) {
        e.target.appendChild(document.getElementById(id));

        terminado--;
       
        if (terminado === 0 && terminado2 === 0) {
            document.body.classList.add('ganaste');
        }
        
    }
    else{
        vida--;
        limpiar();
        dibujar();

        if(vida===0){
            document.body.classList.add('perdiste');
            }
    }
});

puzzle2.addEventListener ('drop', e => {
    e.target.classList.remove('hover');

    const id2 = e.dataTransfer.getData('id');
    const numero2 = id2.split('-')[1];
    
    console.log(e.target.dataset.id);
    console.log(numero2);

    if (e.target.dataset.id === numero2) {
        e.target.appendChild(document.getElementById(id2));
        
        terminado2--;
      

        if (terminado === 0 && terminado2 === 0) {
            document.body.classList.add('ganaste');
        }
    }
    else{
        vida--;
        limpiar();
        dibujar();
        if(vida===0){
        document.body.classList.add('perdiste');
        }
        }
});