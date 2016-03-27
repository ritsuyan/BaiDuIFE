$('input').on('keyup',function(e){
	if(e.keyCode === 13 || e.keyCode === 32){
		console.log(true)
		var val = $(this).val()
		var sp = $('<span></span>')
		sp.addClass('tagSpan').text(val)
		$('#tagContainer').append(sp)
		$(this).val(" ")
	}
})

//document.getElementsByClassName('tagSpan').addEventListener('click',myFun)
//function myFun(){
//	    alert(1)
//}
 $('#tagContainer').on('mouseover', function (e) {
	 var t = e.target,
		 already = false;
		 console.log(t)
	 if(t.tagName !== 'SPAN') return;
	 var child = t.lastChild.nodeValue;
	 if(child.toString().indexOf('delete') > -1 ){return}
	 if(already == false){
		 t.style.color = 'black'
		 t.style.background = 'red'
		 //t.style.width = widthFun();
		 t.innerHTML = 'delete' + child;
		 already = true;
	 } else {
		 t.style.color = 'black'
		 t.style.background = 'red'
		 return ;
	 }
 })

 $('#tagContainer').on('mouseout', function (e) {
	 var t = e.target;
	 if(t.tagName !== 'SPAN') return;
	 var child = t.lastChild.nodeValue;
	 var str = 	child.toString().trim().split('delete')[1]
	 t.innerHTML = str;
	 t.style.color = 'white';
	 t.style.background = '#66ccff'
 })

$('button').on('click', function (e) {

	alert('try it again')
})