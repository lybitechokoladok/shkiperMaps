jQuery(document).ready(function () {
	jQuery('.contact-btn').click(function(){
			jQuery('#side-box').toggleClass('open-box');		
		});
		jQuery('.close-icon').click(function(){
			jQuery('#side-box').removeClass('open-box');		
		});
		
		jQuery('.contact-side').click(function(){
			jQuery('#conact-content').toggleClass('open-box');		
		});
		
		
		
		jQuery(document).click(function(e) {
					if (jQuery(e.target).closest('#side-box').length === 0 && jQuery(e.target).closest('.contact-btn').length === 0) {
							jQuery("#side-box").removeClass("open-box");
					}
	
			});
		});