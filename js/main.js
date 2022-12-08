//BOTONES

const btnCrearReceta = document.querySelector('#btnCrearReceta');
const btnAnadirIngrediente = document.querySelector('#btnAnadirIngrediente');
const btnModificarIngrediente = document.querySelector('#btnModificarIngrediente');
const btnEliminarIngrediente = document.querySelector('#btnEliminarIngrediente');
const btnModificarComensales = document.querySelector('#btnModificarComensales');
const btnVisualizarReceta = document.querySelector('#btnVisualizarReceta');
const btnEliminarIngredientes = document.querySelector('#btnEliminarIngrediente');
const btnAnadirIngredienteLista = document.querySelector('#btnIngrediente');
const btnBucarReceta = document.querySelector('#btnBuscarRecetas');

//INPUTS


const nombreReceta = document.getElementById("nombre");
const numComensales = document.getElementById("comensales");
const nomIngredientes = document.getElementById("ingrediente-nombre");
const cantIngredientes = document.getElementById("ingrediente-cantidad");
const newCantIngredientes = document.getElementById("ingrediente-cantidad");
const newIngredientes = document.getElementById("anadir-ingrediente");
const delIngredientes = document.getElementById("eliminar-ingrediente");
const modComensales = document.getElementById("numero-comensales");
const buscarReceta = document.getElementById("buscar-receta");

//CURSORES
document.getElementById("btnVisualizarReceta").style.cursor = "not-allowed";
document.getElementById("btnBuscarRecetas").style.cursor = "not-allowed";
document.getElementById("buscar-receta").style.cursor = "not-allowed";

listaRecetas = [];
listaIngredientes = [];
//Variable creada para pasarla al JSON en un nuevo html-js
buscarNombre = buscarReceta.value;

btnCrearReceta.addEventListener("click",()=>{
    //activamos el boton de visualizar recetas
    btnVisualizarReceta.disabled = false;
    document.getElementById("btnVisualizarReceta").style.cursor = "pointer";
    //activamos el boton de buscar recetas
    btnBucarReceta.disabled = false;
    document.getElementById("btnBuscarRecetas").style.cursor = "pointer";
    //activamos el input de buscar recetas
    buscarReceta.disabled = false;
    document.getElementById("buscar-receta").style.cursor = "pointer";

        //objeto Receta
       Receta={
        nombre: nombreReceta.value,
        comensales : numComensales.value,
        ingredientes : listaIngredientes
       }
       //comprobar que receta no sea un nombre vacio o espacios
         if(Receta.nombre == "" || Receta.nombre == " "){
            alert("El nombre de la receta no puede estar vacio");
            return;
        }
        //comprobar que el numero de comensales no sea un numero vacio o espacios
        if(Receta.comensales == "" || Receta.comensales == " "){
            alert("El numero de comensales no puede estar vacio");
            return;
        }
        
       //vaciar los inputs
       nombreReceta.value="";
       numComensales.value ="";

       //unshift añade a la primera posicion , push a la ultima , en este caso mejor unshift
       listaRecetas.unshift(Receta);

       //vacio la lista ya que sino se imprimen todos en cada receta , asi en cada receta solo sus ingredientes 
       listaIngredientes = [];

       //convierte variables en Json para almacenarlo en el localstorage y poder utilizarlo en dos pestañas
       localStorage.setItem("listaRecetas",JSON.stringify(listaRecetas));
       
});

btnAnadirIngredienteLista.addEventListener("click",()=>{
    //Objeto Ingrediente
    Ingrediente={
        nombreIngrediente : nomIngredientes.value,
        cantidad : cantIngredientes.value
    }

    //vaciar los inputs
    nomIngredientes.value ="";
    cantIngredientes.value ="";
    
    //unshift añade a la primera posicion , push a la ultima , en este caso mejor unshift
    listaIngredientes.unshift(Ingrediente);
});

btnVisualizarReceta.addEventListener("click",()=>{ //no modificar //
    
    for (n in listaRecetas){
        console.log(listaRecetas[n]);
    }
    abrir();
});

//PRUEBA
function abrir(){
    window.open("resultado.html","width=120","height=120");
}
//*******************funcion pasar variables entre htmls y js en JSON
//localStorage.setItem("nombreClave",JSON.stringify(nombreOjeto));
//**********************************funcion obtener variable del JSON
//var nombreVariable=JSON.parse(localStorage.getItem("nombreClave"));


btnBucarReceta.addEventListener("click",()=>{
    comprobarReceta();
});

function comprobarReceta(){
    var recetaEncontrada=false;
    var receta = buscarReceta.value;
    for(var i = 0; i<listaRecetas.length; i++){
        if(listaRecetas[i].nombre == receta){
        recetaEncontrada=true;
        console.log(i);
        indice = i;
        //enviar indice al localstorage
        localStorage.setItem("indice",JSON.stringify(indice));
        break;
        }
    }
    if(recetaEncontrada){
        document.getElementById("buscar-receta").style.color="black";
        localStorage.setItem("recetaEncontrada",JSON.stringify(listaRecetas[i]));
        abrirReceta();
    } else{
        document.getElementById("buscar-receta").style.color="red";
        alert("La receta no existe");
    }
}

function abrirReceta(){
    window.open("buscarReceta.html","width=120","height=120");
}
//borrar receta si se ha modificado

//Realizado por:
// - Joel García Álvarez
// - Yoel Villa Palomino
// - Pablo Fernández Barredo
// comentario

