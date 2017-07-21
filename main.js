var nasiento;
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}

 var pintar;
function redirect(event){
    document.getElementById("mostrar").innerHTML=(event.target.textContent);
    pintar=event.target;
    nasiento=parseInt(event.target.textContent);
    limpiar();
     for (var i=0;i<personas.length;i++){
     	var s=parseInt(personas[i].asiento)
     	if(nasiento===s){ 
     		document.getElementById("dni").value = personas[i].dni;
 			document.getElementById("nombre").value = personas[i].nombre;
			document.getElementById("apellido").value =  personas[i].apellido ;
  		 }
    }
 }


var personas=[];
console.log(personas);

function reservar(){
	var n_nombre=document.getElementById("nombre").value;
	var n_apellido=document.getElementById("apellido").value;
	var n_dni=document.getElementById("dni").value;

   for (var i = 0; i < celdas.length; i++) {
      celdas[i] = "";
   }
  	  var persona = {
  	  	       asiento:nasiento,
               nombre :n_nombre,
               apellido:n_apellido,
               dni:n_dni
            };

personas.push(persona);

pintar.style.color="red";
limpiar();

}

function listar(){
		var resultado=document.getElementById("resultado");
		var lista_personas="";
	for(var i=0;i<personas.length;i++){
		lista_personas+=   "N° "+ nasiento+ " DNI: "+personas[i].dni+" Nombre: "+personas[i].nombre +" Apellido: "+ personas[i].apellido +"<br/>";
}

resultado.innerHTML=lista_personas;

}

function buscar(){
	var n_dni=document.getElementById("dni").value;
	 
	for(var i=0;i<personas.length;i++){
        if (n_dni==personas[i].dni){
       
       document.getElementById("nombre").value = personas[i].nombre;
	   document.getElementById("apellido").value =  personas[i].apellido ;
        
        }
    }
}

function cancelar(){
	limpiar();

}
function limpiar(){
	document.getElementById("nombre").value = "";
	document.getElementById("apellido").value = "";
	document.getElementById("dni").value = "";
}


