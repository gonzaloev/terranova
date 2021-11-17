$(function(){

    let productoBase = $(".producto .card");

    function buscar_productos() {
        console.log("BUSCANDO PRODUCTOS");

        $.ajax({
            url: 'https://my-json-server.typicode.com/srsanma/terranovaapirest/propiedades',
            type: 'GET',
            dataType: 'json',

            success: function(data){ // Funcion de callback
                console.log("RESPUESTA OK");
                console.log(data);

                for (producto of data) {
                    let nuevoProducto = productoBase.clone();

                    nuevoProducto.find(".img-propiedad").attr("src", producto.url);
                    nuevoProducto.find(".nombre").text(producto.nombre);
                    nuevoProducto.find(".operacion").text(producto.operacion);
                    nuevoProducto.find(".propiedad").text(producto.propiedad);
                    nuevoProducto.find(".ubicacion").text(producto.ubicacion);
                    nuevoProducto.find(".precio").text(producto.precio);
                    
                    $("#ProductosContenedor").append(nuevoProducto);
                }
            },

            error: function(request, error) {
                console.log("Ocurrio un error: " + error);
            }
        });
    }

    buscar_productos();
})



/* 

"col producto"
    "img-propiedad"
        "nombre"
            "operacion"
                "propiedad"
                    "ubicacion"
                        "precio"



objeto propiedad
img-propiedad => url de la foto 
nombre => nombre de la propiedad 
operacion => tipo de operacion
propiedad => tipo de propiedad
precio => precio equisde
*/

/*
$("#hide").click(function(){
$("carta x").hide();
});

foreach(carta in loqsea){
    if(carta.ubicacion == caba){
        this.hide();
    }
}

$("#show").click(function(){
$("p").show();
});

*/