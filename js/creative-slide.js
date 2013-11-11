$(document).on('ready', slider);

function slider(){
	var pauseTime = 5000;
	
	$('#slider .slide:gt(0)').hide();


	setInterval(function(){

		var $current = $('#slider .slide:first-child');

		slide_animation($current);

		//$('#slide-options a').click(slide_direction($current));



		
		$('.next').click(function(){
			$current.fadeOut(0);
		    $current.next().fadeIn(50).end().appendTo('#slider');
		    return false;
		});


		

	},pauseTime);

	function prev(){
			$current.fadeOut(0);
		    $current.next().fadeIn(50).appendTo('#slider');
	}
}

function slide_animation($current){

	$current.fadeOut(100)
	.next('.slide').fadeIn(100)
	.end().appendTo('#slider');

}

function slide_direction($current){
	console.log('hey');
}