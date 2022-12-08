// //convierte el json en una variable para poder utilizarla en el html
// RECETAS =JSON.parse(localStorage.getItem("listaRecetas"));
// document.write("<div class='caja'>");
// contador = Number(0);
// //añadir recetaactualizada a la lista de recetas
// if (localStorage.getItem("recetaActualizada") != null){
//     RECETA_ACTUALIZADA = JSON.parse(localStorage.getItem("recetaActualizada"));
//     RECETAS.unshift(RECETA_ACTUALIZADA);
//     localStorage.setItem("listaRecetas",JSON.stringify(RECETAS));
// }

// //comprobar si existe recetaActualizada para mostrarla
// if (localStorage.getItem("recetaActualizada") != null){
//     RECETA_ACTUALIZADA = JSON.parse(localStorage.getItem("recetaActualizada"));
//     document.write(`<h1>${RECETA_ACTUALIZADA.nombre}</h1>`);
//     document.write("<h3>Comensales: "+RECETA_ACTUALIZADA.comensales+"</h3>");
//     document.write("<h3>Lista de Ingredientes:</h3>");
//     document.write("<table><tr><th>Ingrediente</th><th>Cantidad</th></tr>");
//     for (i in RECETA_ACTUALIZADA.ingredientes){
//         document.write(`<tr><td>${RECETA_ACTUALIZADA.ingredientes[i].nombreIngrediente}</td><td>${RECETA_ACTUALIZADA.ingredientes[i].cantidad}</td></tr>`);
//     }
//     document.write("</table>");
//     document.write("<hr>");
//     contador++;
// }else{
//     for (n in RECETAS){
//         document.write("<div class='contenido'>");
//         document.write(`<h1>${contador+1}. ${RECETAS[n].nombre} </h1>`);
//         document.write("<h3>Comensales: "+RECETAS[n].comensales+"</h3>");
//         document.write("<h3>Lista de Ingredientes:</h3>");
//         document.write("<table><tr><th>Ingrediente</th><th>Cantidad</th></tr>");
//         for (i in RECETAS[n].ingredientes){
//             document.write(`<tr><td>${RECETAS[n].ingredientes[i].nombreIngrediente}</td><td>${RECETAS[n].ingredientes[i].cantidad}</td></tr>`);
            
//         }
//         document.write("</table>");
//         document.write("<hr>");
//         contador++;
//     }
//     document.write("</div>");
// }

//convierte el json en una variable para poder utilizarla en el html
RECETAS =JSON.parse(localStorage.getItem("listaRecetas"));

if (localStorage.getItem("recetaActualizada") != null){
    RECETA_ACTUALIZADA = JSON.parse(localStorage.getItem("recetaActualizada"));
    RECETAS.unshift(RECETA_ACTUALIZADA);
    localStorage.setItem("listaRecetas",JSON.stringify(RECETAS));
}
document.write("<div class='caja'>");
contador = Number(0);
for (n in RECETAS){
    document.write("<div class='contenido'>");
    document.write(`<h1>${contador+1}. ${RECETAS[n].nombre} </h1>`);
    document.write("<h3>Comensales: "+RECETAS[n].comensales+"</h3>");
    document.write("<h3>Lista de Ingredientes:</h3>");
    document.write("<table><tr><th>Ingrediente</th><th>Cantidad</th></tr>");
    for (i in RECETAS[n].ingredientes){
        document.write(`<tr><td>${RECETAS[n].ingredientes[i].nombreIngrediente}</td><td>${RECETAS[n].ingredientes[i].cantidad}</td></tr>`);
    }
    document.write("</table>");
    document.write("<hr>");
    contador++;
}
document.write("</div>");


//FUNCIONA PERFECTAMENTE