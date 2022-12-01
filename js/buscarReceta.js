nombreReceta = JSON.parse(localStorage.getItem("recetaEncontrada"));

console.log(nombreReceta);

document.write("<div class='caja'>");
document.write("<div class='contenido'>");
    document.write(`<h1>${nombreReceta.nombre}</h1>`);
    document.write(`<h3>Comensales: ${nombreReceta.comensales}</h3>`);
    document.write("<h3>Lista de Ingredientes:</h3>");
    document.write("<table><tr><th>Ingrediente</th><th>Cantidad</th></tr>");
    for (i in nombreReceta.ingredientes){
        document.write(`<tr><td>${nombreReceta.ingredientes[i].nombreIngrediente}</td><td>${nombreReceta.ingredientes[i].cantidad}</td></tr>`);
        
    }
    document.write("</table>");
    document.write("<hr>");
document.write("</div>");