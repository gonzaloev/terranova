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

                    nuevoProducto.find(".img-propiedad").text(propiedades.url);
                    nuevoProducto.find(".nombre").text(propiedades.nombre);
                    nuevoProducto.find(".operacion").text(propiedades.operacion);
                    nuevoProducto.find(".propiedad").text(propiedades.propiedad);
                    nuevoProducto.find(".ubicacion").text(propiedades.ubicacion);
                    nuevoProducto.find(".precio").text(propiedades.precio);

                    /*
                    if(item carrousel > 4 cartas adentro || no hay item en carrousel){
                        Crear item en carrousel ==>>iteramos en este nuevo item hasta q se llene
                    }
                    crear carta con los valores de arriba con el boton de modal y el ID
                    la sumamos a el item.
                    */
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