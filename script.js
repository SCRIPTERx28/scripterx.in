const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
})
			
			$(document).ready(function(){
			$(window).on('scroll', function(){
				if ($(window).scrollTop())
				{
			$('header').addClass('bgc');		}else{
				$('header').removeClass('bgc');
				}
				
			});	
			});
		
		