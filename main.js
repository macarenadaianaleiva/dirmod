const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
//Agregamos un botón con jQuery

    $("#btn1").on('click', function() {
        $(".imagen").toggle('slow')})


//Escuchamos el evento click del botón agregado
$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            console.log(respuesta)
            for (const dato of misDatos) {
              $(".imagen").append(`<div class="cerrar"><table id="dolar">
                                    <tr><td>Compra ${dato.casa.nombre}</td>
                                   
                                     <td>Compra ${dato.casa.compra}</td>
                                  
                                     <td>Venta ${dato.casa.venta}</td>
                                   </tr>
                                   
                                  </table></div>`);   
            } 
          }
    });
    
})
