$(function(){
	$('.pen').click(function(){
		$('.list_list01').width(100)
	})
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	var global=global||{};
     global.list_star=0;
	  loadul();
	  function loadul(){
		if(global.list_star==0){
			$("#ul_article").html('');
		}
		var result=listData['listData0'+global.list_star]
		 console.log(result)
		var list=result.data.list;
		if(!list||!list.length){
		$("#ul_article").html('请求的数据不存在')	
		}
		else{
			$.each(list,function(i){
				var htmlmode=$('#itemHtml').html();
				 htmlmode=htmlmode.replace("artid",list[i].sysId);
				 htmlmode=htmlmode.replace('image1/list_img01.jpg',list[i].coverImg);
				 htmlmode=htmlmode.replace("$tit$",list[i].title);
				 htmlmode=htmlmode.replace("$time$",list[i].creatAt);
				 htmlmode=htmlmode.replace("$des$",list[i].describe);
				$("#ul_article").append(htmlmode); 
			})
			
		}
	 global.load=Math.ceil(result.data.count/result.data.pageSize);
		global.list_star++;
		if(global.list_star>=global.load){
			$('.img_more').attr('src','images/list_gomore_bg_nomore.jpg')
			$('.quan').css('opacity','0')
		}
	}
	$('.quan').click(function(){
		loadul();
	})
	$('#ul_article').delegate('li','click',function(){
		var $artcid=$(this).attr('artcid');
		console.log($artcid)
	   window.open('article.html?news=xiaoniaoNews'+$artcid)
	})
})
