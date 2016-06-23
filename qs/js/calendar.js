
$(function () {
	init()
})
function init() {
	var date = new Date(),     // the curr Date
		curr_year = date.getFullYear(),  // the curr year
		curr_month = date.getMonth() + 1;  // the curr month  6
		
    var dateObj = {
    	  curr_date : date.getDate(), 
    	  curr_year : curr_year,
    	  curr_month : curr_month
    };
    
     
   var curr_year_month =   dateObj.curr_year+"月"+dateObj.curr_month+"日";
   $('.month').append(curr_year_month);


   $('.arrowReduce').on('click',function (e) {

   	dateObj = monthReduce(dateObj.curr_month,dateObj.curr_year); 
   	console.log( dateObj)
   	$('.month').html("").append(dateObj.curr_year+"月"+dateObj.curr_month+"日")

   	console.log(dateObj.curr_month)
   })

    $('.arrowIncre').on('click',function (e) {

    dateObj = monthIncrease(dateObj.curr_month,dateObj.curr_year);
   	console.log('clicktest' + dateObj.curr_year + dateObj.curr_month)

   	$('.month').html("").append(dateObj.curr_year+"月"+dateObj.curr_month+"日")

    
	
    $(".month").trigger("myEvent", [dateObj.curr_year,dateObj.curr_month]);

   })


    $('.toggleButton').on('click',function (e) {
        if($('#calendarIn').hasClass('opacity_0')){
        	$('#calendarIn').removeClass('opacity_0')
        	$('#calendarIn').toggleClass("opacity_1")
        } else{
        	 $('#calendarIn').toggleClass("opacity_0")
        }
    })


    /*              the             content              begin                  */
    var d1 = new Date(dateObj.curr_year,dateObj.curr_month,1);
	var d2 = new Date(dateObj.curr_year,dateObj.curr_month+1,1);
		  console.log('the loop' + dateObj.curr_year + dateObj.curr_month)
	for (var i = d1.getTime() ; i < d2.getTime() ; i += 24*60*60*1000){
   					var d3 = new Date(i);  
   					console.log(d3.getDay()+1)
   		$grid = $('<span>'+d3.getDate()+'</span>');
   		$grid.addClass('common')
   		$('.dayContent').append($grid)
  }

  var spanArr  =  document.querySelectorAll('.dayContent .common'); // dom obj
   console.log('curr_date' + dateObj.curr_date)
  for(var i = 0 ; i < 31; i++){
  		if(spanArr[i].lastChild.nodeValue == dateObj.curr_date){
  			 console.log('curr_date' + dateObj.curr_date)
  			  spanArr[i].setAttribute('class',"common commonSelect")
  		}
  }
 


    	$(".month").bind("myEvent", function (event, curr_year, curr_month) {
   console.log(curr_year + "year"+curr_month + 'month')
       var span_first = $(".dayContent span:first");
       var span_f  = span_first[0];
       span_f.style.marginLeft = getMargin($('.dayContent span:first'),curr_month,curr_year);



		});
}


function monthReduce(curr_month,curr_year) {
     if(curr_month === 1 ){ 
     	 console.log('exist ???' + curr_month + curr_year)  // ok  1  2016
   return  yearChange(curr_month,curr_year)				// 2015  12

     }		
     console.log(curr_month)
     console.log(curr_year)
 	 --curr_month
     return {
     	 curr_month : curr_month,
     	 curr_year  : curr_year
     
     } ; 
}
function monthIncrease(curr_month,curr_year) {
	if(curr_month === 12){
	return  yearChange(curr_month,curr_year)
	}
	++curr_month 
	return{
		 curr_month : curr_month,
		 curr_year  : curr_year
	}
}
function yearChange(curr_month,curr_year) {
	console.log('ritsu' + curr_month + curr_year) 
	if(curr_month === 1){ // reducing 
		 --curr_year;
		 curr_month = 12 ;
    console.log('change' + curr_year+curr_month)
	} else{
	   	 ++curr_year ;
	   	 curr_month = 1;
	}
	console.log('really' + curr_year + curr_month)   // 2015  12
	return {
		 curr_month:curr_month,
		 curr_year:curr_year
	}
}

function getMargin(elem,curr_month,curr_year) {
	var date = elem.text(),
		weekDay =  new Date(curr_year+"-"+curr_month+"-"+date).getDay();
		console.log('date' + date)
		console.log('weekDay'+weekDay)
		console.log('curr_year' + curr_year + 'curr_month' + curr_month)
		return weekDay * 50 + "px";
}


var $calendarIn = $(

          '<div class="toggleButton">Canlendar</div>' +
            '<div id="calendarIn">' +
                  '<div class="head">' +
                        '<span class="arrowReduce left"><-</span>' +
                        '<span class="month"></span>' +
                        '<span class="arrowIncre right">-></span>' +
                  '</div>' +

                  '<div class="content">' +
                       '<div class="week">' +
                           '<span class="common redColor">日</span>' +
                           '<span class="common ">一</span>' +
                           '<span class="common ">二</span> ' +
                           '<span class="common ">三</span>' +
                           '<span class="common ">四</span>' +
                           '<span class="common ">五</span>' +
                           '<span class="common redColor">六</span>' +
                            
                            '<div class="dayContent">' +
                                 
                            '</div>' +

                       '</div>' +
                   '</div>' +
            '</div>'

  );
  