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
      var d=parseInt(personas[i].asiento)
    if(nasiento===d){
      document.getElementById("dni").value = personas[i].dni;
      document.getElementById("nombre").value = personas[i].nombre;
      document.getElementById("apellido").value =  personas[i].apellido ;
       }
    }
 }
// creando un objeto
 function Datos(asiento,dni,nombre,apellido){
  this.asiento=asiento,
  this.dni=dni=dni,
  this.nombre=nombre,
  this.apellido=apellido
 };

var personas=[];
console.log(personas);

//funcion Reservar
function reservar(){
	var n_nombre=document.getElementById("nombre").value;
	var n_apellido=document.getElementById("apellido").value;
	var n_dni=document.getElementById("dni").value;
  var s= new Datos(nasiento,n_dni,n_nombre,n_apellido);
  personas.push(s);
  pintar.style.color="red";
  limpiar();

}
// funcion listar
function listar(){
		var resultado=document.getElementById("resultado");
		var lista_personas="";

	for(var i=0;i<personas.length;i++){
		lista_personas+=   "N° "+ nasiento+ " DNI: "+personas[i].dni+" Nombre: "+personas[i].nombre +" Apellido: "+ personas[i].apellido +"<br/>";
}
resultado.innerHTML=lista_personas;

}
// function buscar
function buscar(){
	var n_dni=document.getElementById("dni").value;

	for(var i=0;i<personas.length;i++){
        if (n_dni==personas[i].dni){
     document.getElementById("nombre").value = personas[i].nombre;
	   document.getElementById("apellido").value =  personas[i].apellido ;
        }
    }
}
// funcion cancelar
function cancelar(){
var n_dni=parseInt(document.getElementById("dni").value);
for(var i=0;i<personas.length;i++){
     var s=personas[i].asiento;
        if (nasiento==s){
personas[i]=new Datos("","","","");
        }
   }
}
// funcion limpiar
function limpiar(){
	document.getElementById("nombre").value = "";
	document.getElementById("apellido").value = "";
	document.getElementById("dni").value = "";
}


