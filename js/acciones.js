// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizó a la izquierda",function(){"aplicación7","Aceptar"}); 
		});//cierre deslizar izquierda
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Qué quieres hacer? ",function(opt){
				switch(opt)
				{
					case 1:
					navigator.notification.beep(2);
					break;
					
					case 2:
					navigator.notification.vibrate(2000);
					break;
				}
			},"Aplicación7","Beepear,Vibrar,Cancelar");
		});//Cierre de deslizar derecha
	}, false);//Cierre del deviceready 
});//Cierre del documento principal