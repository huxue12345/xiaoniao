$(function(){
	$('.music>span').hover(function(){
		$(this).addClass('now')
	},function(){
		$(this).removeClass('now')
	}).click(function(){
		var index=$(this).index();
		console.log(index)
		$(this).append('<audio src="music/sound0'+index+'.mp3" autoplay></audio>')
	})
	
})
