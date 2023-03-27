//Funcion que me aplica el estil a la pocion seleccionada en el menu y quita la previamente seleccionadf
function seleccionar (link){
    var opciones = document.querySelectorAll('#links a')
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className="seleccionado"
    //HACER DESAPARECER EL MENU UNA VEZ QUE SELECCIONAMOS UNA OPCION EN EL MENU RESPONSIVE

    var x = document.getElementById("nav")
    x.className="";
}

//funcion que muestra el menu responsive

function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className="responsive";
    }else{
        x.className = ""
    }
}

// deteccion de scroll para aplicar la animacion en la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("tp").classList.add("barra-progreso4");
        document.getElementById("rc").classList.add("barra-progreso4");
        document.getElementById("node").classList.add("barra-progreso4");
    }

}