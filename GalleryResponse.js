$(function() {
		$('.square').on('click', function() {
			$('.image-preview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});