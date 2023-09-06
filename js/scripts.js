$(document).ready(function(){

	$('.faq_qstn .faqqst').click(function(){
		if($(this).parents('.faq_qstn').find('.faq_ans').css('display')=='block'){								  
			$(this).parents('.faq_qstn').find('.faq_ans').slideUp(300);
		}
		if($(this).parents('.faq_qstn').find('.faq_ans').css('display')=='none'){								  
			$(this).parents('.faq_qstn').find('.faq_ans').slideDown(300);
		}
	
	})



})
