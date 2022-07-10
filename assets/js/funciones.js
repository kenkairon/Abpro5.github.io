/*$(document).ready(function(){
    $('#contactForm').hide();

    $('#contacBtn').click(function(){
        $('#contacBtn').slideUp('slow', function(){
            $('#contactForm').toggle('slow');
        });
    });

    $.get('https://reqres.in/api/users/2', function(response){
        $("#ownerName").append("<p>"+ response.data["first_name"] + " " + response.data["last_name"] + "</p>" );
    });
   
    $('#contactForm').submit(function(e){
        e.preventDefault();
        var usuario = {
            email: $('input[name="email"]').val(),
            name: $('input[name="name"]').val(),
            lastname: $('input[name="lastname"]').val()
        };
        console.log(usuario);
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){  
                $('#contactForm').slideUp('slow');
                $('#contacBtn').show();
                alert("Mensaje enviado");
        });
        return false;
    });
    
});*/

       /*function validacion(){
            var formvalido = true;

            var nom = document.getElementById("nombre").value;
            if(nom == null || nom.length == 0){
                alert("El nombre no puede estar vacío");
                formvalido = false;
            }
             var nom = document.getElementById("email").value;
            if(nom == null || nom.length == 0){
                alert("El nombre no puede estar vacío");
                formvalido = false;
            }
             var nom = document.getElementById("mensaje").value;
            if(nom == null || nom.length == 0){
                alert("El nombre no puede estar vacío");
                formvalido = false;
            }
        }
        */
/*
$(document).ready(function (){
    function validacion(){
            var formvalido = true;

            var nom = document.getElementById("nombre").value;
            if(nom == null || nom.length == 0){
                alert("El nombre no puede estar vacío");
                formvalido = false;
            }
             var correo = document.getElementById("email").value;
            if(correo == null || nom.length == 0){
                alert("El correo no puede estar vacío");
                formvalido = false;
            }
             var mensaje = document.getElementById("mensaje").value;
            if(mensaje == null || nom.length == 0){
                alert("El mensaje no puede estar vacío");
                formvalido = false;
            }
        }

});
*/
$(function(){
    $(document).bind("contextmenu",function(e){
        return false;
    });
});
function validacion(){
            var formvalido = true;

            var nom = document.getElementById("nombre").value;
            if(nom == null || nom.length == 0){
                alert("El nombre no puede estar vacío");
                formvalido = false;
            }
             var email = document.getElementById("correo").value;
            if(email == null || email.length == 0){
                alert("El correo no puede estar vacío");
                formvalido = false;
            }
             var mens = document.getElementById("mensaje").value;
            if(mens == null || mens.length == 0){
                alert("El mensaje no puede estar vacío");
                formvalido = false;
            }

        }


        
