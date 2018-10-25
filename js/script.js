$(document).ready(function(){  
var id_tarea;
var tarea;
	if (localStorage.getItem("tarea")  == '') {
		localStorage.setItem("tarea", "");
		localStorage.setItem("contador", 0);
	}

 

		$("#agregar-tarea").click(function(e){
			e.preventDefault();
			$( "#panel-tareas" ).append( '<tr > <td scope="row"><input type="checkbox" name=""></td>'
					      					+ '<td><input type="text" name="" class="tarea_input" data-toggle="tooltip" data-placement="top" ></td>'
					      					
					      					+ '<td>' + moment().format("DD/MM/YYYY HH:mm") + '</td>'
					      					
					      					+ '<td><a href="#" class="editar"><i class="far fa-edit"></i></a></td>'
					      					
					      					+ '<td><a class="eliminar" href="#"><i class="far fa-trash-alt"></i></a></td>'
					      					
					      					+ '<td><a href="#" class="importante"><i class="fas fa-exclamation"></i></a></td> </tr>' );
			
			console.log("agregar tarea");
		       			
		});


});


$(document).on('click', '.eliminar', function(e){
    e.preventDefault();
	$( this ).closest('tr').remove();
	console.log("eliminar tarea");
});

$(document).on('keypress ', '.tarea_input', function(event){
   console.log("presione enter")
    var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){

	     var contenido = $( this ).val();
	       $( this ).prop('disabled', true);
	       
	       $( this ).prop('title', contenido);
	       
	       id_tarea = Number(localStorage.getItem("id_tarea")) + 1;

	       tarea = { "id" : id_tarea, "descripcion": contenido, "importante":false}


	      //localStorage.setItem("id_tarea", id_tarea);
	      localStorage.setItem('tarea', JSON.stringify(tarea));
	      var getObject = JSON.parse(localStorage.getItem('tarea'));
	      console.log("localstorage " + getObject);
	      //$( this ).parent().prop('id', id_tarea);
	      $( this ).closest('tr').class();
	    }
});

$(document).on('click', '.editar', function(e){
   console.log("editar")
   $( this ).prev('input').remove();
});




