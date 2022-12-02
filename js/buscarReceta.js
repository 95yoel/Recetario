nombreReceta = JSON.parse(localStorage.getItem("recetaEncontrada"));

console.log(nombreReceta);

// document.write("<div class='caja'>");
// document.write("<div class='contenido'>");
//     document.write(`<h1>${nombreReceta.nombre}</h1>`);
//     document.write(`<h3>Comensales: ${nombreReceta.comensales}</h3>`);
//     document.write("<h3>Lista de Ingredientes:</h3>");
//     document.write("<table><tr><th>Ingrediente</th><th>Cantidad</th></tr>");
//     for (i in nombreReceta.ingredientes){
//         document.write(`<tr><td>${nombreReceta.ingredientes[i].nombreIngrediente}</td><td>${nombreReceta.ingredientes[i].cantidad}</td></tr>`);

//     }
//     document.write("<tr><td>Añadir ingrediente :</td>");
//     document.write(`<td><input type="text" id="anadir-ingrediente" placeholder="Añadir ingrediente"/></td>`);
//     document.write(`<td><input type="number" id="cantidad-ingrediente" placeholder="Cantidad"/></td>`);
//     document.write(`<td><button type="button" id="btnAnadirIngrediente">Añadir ingrediente</button></td>`);
//     document.write(`</tr>`);
//     document.write(`<tr>`);
//     document.write(`<td>Eliminar ingrediente :</td>`);



//     document.write("</table>");
//     document.write("<hr>");
// document.write("</div>");

document.write("<div class='caja'>");
document.write("<div class='contenido'>");
document.write(`<h1>${nombreReceta.nombre}</h1>`);
document.write(``);
document.write(`<table>`);
document.write(`<td><h3>Comensales:</h3></td>`);
//EJEMPLO ****
document.write(`<td><input type="text" id="input1"></td>`);
document.getElementById("input1").value =`${nombreReceta.comensales}`;
//EJEMPLO *****
document.write(`<tr><th>Ingrediente</th><th>Cantidad</th>`);
for (i in nombreReceta.ingredientes){
    document.write(`<tr><td>${nombreReceta.ingredientes[i].nombreIngrediente}</td><td>${nombreReceta.ingredientes[i].cantidad}</td></tr>`);
}
document.write(`</table>`);
