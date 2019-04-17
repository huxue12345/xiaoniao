$(
	function(){
		$('.head-right>li').hover(function(){
		$(this).addClass('now')
		$(this).find('dl').addClass('now');
		},function(){
			$(this).removeClass('now');
			$(this).find('dl').removeClass('now')
		})
	}
)

