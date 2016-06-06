var direct = 'left' ;
/* initial state is left */
function init() {
	  
	  var  $table = $('#table') ;
	  var $grid  = '<div><div>';
	 for(var i = 0; i < 100 ; i ++){
	 	 $table.append($grid);

	 }

	  	$('#table > div').addClass('grid');

	  	var Ofigure =  document.createElement('div');
	  	Ofigure.setAttribute('id','curb');
	  	var $figure =  $(Ofigure);
	  	$figure.addClass('curb');
	  	 $table.append($figure);
	  	$figure.css({
	  		'width' : "42px",
	  		'height': '42px',
	 		'position' : 'absolute',
	 		'left' : 	random(),
	 		'top'  :    random()


	  	})

	  	//'background' : 'url('../imgs/curb.jpg') center center no-repeat',


	  	// the state of curb 
}

function random() {
      return   Math.ceil(Math.random()*9) * 42;  
}
/*
GO：向蓝色边所面向的方向前进一格（一格等同于正方形的边长）
TUN LEF：向左转（逆时针旋转90度）
TUN RIG：向右转（顺时针旋转90度）
TUN BAC：向右转（旋转180度）
*/
function go(direct) {
    
 var curb_S_value = parseInt(document.getElementById('curb').style[direct]);
      
 		if(curb_S_value < 30 || curb_S_value > 400 ) return;
       /*
		left +  === > right +
		bottom + === > top  +


       */
       switch (direct){
       	 case 'left' :
       	   direct = 'left';
       	   curb_S_value = parseInt(document.getElementById('curb').style.left);
       	 document.getElementById('curb').style[direct] = curb_S_value - 35 + "px";
       	 break;
       	 case 'right' :
       	 console.log(direct)
     
       	 direct = 'left'
       	   curb_S_value = parseInt(document.getElementById('curb').style.left);
       	 document.getElementById('curb').style[direct] = curb_S_value + 35 + "px";       	 console.log(curb_S_value)

       	 break;
       	 case 'top' :
       	 direct = 'top';
       	    curb_S_value = parseInt(document.getElementById('curb').style.top);
       	 document.getElementById('curb').style[direct] = curb_S_value - 35 + "px";
       	 break;
       	 case 'bottom' :

       	 console.log(direct)
       	 direct = 'top'
       	   curb_S_value = parseInt(document.getElementById('curb').style.top);
       	 document.getElementById('curb').style[direct] = curb_S_value + 35 + "px";
       	 break;
       }
 	   
}


function tunlef(direct) {
	
	
	document.getElementById('curb').style.webkitTransform += 'rotate(-90deg)';
    

    switch (direct){

    	 case 'left':
    	 return 'bottom';
    	 break;
    	 case 'top' : 
    	 return 'left';
    	 break;
    	 case 'right' :
    	 return 'top'
    	 break;
    	 case 'bottom' :
    	 return 'right';
    	 break;
    }    
}


function tunrig(direct) {
	
	
	document.getElementById('curb').style.webkitTransform += 'rotate(90deg)';
    

    switch (direct){

    	 case 'left':
    	 return 'top';
    	 break;
    	 case 'top' : 
    	 return 'left';
    	 break;
    	 case 'right' :
    	 return 'top'
    	 break;
    	 case 'bottom' :
    	 return 'right';
    	 break;
    }    
}

function tunbac(direct) {
		document.getElementById('curb').style.webkitTransform += 'rotate(180deg)';
    

    switch (direct){

    	 case 'left':
    	 return 'right';
    	 break;
    	 case 'top' : 
    	 return 'bottom';
    	 break;
    	 case 'right' :
    	 return 'left'
    	 break;
    	 case 'bottom' :
    	 return 'top';
    	 break;
    }    
}




init();



	 
	  	document.getElementById('buttonCli').addEventListener('click',function (e) {
    var  inValue  =		document.querySelector('#textIn').value;
  /*  document.querySelector('#textIn').value = " ";   */
    switch  (inValue) {
		 case 'go' :
		 go(direct);
		 console.log(direct)
		 break;
		 case 'tunlef':
		 direct = tunlef(direct);
		 console.log(curb.direct)
		 break;
		 case 'tunbac':
		 direct = tunbac(direct);
		 console.log(curb.direct)
		 break;
		 case 'tunrig' :
		 direct = tunrig(direct);
		 console.log(curb.direct)
		 break;
	}
})