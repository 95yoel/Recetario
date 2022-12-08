//obtenemos el Json que aloja el objeto
nombreReceta = JSON.parse(localStorage.getItem("recetaEncontrada"));

//comprobar si existe recetaActualizada para mostrarla
if (localStorage.getItem("recetaActualizada") != null){

    nombreReceta = JSON.parse(localStorage.getItem("recetaActualizada"));
}

console.log(nombreReceta);

document.write("<div class='caja'>");
document.write("<div class='contenido'>");
document.write(`<h1>${nombreReceta.nombre}</h1>`);
document.write(``);
document.write(`<table>`);
document.write(`<td><h3>Comensales:</h3></td>`);
//EJEMPLO ****
document.write(`<td><input type="text" id="cambiarComensales"></td>`);
document.getElementById("cambiarComensales").value =`${nombreReceta.comensales}`;
//EJEMPLO *****
document.write(`<tr><th>Ingrediente</th><th>Cantidad</th>`);
for (i in nombreReceta.ingredientes){
    
    //importante el id de aqui que cambia 
    document.write(`<tr><td><input type="text" id="cambiarIngredientes${i}"></td><td><input type="text" id = "cambiarCantIngredientes${i}"></td></tr>`);
    document.getElementById(`cambiarIngredientes${i}`).value = `${nombreReceta.ingredientes[i].nombreIngrediente}`;
    document.getElementById(`cambiarCantIngredientes${i}`).value = `${nombreReceta.ingredientes[i].cantidad}`;
}
document.write(`</table>`);
document.write(`<hr>`);
document.write(`<table>`);
document.write(`<tr><td><button type ="button" id="btnAnadirIngrediente">AÑADIR INGREDIENTE :</button></td>`);
document.write(`<td><input type="text" id="anadir-ingrediente" placeholder="Añadir ingrediente"/></td>`);
document.write(`<td><input type="number" id="cantidad-ingrediente" placeholder="Cantidad"/></td>`);
document.write(`</tr>`);
document.write(`<tr>`);
document.write(`<td><button type ="button" id="btnEliminarIngrediente">ELIMINAR INGREDIENTE </buttom></td>`);
document.write(`<td><input type="text" id="eliminar-ingrediente" placeholder="Eliminar ingrediente"/></td>`);
document.write(`<td></td>`);
document.write(`</tr>`);
document.write(`<td colspan ="3"><button type ="button" id="btnModificar">MODIFICAR</button></td>`);

document.write(`</tr>`);

document.write(`</table>`);
const modificar = document.querySelector('#btnModificar');

modificar.addEventListener("click",()=>{
    //almacenar primero valores input y despues rellenarlos con el for 
    for (n in nombreReceta.ingredientes){
        //alert(nombreReceta.ingredientes[n].nombreIngrediente);
        nombreReceta.ingredientes[n].nombreIngrediente=document.getElementById(`cambiarIngredientes${n}`).value;
    }
    for (n in nombreReceta.ingredientes){
        //alert(nombreReceta.ingredientes[n].cantidad);
        nombreReceta.ingredientes[n].cantidad=document.getElementById(`cambiarCantIngredientes${n}`).value;
    }
    //cambiar comnesales
    nombreReceta.comensales = document.getElementById("cambiarComensales").value;
    //enviar a localstorage
    localStorage.setItem("recetaActualizada",JSON.stringify(nombreReceta));
    
    console.log(nombreReceta);
    alert("Receta modificada");
    window.close();
});
//funciton para añadir ingrediente
const anadirIngrediente = document.querySelector('#btnAnadirIngrediente');
anadirIngrediente.addEventListener("click",()=>{
    //comprobar que receta no sea un nombre vacio o espacios
    
    if(document.getElementById("anadir-ingrediente").value == "" || document.getElementById("anadir-ingrediente").value == " "){
        alert("El nombre del ingrediente no puede estar vacio");
        return;
    }
    //comprobar que el numero de comensales no sea un numero vacio o espacios
    if(document.getElementById("cantidad-ingrediente").value == "" || document.getElementById("cantidad-ingrediente").value == " "){
        alert("La cantidad de ingredientes no puede estar vacía");
        return;
    }

    let ingrediente = document.getElementById("anadir-ingrediente").value;
    let cantidad = document.getElementById("cantidad-ingrediente").value;
    nombreReceta.ingredientes.push({nombreIngrediente: ingrediente, cantidad: cantidad});
    localStorage.setItem("recetaActualizada",JSON.stringify(nombreReceta));
    console.log(nombreReceta);
    //eliminar input
    document.getElementById("anadir-ingrediente").value = "";
    document.getElementById("cantidad-ingrediente").value = "";
    alert("Ingrediente añadido");
    
});
//funcion para eliminar ingrediente
const eliminarIngrediente = document.querySelector('#btnEliminarIngrediente');
eliminarIngrediente.addEventListener("click",()=>{
    if(document.getElementById("eliminar-ingrediente").value == "" || document.getElementById("eliminar-ingrediente").value == " "){
        alert("El nombre del ingrediente no puede estar vacio");
        return;
    }

    let ingrediente = document.getElementById("eliminar-ingrediente").value;
    for (i in nombreReceta.ingredientes){
        if (nombreReceta.ingredientes[i].nombreIngrediente == ingrediente){
            nombreReceta.ingredientes.splice(i,1);
        }
    }
    localStorage.setItem("recetaActualizada",JSON.stringify(nombreReceta));
    console.log(nombreReceta);
    //vaciar input
    document.getElementById("eliminar-ingrediente").value = "";

    alert("Ingrediente eliminado");
});
//funcion para eliminar receta
const eliminarReceta = document.querySelector('#btnEliminarReceta');
eliminarReceta.addEventListener("click",()=>{
    localStorage.removeItem("recetaActualizada");
    alert("Receta eliminada");
    window.close();
});