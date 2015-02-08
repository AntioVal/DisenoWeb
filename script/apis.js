/**
 * @author Luis-Valerio
 */


			/* UTILIZANDO CANVAS*/
function iniciar(){
	var elemento = document.getElementById('lienzo');
	lienzo = elemento.getContext('2d');
	//Damos color a las figuras
	lienzo.fillStyle="rgba(0,0,200,0.9)";
	lienzo.strokeStyle="#990000";
	
	//fillRect(x,y,ancho,alto);//rectangulo relleno
	//strokeRect(x,y,ancho,alto);//rectangulo solo con borde
	//clearRect(x,y,ancho,alto);//Este borra el contenido especificado
	lienzo.fillRect(60,10,50,50);
	lienzo.strokeRect(120,10,50,50);
	lienzo.clearRect(95,60,30,30);
	
	
	//se puede especificar transparencia tambien con:
	//lienzo.globalAlpha=0.5;	
	
	//METODOS PARA CREAR GRADIENTES
	//createLinearGradient(x1,y1,x2,y2);
	//createRadialGradient(x1,y1,r1,x2,y2,r2);
	//addColorStop(posicion,color);
	
	
	var gradiente = lienzo.createLinearGradient(0,50,100,100);
	gradiente.addColorStop(0.5,'#0000FF');
	gradiente.addColorStop(0.1,'#000000');
	lienzo.fillStyle = gradiente;
	lienzo.fillRect(10,70,40,110);
	lienzo.fillRect(70,70,40,110);
	
	
	//Realizando trazos
	
	lienzo.beginPath();//inicar trazos
	//aqui van los trazos
	//strok()//contorno
	//fill()//figura rellena
	//clip()//genera mascara, solo lo que esta dentro se dibuja lo que queda afuera de esta area ya no se dibuja
		//LAPICES
			//moveTo(x,y);//mueve lapiz a posicion especifica
			//lineTo(x,y);//dibuja una linea recta desde posicion actual hasta posicion delcarado por x,y
			//rect(x,y,ancho,alto);//genera rectangulo 
			//arc(x,y,radio,angulo_inicio,angulo_final,direccion);
			//quadraticCurveTo(cpx,cpy,x,y);
    lienzo.moveTo(150,100);
    lienzo.lineTo(250,150);
    lienzo.lineTo(150,150);
    //uso del metodo clip()
    //lienzo.clip();
    lienzo.beginPath();
    for(f=0;f<300;f=f+10){
    	lienzo.moveTo(0,f);
    	lienzo.lineTo(500,f);
    }
    
    //Dibujando curvas
    lienzo.moveTo(150,150);
    lienzo.quadraticCurveTo(180,195,50,200);
    //dibujar curva beizer
    //lienzo.moveTo(200,200);
    //lienzo.beizerCurveTo(200,120,300,120,250,200);
    
    lienzo.stroke();
    
    
	
	lienzo.closePath();//cerrar trazos
	
}

function animacion(e){
	document.getElementById('cursor').value = e.clientX + ',' + e.clientY;
}

	//strokeStyle//declara el contonor de la figura
	//fillStyle//declara el color para interior de figura
	//globalAlpha//Especifica la transparencia para todas las figuras dibujadas en el lienzo
	
	
//UTILIZANDO DRAG AND DROP

function dragDrop(){
	origen = document.getElementById('imagen');
	origen.addEventListener('dragstart',arrastrado,false);
	destino = document.getElementById('cajaSoltar');
	//Estos eventos se colocan siempre, ya que de lo contrario se pueden obtener cosas no esperadas
	destino.addEventListener('dragenter',function(e){e.preventDefault();},false);
	destino.addEventListener('dragover',function(e){e.preventDefault();},false);
	destino.addEventListener('drop',soltado,false);	
}	

function arrastrado(e){
	var codigo = '<img src="' + origen.getAttribute('src') + '">';
	//codigo += "<p>CODIGO EXTRA</p>";
	e.dataTransfer.setData('Text',codigo);//Aqui se especifica Texto o alguna otra cosa
}
function soltado(e){
	e.preventDefault();
	destino.innerHTML = e.dataTransfer.getData('Text');
}
	

window.addEventListener('mousemove',animacion,false);
window.addEventListener('load',iniciar,false);
window.addEventListener('load',dragDrop,false);

