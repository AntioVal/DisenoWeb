/**
 * @author Luis-Valerio
 */
function mostrarAlerta() {
	alert('hizo clic');
}

function hacerClic() {
	//Se obtiene un arreglo con los elementos que tengan como etiqueta <input> y
	//se selecciona el primer elemento del arreglo para asignarle
	//a su evento click el manejador de eventos(onclic) la funcion mostrarAlerta
	//document.getElementsByTagName('input')[0].onclick = mostrarAlerta;
	//la linea anterior es equivalente a las siguientes:
	var elemento = document.getElementsByTagName('input')[0];
	elemento.addEventListener('click', mostrarAlerta, false);
/*	tambien existen las funciones: getElementById, getElementsByClassName, 
	querySelector('patron_buscado')-> regresa el primer elemento que coincida, 
	querySelectorAll('patron') -> regresa el arreglo de todos los elementos que coinciden con el patron especificado
	un patron de ejemplo es: #articulo input
	*/
}

//se tiene que ejecutar la funcion hacerClic() al terminar de cargar toda la pagina(window.onload)
//evento=load(generado por el navegador) y el manejador=onload(funcion)
//  window.onload = hacerClic;

//La línea anterior se puede sustituir a travez de la función:  
//  addEventListener() -> Argumentos: nombre_evento,funcion_a_ejecutar,
//	  	booleano(como sera disparado el evento en elementos anidados,false=de el elemento hacia afuera, true=de su primer elemento padre hacia adentro)
//		primero realiza los eventos iguales a el de sus padres hasta llegar a el
window.addEventListener('load',hacerClic,false);
