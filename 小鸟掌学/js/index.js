$(function(){
	$('.banner_threebtn>span').click(function(){
	  $(this).addClass('now').siblings('span').removeClass('now');
	$('.banner_in').eq($(this).index()).css('display','block').siblings('.banner_in').css('display','none');  
	})
	 function hov(ele){
	 $(ele).hover(function(){
		$(this).addClass('now')
	},function(){
		$(this).removeClass('now');
	})	
	 }
	 hov('.banner_prev_next')
	var $num=0;
	$('.banner_prev').click(function(){
	  $num++;
	  if($num==$('.banner_in').size()){
	  	$num=0;
	  }
	  $('.banner_threebtn>span').addClass('now').eq($num).siblings('span').removeClass('now')
	  $('.banner_in').eq($num).css('display','block').siblings('.banner_in').css('display','none');
	})
	$(".banner_next").click(function(){
		$num--;
		if($num<0){
			$num=$('.banner_in').size()-1
		}
	  $('.banner_threebtn>span').addClass('now').eq($num).siblings('span').removeClass('now')
	  $('.banner_in').eq($num).css('display','block').siblings('.banner_in').css('display','none');
		
	})
	//banner 轮播图
	$('.chanpin_prev_next>span').hover(function(){
		$(this).addClass('now')
	},function(){
		$(this).removeClass('now');
	})
	$(".chanpin_xiaoquan").hover(function(){
		$(this).addClass('now')
	},function(){
		$(this).removeClass('now')
	})
	function anima(ele,className){
		ele.removeClass('animated fadeInLeft fadeInRight');
		ele.addClass('animated').addClass(className);
	}
	var $num1=0
	$('.chanpin_prev').click(
		function(){
		$num1++;
		if($num1==$('.cont-left-sixdiv>div').size()){
			$num1=0
		}
		
		console.log($('.chanpin_sixbtns>li').eq($num1).find(".chanpin_daquan"),$('.chanpin_sixbtns>li').eq($num).find(".chanpin_xiaoquan"))
	   $(".cont-left-sixdiv>div").eq($num1).show().siblings('div').hide();
		$(".cont-left-sixdiv>div").eq($num1).children().addClass('animated fadeInLeft');
		$(".cont-left-sixdiv>div").eq($num1).siblings('div').children().removeClass('animated fadeInLeft');
		$('.chanpin_sixbtns>li').eq($num1).find(".chanpin_daquan").addClass('now');
		$('.chanpin_sixbtns>li').eq($num1).siblings('li').find(".chanpin_daquan").removeClass('now')
		}
	)
	$('.chanpin_next').click(
		function(){
		$num1--;
		if($num1<0){
			$num1=$('.cont-left-sixdiv>div').size()-1
		}
		
		console.log($('.chanpin_sixbtns>li').eq($num1).find(".chanpin_daquan"),$('.chanpin_sixbtns>li').eq($num).find(".chanpin_xiaoquan"))
	   $(".cont-left-sixdiv>div").eq($num1).show().siblings('div').hide();
		$(".cont-left-sixdiv>div").eq($num1).children().addClass('animated fadeInRight');
		$(".cont-left-sixdiv>div").eq($num1).siblings('div').children().removeClass('animated fadeInRight');
		$('.chanpin_sixbtns>li').eq($num1).find(".chanpin_daquan").addClass('now');
		$('.chanpin_sixbtns>li').eq($num1).siblings('li').find(".chanpin_daquan").removeClass('now')
		}
	)
	$('.chanpin_sixbtns>li').click(function(){
		if($(this).index()>$num1){
			$num1=$(this).index();
			 $(".cont-left-sixdiv>div").eq($num1).show().siblings('div').hide();
		$(".cont-left-sixdiv>div").eq($num1).children().addClass('animated fadeInRight');
		$(".cont-left-sixdiv>div").eq($num1).siblings('div').children().removeClass('animated fadeInRight');
		$(this).find(".chanpin_daquan").addClass('now');
		$(this).siblings('li').find(".chanpin_daquan").removeClass('now')
		}
		else{
			$num1=$(this).index();
		  $(".cont-left-sixdiv>div").eq($num1).show().siblings('div').hide();
		$(".cont-left-sixdiv>div").eq($num1).children().addClass('animated fadeInLeft');
		$(".cont-left-sixdiv>div").eq($num1).siblings('div').children().removeClass('animated fadeInLeft');
		$(this).find(".chanpin_daquan").addClass('now');
		$(this).siblings('li').find(".chanpin_daquan").removeClass('now')	
		}
	})
//	主要产品
   function tada(ele){
   	  $(ele).hover(function(){
   	$(this).addClass("animated tada")
   },function(){
   $(this).removeClass("animated tada")
   })
   }
   tada(".yewu_cont_img")
   tada(".yewu_key");
   $(".yewu_cont_img").click(function(){
   	
   	console.log($(this).siblings('.yewu_key'))
   	$(this).siblings('.yewu_key').toggleClass('now');
   	$(this).parent().parent().siblings('.yewu_tab').children('.yewu_cont').children('.yewu_key').removeClass('now')
    $(this).parent().next().slideToggle();
    $(this).parent().parent().siblings('.yewu_tab').children('.yewu_cont_list').slideUp();
   })
   $('.yewu_cont_list').slideUp()
   $(".yewu_key").click(function(){
   	$(this).toggleClass('now');
   	$(this).parent().parent().siblings('.yewu_tab').children('.yewu_cont').children('.yewu_key').removeClass('now')
    $(this).parent().next().slideToggle();
    $(this).parent().parent().siblings('.yewu_tab').children('.yewu_cont_list').slideUp();
   })
   var $Width=$('.jieshao_move>li').eq(0).width();
   var $ulwidth=$('.jieshao_move>li').size()*$Width
   $(".jieshao_move").width($ulwidth);
// console.log($Width,$ulwidth,$(".jieshao_move").width(),$('.jieshao_move>li').eq(0),$('.jieshao_move'))
    hov('.jieshao_prev_next');
    var isClick=false;
    var $num2=0
   $('.jieshao_prev').click(function(){
   	if(!isClick){
   		isClick=true;
   			$num2--;
   		if($num2<0){
   			$num2=$('.jieshao_threebtn>span').size()-1
   		}
	$('.jieshao_threebtn>span').addClass('now').eq($num2).siblings('span').removeClass('now')
    
   	$('.jieshao_move').animate({'left':-$Width},2000,function(){
    $('.jieshao_move>li').eq(2).prependTo($('.jieshao_move'))
   	$('.jieshao_move').animate({'left':200},500,function(){
   		$('.jieshao_move').animate({'left':0},500) 	
   		 	 isClick=false;
   	})
   	})
      }
   })
    $('.jieshao_move>li').eq(2).prependTo($('jieshao_move'))
   $('.jieshao_next').click(function(){
   	  	if(!isClick){
   		isClick=true;
   		$num2++;
   		if($num2==$('.jieshao_threebtn>span').size()){
   			$num2=0
   		}
	$('.jieshao_threebtn>span').addClass('now').eq($num2).siblings('span').removeClass('now')
   	$('.jieshao_move').animate({'left':200},500,function(){
   	$('.jieshao_move').animate({'left':-$Width},1000,function(){
   		 	 $('.jieshao_move>li').eq(0).appendTo($('.jieshao_move'))
   		 	 $('.jieshao_move').css("left","0px");
   		 	 isClick=false;
   	})
   	})
      }
   })
   var time=null
   time=setInterval(function(){
     		$num2++;
   		if($num2==$('.jieshao_threebtn>span').size()){
   			$num2=0
   		}
	$('.jieshao_threebtn>span').addClass('now').eq($num2).siblings('span').removeClass('now')
   	$('.jieshao_move').animate({'left':200},500,function(){
   	$('.jieshao_move').animate({'left':-$Width},1000,function(){
   		 	 $('.jieshao_move>li').eq(0).appendTo($('.jieshao_move'))
   		 	 $('.jieshao_move').css("left","0px");
   		
   	})
   	})	
    },3000)
   $('.jieshao_prev_next').hover(function(){
   	clearInterval(time)
   },function(){
   	 time=setInterval(function(){
     		$num2++;
   		if($num2==$('.jieshao_threebtn>span').size()){
   			$num2=0
   		}
	$('.jieshao_threebtn>span').addClass('now').eq($num2).siblings('span').removeClass('now')
   	$('.jieshao_move').animate({'left':200},500,function(){
   	$('.jieshao_move').animate({'left':-$Width},1000,function(){
   		 	 $('.jieshao_move>li').eq(0).appendTo($('.jieshao_move'))
   		 	 $('.jieshao_move').css("left","0px");
   		
   	})
   	})	
    },3000)
   })
   function fouc(ele){
   	  $(ele).focusin(function(){
    	$(this).parent().addClass('now')
    }).focusout(function(){
   	$(this).parent().removeClass('now')
   })
   }
  fouc('textarea');
  fouc('.women_cont>li input');
  $(window).scroll(function(){
  	if($("html,body").scrollTop()>400){
  		$('#back_top').css('display','block')
  	}
  	else{
  		$('#back_top').css('display','none')
  	}
  })
  $(".back").click(function(){
  	$("html,body").scrollTop(0)
  })
})
