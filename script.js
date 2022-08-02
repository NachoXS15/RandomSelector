//variables a utilizar a lo largo del codigo

const option = document.getElementById("option");
const optioncont = document.getElementById("span1");
const pick = document.getElementById("pick")
const add = document.getElementById("add");
const content = document.getElementById("opciones");
const result = document.getElementById("resultado");
const opciones = document.getElementById("opciones");
const span1 = document.getElementById("span1")
var cont = 1;

//funcion flecha que se activa al clickear el submit
add.addEventListener("click", (e)=>{
    if (option.value=="") {
        e.preventDefault();
        option.style.borderBottom="1px solid red";
    }else{
        option.style.background="transparent"
        if (cont == 1) {
            optioncont.innerHTML = option.value;
            cont++;

        }else if(cont > 1){
            const spanNew = document.createElement("span");
            spanNew.classList.add("span");
            content.appendChild(spanNew).innerHTML = option.value;
            cont++
        }
    }
})

//selector de valores aleatorios de elementos en un array, utilizando el elemento Math y varios de sus atributos
function selectorRandom() {
    if (option.value="") {
        pick.preventDefault();
    }else{
        let Options = document.querySelectorAll ('.span');
        let optionLenght = Options.length
        let randomSelect = Math.random();
        randomSelect = randomSelect*optionLenght
        randomSelect = Math.floor(randomSelect);
        let selectedPick = Options[randomSelect];
        let selected = selectedPick

        // se eliminan las opciones y el texto del input
        option.value = "";

        //crear elemento p
        const parrafo = document.createElement("p")
        const text1 = document.createTextNode("Este es el resultado: ")
        parrafo.appendChild(text1)
        result.appendChild(parrafo);

        //mostrar elección en pantalla y estilos
        result.appendChild(selected);
        opciones.innerHTML = '';
            
        result.style.marginTop="15px";
        result.style.textAlign="center"
        parrafo.style.fontSize="20px"

        //recargar pagina y estilos
        const again = document.createElement("a")
        const text2 = document.createTextNode("Si desea volver a empezar, click aquí");
        again.appendChild(text2);
        result.appendChild(again);
        again.style.display="block";
        again.style.textDecoration="none"
        again.style.color="white"
        again.style.textDecoration="underline"
        again.setAttribute("href", "index.html");  
    }
    

}