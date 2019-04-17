$( 
	function(){
		 $(".header").load('header.html');
    $(".footer").load('footer.html');
		var news = getURL("news");
		console.log(news)
		var data=articleData[news].data;
		$('.sup-tit').html(data.typeTitle);
		$('.sub-tit').html(data.typeEntitle);
		$('.p-tit').html(data.title);
		$('.date').html(data.updateAt);
		$('.author').html(data.updateByFullName);
		$('.big-img').attr('src',data.coverImg);
		$('.article-txt').html(data.content);
		function getURL(names){
			var reg=new RegExp('(^|&)'+names+'=([^&]*)(&|$)')
			var r=window.location.search.substr(1).match(reg);
			if(r!=null){
				console.log(r[2])
				return r[2];
			}else{
				return '';
			}
		}
		$(".pen").click(function(){
			$(this).parent().width(80)
		})
		$(".like-showbox").hover(function(){
			$(this).addClass('now');
			var rad= Math.round(Math.random()*5);
			var ste=$(".ul>li").eq(rad).html()
			$(".like-tips").html(ste).slideDown(100);
			
			console.log(rad)
		},function(){
			$(this).removeClass('now');
			$(".like-tips").slideUp()
		})
		var $num=20
		$(".like-showbox").one('click',function(){
			$num++
			$('.like').addClass('now');
			
			$(".like-number").html('喜欢('+$num+')')
			
		})
	}
)
