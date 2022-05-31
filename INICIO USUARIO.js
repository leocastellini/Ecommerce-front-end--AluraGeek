function ir() {

var user, pass;

user = document.getElementById("Usuario").value; //value valida lo que esta dentro osea el usuario
pass = document.getElementById("Password").value;

if(user == "Genesys" && pass == "2204" || user== "Jeanmarie" && pass == "2205" || user =="Christian" && pass == "2206" ){
 alert ("Bienvenidos a la tienda");
 window.location = "file:///C:/Users/pc27613/Desktop/Challenge%20e-commerce/index.html";}

 else{
     alert("Porfavor ingrese, nombre y contraseña correcto");
 }
if(user =="Genesys" && pass =="2204"){
    alert("Inicio de sesión");
    window.location="file:///C:/Users/pc27613/Desktop/Challenge%20e-commerce/User%20Genesys.html";
 } 


}

function cerrar() {  
   addEventListener("click",cerrar);
   console.log("salir");
   alert("Cerraste sesion");
   window.location="file:///C:/Users/pc27613/Desktop/Challenge%20e-commerce/index.html";
  
}


//function confirmation()
   
  //   {
       // if(confirm("¿Desea seguir?"))
	//{
	  
  //  return true;
     
	//}
	//else
	//{
	  // return false;
	//}
    // }
//var c=2204; 
//var u="Genesys"; 





//if(document.form.password.value==c && document.form.login.value==u){ //que se evalue las dos condiciones por eso &&
  //alert ("Bienvenidos a la Tienda");
//window.location="file:///C:/Users/pc27613/Desktop/Barberia-HTML5-y-CSS3-parte1-master/Productos.html";}

//else{
//alert("Porfavor ingrese, nombre y usuario correctos."); 
//}


//}