$(function(){

    let productoBase = $(".plantilla .card");

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
                    nuevoProducto.find(".mdl-propiedad").text(producto.modal);
                    nuevoProducto.find("#id-propiedad").text(producto.id);
                    nuevoProducto.find(".btn-modal").attr("data-target", "#myModal" + producto.id);
                    nuevoProducto.find(".mdl-id").attr("id", "myModal" + producto.id);
                    
                    

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

