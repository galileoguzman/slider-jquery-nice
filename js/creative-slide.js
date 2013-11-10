$(document).on('ready', slider);

	function slider(){
		var pauseTime = 10000;

		$('#slider .slide:gt(0)').hide();

	    setInterval(function(){
	      	$('#slider .slide:first-child').fadeOut(0)
	         .next('.slide').fadeIn(200)
	         .end().appendTo('#slider');
	     },pauseTime);
	}

}