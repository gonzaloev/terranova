$(function(){

    let productoBase = $(".plantilla .producto");

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

                    nuevoProducto.find(".nombre").text(producto.name);
                    nuevoProducto.find(".edad").text(producto.age);
                    nuevoProducto.find(".id").text(producto.id);

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
objeto propiedad
img-propiedad => url de la foto 
nombre => nombre de la propiedad 
operacion => tipo de operacion
propiedad => tipo de propiedad
precio => precio equisde
*/

/*
$("#hide").click(function(){
$("p").hide();
});

$("#show").click(function(){
$("p").show();
});

*/