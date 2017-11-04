$(document).ready(function(){
	$('.cause').click(function(){
		if($(this).find('.description').css('display') == 'none') $(this).find('.description').slideDown(250);
		else $(this).find('.description').slideUp(250);
	});
});