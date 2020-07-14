
$(function() {
	$('.square').on('click', function() {
		$('.image-preview').attr('src', $(this).find('img').attr('src'));
		//var myDiv = document.querySelector("#cawck");
		var myImg = document.querySelector("#kanye");
		var realWidth = myImg.naturalWidth;
		var realHeight = myImg.naturalHeight;
		myImg.setAttribute('style' , '');

		if(realHeight >= realWidth){
			myImg.style.height = '80vh';
			myImg.style.width = 'auto';
			myImg.style.maxHeight = '80vh';
			myImg.style.maxWidth = '80vw';
		}
		else{
			myImg.style.width = 'auto';
			myImg.style.height = '80vh';
			myImg.style.maxHeight = '80vh';
			myImg.style.maxWidth = '80vw';
		}
		if($(window).height() / $(window).width() >= (realHeight / realWidth))
		{
			myImg.setAttribute('style' , 'img-fluid');
		}
		// myDiv.style.borderStyle = 'dashed';
		// myDiv.style.objectFit = 'contain';
		

		
		$('#imagemodal').modal('show');  
	});		
});
