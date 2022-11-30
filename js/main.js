//BOTONES

const btnCrearReceta = document.querySelector('#btnCrearReceta');
const btnAnadirIngrediente = document.querySelector('#btnAnadirIngrediente');
const btnModificarIngrediente = document.querySelector('#btnModificarIngrediente');
const btnEliminarIngrediente = document.querySelector('#btnEliminarIngrediente');
const btnModificarComensales = document.querySelector('#btnModificarComensales');
const btnVisualizarReceta = document.querySelector('#btnVisualizarReceta');
const btnEliminarIngredientes = document.querySelector('#btnEliminarIngrediente');
const btnAnadirIngredienteLista = document.querySelector('#btnIngrediente');

//INPUTS

const nombreReceta = document.getElementById("nombre");
const numComensales = document.getElementById("comensales");
const nomIngredientes = document.getElementById("ingrediente-nombre");
const cantIngredientes = document.getElementById("ingrediente-cantidad");
const newCantIngredientes = document.getElementById("ingrediente-cantidad");
const newIngredientes = document.getElementById("anadir-ingrediente");
const delIngredientes = document.getElementById("eliminar-ingrediente");
const modComensales = document.getElementById("numero-comensales");

listaRecetas = [];
listaIngredientes = [];

btnCrearReceta.addEventListener("click",()=>{
        //objeto Receta
       Receta={
        nombre: nombreReceta.value,
        comensales : numComensales.value,
        ingredientes : listaIngredientes
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


//Realizado por:
// - Joel García Álvarez
// - Yoel Villa Palomino
// - Pablo Fernández Barredo
