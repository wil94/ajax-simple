function modificar(nombre, ciudad){
    var url = "http://localhost/CarStore/TestAjax/Back.php";//dirección url del archivo que ejecuta datos
    var parametros = { //cada parámetro se pasa con un nombre en un array asociativo
        "nombre": 'Williams es de ',
        "ciudad": 'La Paz'
    };
    $.ajax({
        data: parametros,//los parametros se pasan poresta variable
        url: url,
        type: 'post',
        beforeSend: function () {//elemento que queramos poner mientras ajax carga
            $("#resultado").html("Procesando, espere por favor...");
        },
        success: function (response) {//resultado de la función
            $("#resultado").html(response);
        },
        error: function (xhr, status) {
            console.log('Algo salio mal', xhr, 'State: ', status)
        },
        complete : function(xhr, status) {
            console.log('Se hizo la peticion para bien o para mal', xhr, 'State: ', status)
        }
   });
}