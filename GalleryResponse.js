var imgs = [
	["./images/vert.png","./images/wide.png"],
	["./images/hooman.PNG","./images/wide.png"],
	["./images/wide.png","./images/wide.png","./images/hooman.PNG"]
];
//[thumbnail, series1, series2]	

$(function() {
$('#imagemodal').on('hidden.bs.modal', function () {
	var element = document.getElementsByClassName('carousel-item');

	var i;
	
	for (i = element.length -1; i >= 1; i--) {
		element[i].remove();
	}

	element[0].classList.add('active');
  });
});

$(function() {
	$('.square').on('click', function() {
		$('.image-preview').attr('src', $(this).find('img').attr('src'));
		var series = $(this).find('img').attr('class');
		var src = $(this).find('img').attr('src');
		
		document.getElementById('prev').style.display = 'none';
		document.getElementById('next').style.display = 'none';

		if(series.includes("series")){
			addElement(src);
			document.getElementById('prev').style = '';
			document.getElementById('next').style = '';
		}

		var myImg = document.querySelector("#kanye");
		var realWidth = myImg.naturalWidth;
		var realHeight = myImg.naturalHeight;

		myImg.setAttribute('style' , '');

		if($(window).height() / $(window).width() >= (realHeight / realWidth))
		{
			myImg.setAttribute('style' , 'img-fluid');
		}else{
			myImg.style.height = '80vh';
			myImg.style.width = 'auto';
			myImg.style.maxHeight = '80vh';
			myImg.style.maxWidth = '80vw';
		}
		$('#imagemodal').modal('show');  

	});		
});

function addElement (src) {

	var i, j;
	for(i=0; i<imgs.length; i++){
		if(imgs[i][0] == src){
			for(j=0; j<imgs[i].length - 1; j++){
				newImage = new Image();
				newImage.src = imgs[i][j+1];

				if($(window).height() / $(window).width() >= (newImage.naturalHeight / newImage.naturalWidth)){
					newImage.setAttribute('style' , 'img-fluid');
				} else{
					newImage.style.height = '80vh';
					newImage.style.width = 'auto';
					newImage.style.maxHeight = '80vh';
					newImage.style.maxWidth = '80vw';
				}

				var newDiv = document.createElement("div");
				newDiv.setAttribute('class', 'carousel-item');
				newImage.classList.add('modal-img');
				document.getElementById("car-inner").appendChild(newDiv).appendChild(newImage);
			}	
			break;
		}
	}
};



