function cargarServiciosBasicos() {
    
    /*Carga de ritmos desde generos.xml*/

    $.ajax({
        url: 'servicios_basicos.xml',
        error: function() {
            alert('¡error al cargar el archivo con los ritmos!')
        },
        dataType: 'xml',
        success: function(data) {
            var ul = $('<ul></ul>')
            ul.attr('class', "contenido");
            $('.lista').append(ul);

            $(data).find('servicio').each(function() {
                tipo = $(this).attr("tipo");

                console.log(tipo);
                let li = $('<li></li>');
                let a = $('<a></a>');
                a.attr('class', 'servicios');
                a.attr('href', '#');

                a.text(tipo)
                li.append(a);
                ul.append(li);
                console.log(a.innerHTML);

            });

        },
        type: 'GET'
    });
}   


$(window).load(function() {

    cargarServiciosBasicos();

});