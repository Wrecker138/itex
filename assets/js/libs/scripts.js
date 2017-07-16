$(function () {
     $(".button--more").on("click",function(){
      
           
            $(".about__description--hidden").fadeIn();
            
        
             $(".button--more").fadeOut();
       
    
     }); 
    initSlider();


	function initSlider() {
		var $Slider = $('.carousel__inner');
		if ($Slider.length) {
    		$Slider.carouFredSel({
     		   circular: true,
     		   infinite: false,
     		   responsive: true,
     		   height: 'auto',
     		   items: {
      		      visible: 1
      		  },
     		   auto: {
     		       play: false,
     		       timeoutDuration: 3000,
     		       pauseOnHover: true
     		   },
      		  scroll: {
      		      items: 1
      		  },
      		  prev: {
      		      button: '.carousel__control--left'
     		   },
     		   next: {
      		      button: '.carousel__control--right'
      		  }
    		});
  		}
	}

});