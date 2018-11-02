let listaTareas;

$(document).ready(function(){  
	var id_tarea;
	var tarea;


	listaTareas = localStorage.getItem('id_tarea');

	if(listaTareas != null){
		for (var i = 1; i <= listaTareas ; i++) {
		 	console.log('tarea ' + i + ' - ' + localStorage.getItem('tarea'+[i]));	
			var myObj = JSON.parse(localStorage.getItem('tarea'+[i]));
			 //console.log('descripcion ' + i + ' - ' + myObj["descripcion"]);
			agregarItems(myObj["descripcion"], i);
		}
	}


	$("#agregar-tarea").click(function(e){
		e.preventDefault();
		
		$("#agregar-tarea").prop('disabled', true);
		agregarItems('', '');
		       			
	});

});

	


$(document).on('click', '.eliminar', function(e){
	e.preventDefault();
	eliminarItems(this);
});

$(document).on('click', '.importante', function(e){
	e.preventDefault();
	$( this ).closest('tr').css("color","red");
	console.log("tarea importante");
});

$(document).on('click', '.completo', function(e){
	e.preventDefault();
	$( this ).closest('tr').addClass("terminado");
	console.log("tarea importante");
});	

$(document).on('keypress ', '.tarea_input', function(event){
	var keycode = (event.keyCode ? event.keyCode : event.which);
	    if(keycode == '13'){
	    	var valor = $(this).val();
	    	if(valor != ''){
	    		guardarItem(this);	
	    	}
	    	
	    }
});

$(document).on('click', '.editar', function(e){
	editarItem(this);
});


//remplazar los templates
function agregarItems(valor, id){
	$( "#panel-tareas" ).append( '<tr id="' + id 
		+'"> <td ><a class="completo" href="#"><i class="far fa-check-circle"></i></a></td>'
		+ '<td><input type="text" name="" class="tarea_input" value="' + valor + '" data-toggle="tooltip" data-placement="top" ></td>'
		+ '<td>' + moment().format("DD/MM/YYYY HH:mm") + '</td>'
		+ '<td><a href="#" class="editar"><i class="far fa-edit"></i></a></td>'
		+ '<td><a class="eliminar" href="#"><i class="far fa-trash-alt"></i></a></td>'			
		+ '<td><a href="#" class="importante"><i class="fas fa-exclamation"></i></a></td> </tr>' 
		);
}


function eliminarItems(element){
	$( element ).closest('tr').remove();
	var idEliminado = $( element ).closest('tr').attr('id');

	localStorage.removeItem("tarea" + idEliminado);
	id_tarea = Number(localStorage.getItem("id_tarea")) - 1;
	localStorage.setItem("id_tarea", id_tarea);
	
	console.log("eliminar tarea " + idEliminado);
}

function guardarItem(element){
	$("#agregar-tarea").prop('disabled', false);
	
	var contenido = $( element ).val();
	$( element ).prop('disabled', true);       
	$( element ).prop('title', contenido);
	       
	id_tarea = Number(localStorage.getItem("id_tarea")) + 1;
	tarea = {  "descripcion": contenido, "importante":false};

	localStorage.setItem("id_tarea", id_tarea);
	localStorage.setItem('tarea'+ id_tarea, JSON.stringify(tarea));
	
	$( element ).closest('tr').attr("id",id_tarea);

	return tarea;
}

function editarItem(element){
	var linea = $( element ).closest('tr').attr('id');
	console.log("#" + linea);
	var myObj = JSON.parse(localStorage.getItem('tarea'+[i]));
	myObj["descripcion"] = 

	$("#" + linea).find('.tarea_input').prop('disabled', false);
}


