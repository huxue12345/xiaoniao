$(function(){
	var $height=$(window).height();
	$('.welcome').height($height);
	var time1=setTimeout(function(){
	   $('.dong').addClass('now')
	   $('.welcome_cont').css('display','block');
	
	},4500)
	var time2=setTimeout(function(){
        $('.welcome').slideUp(1000)	
	},8000)
	 $('.welcome').click(function(){
	 	var time2=setTimeout(function(){
	 	$('.welcome').slideUp(1000)		
	 	},3000)
	 })

	var $width=$(window).width();
	$('.box').width($width);
	$('.box').height($height-50);
	console.log($('.box').height(),$('.allscreen').height())
  $(window).resize(function(){
  	var $width=$(window).width();
  	var height=$(window).height();
  	$('.box').width($width);
  	$('.box').height($height-50)
  })
  var index=0;
  var index1=$(".sroll").size()-1;
  var isRunning=false;
   function scrollUp(){
   	if(!isRunning){
   		isRunning=true;
   		setTimeout(function(){
   			isRunning=false
   		},1000)
   		if(index>0){
   			index--;
   			if(index>0){
   			$(".sroll").eq(index-1).addClass('now').find('a').addClass('now');
   			$(".sroll").eq(index-1).siblings().removeClass('now').find('a').removeClass('now')
   			}
   			else{
   			$(".sroll").eq(index).addClass('now').find('a').addClass('now');
   			$(".sroll").eq(index).siblings().removeClass('now').find('a').removeClass('now')	
   			}
   			if($(".sroll_last").prev().hasClass("now")){
   				$(".sroll_last").addClass('now').find('a').addClass('now')
   			}
   			$('.allscreen').animate({"top":-index*100+'%'})
   		}
   	}
   }
   function scrollDown(){
   	if(!isRunning){
   		isRunning=true;
   		setTimeout(function(){
   			isRunning=false
   		},1000)
   		    if(index<$('.screen').size()-1){
   			$(".sroll").eq(index).addClass('now').find('a').addClass('now');
   			$(".sroll").eq(index).siblings().removeClass('now').find('a').removeClass('now')
   			console.log($(".sroll").eq(index).index())
   			if($(".sroll_last").prev().hasClass("now")){
   				$(".sroll_last").addClass('now').find('a').addClass('now')
   			
   			}
   			index++;
   			console.log(index)
   			$('.allscreen').animate({"top":-index*100+'%'})
   		}
   	}
   }
   function mouseWheel(ev){
   	 if(ev.detail){
   	 	if(ev.detail>0){
   	 		scrollDown()
   	 	}
   	 	else{
   	 		scrollUp()
   	 	}
   	 }
   	 else{
   	 	if(ev.wheelDelta>0){
   	 	scrollUp()	
   	 	}else{
   	     	scrollDown()	
   	 	}
   	 }
   }
   window.onmousewheel=mouseWheel;
   window.addEventListener('DOMMouseScroll',mouseWheel)
  $(".sroll").click(function(ev){
  	 	var index=$(this).index();
  	        
  	 		$(this).addClass('now').find('a').addClass('now');
   			$(this).siblings().removeClass('now').find('a').removeClass('now')
   			if(index==3){
   				$(this).next().addClass('now').find('a').addClass('now');
   			}
   			 
   	$('.allscreen').animate({"top":-(index+1)*100+"%"})
  	ev.preventDefault()
  })
  $(".sroll_last").click(function(ev){
	var index=$(this).index();
	   $(this).siblings().removeClass('now');
	   $(this).siblings().find('a').removeClass('now')
      $(this).prev().addClass('now').find('a').addClass('now');
      
      $(this).addClass('now').find('a').addClass('now');
      
		$('.allscreen').animate({"top":-index*100+"%"})
  			ev.preventDefault()
  })
  var $width1=$(".ul_tab>li").innerWidth();
  var $ulwidth1=$('.ul_tab>li').size()*$width1;
  $(".ul_tab").width($ulwidth1);
  console.log($width1,$ulwidth1,$(".ul_tab").width());
  var $num1=0
  $('.gaishu_prev').click(function(){
  	 $num1--;
  	 $(this).css('opacity','1').siblings().css('opacity','1')
  	 if($num1<0){
  	 	$(this).css('opacity','0.5')
  	 	$num1=0
  	 }
  	 
  	 $(".ul_tab").animate({'left':-$num1*$width1},1000)
  })
    $('.gaishu_next').click(function(){
    	 $num1++;
    	 $(this).css('opacity','1').siblings().css('opacity','1')
  	 if($num1>$('.ul_tab>li').size()-1){
  	 	$(this).css('opacity','0.5')
  	 	$num1=$('.ul_tab>li').size()-1
  	 }
  	 $(".ul_tab").animate({'left':-$num1*$width1},1000)
  })
    $width2=$('.yun_cont').eq(0).width();
    $widthTwo=$('.yun_cont').size()*$width2;
    $(".yun_cont_two").width($widthTwo);
    $('.yun_left_btn').click(function(){
    	 $(".yun_cont_two").animate({'left':0},1000)
    	 $(this).children().addClass('now');
    	 $(this).siblings().children().removeClass('now')
    })
      $('.yun_right_btn').click(function(){
    	 $(".yun_cont_two").animate({'left':-$width2},1000)
    	 $(this).children().addClass('now');
    	 $(this).siblings().children().removeClass('now')
    })
})
