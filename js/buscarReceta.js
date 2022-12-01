nombreReceta = JSON.parse(localStorage.getItem("buscarNombre"));
RECETAS =JSON.parse(localStorage.getItem("listaRecetas"));

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