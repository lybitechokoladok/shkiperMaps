jQuery(document).ready(function () {
		jQuery('.contact-btn').click(function(){
			jQuery('#side-box').toggleClass('open-box');
			document.getElementById("open-close-icon").style.transform = "rotate(180deg)";	
		});
		jQuery('.close-icon').click(function(){
			jQuery('#side-box').removeClass('open-box');
			document.getElementById("open-close-icon").style.transform = "rotate(180deg)";		
		});
		
		jQuery('.contact-side').click(function(){
			jQuery('#conact-content').toggleClass('open-box');
			document.getElementById("open-close-icon").style.transform = "rotate(180deg)";		
		});
		
		
		
		jQuery(document).click(function(e) {
					if (jQuery(e.target).closest('#side-box').length === 0 && jQuery(e.target).closest('.contact-btn').length === 0) {
						document.getElementById("open-close-icon").style.transform = "rotate(-360deg)";
							jQuery("#side-box").removeClass("open-box");
					}
			});
		});