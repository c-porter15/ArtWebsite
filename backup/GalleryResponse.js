var imgs = [
	["./images/wide.png","./images/wide.png"],
	["./images/hooman.png","./images/wide.png"],
	["./images/vert.png","./images/wide.png","./images/hooman.png","./images/raids setup.png"],
	["./images/vert.png"]
	//[thumbnail, series1, series2]	
]
// function populateCarousel() {

// 		
// 	];//load all images into carousel on page load
	
// 	var i, j, counter;
// 	for(i = 0; i < imgs.length; i++){
// 		for(j = 1; j < imgs[i].length; i++){
// 			newImage = new Image();
// 			newImage.src = imgs[i][j];
// 			var newDiv = document.createElement("div");
// 			newDiv.setAttribute('class', 'carousel-item');
// 			newImage.classList.add('modal-img');
// 			document.getElementById("car-inner").appendChild(newDiv).appendChild(newImage);
// 		}
// 	}
// }



$(function() {
$('#imagemodal').on('hidden.bs.modal', function () {
	var element = document.getElementsByClassName('carousel-item');

	var i;
	for (i = 1; i < element.length; i++) {
		element[i].remove();
	}

	element[0].classList.add('active');
  });
});

$(function() {
	$('.square').on('click', function() {
		$('.image-preview').attr('src', $(this).find('img').attr('src'));
		var series = $(this).find('img').attr('class');
		
		document.getElementById('prev').style.display = 'none';
		document.getElementById('next').style.display = 'none';

		if(series.includes("series")){
			//addElement();
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

function addElement () {

	var i;
	for(i=0; i<imgs.length; i++){
		
	}
	counter = 1;
	newImage = new Image();
	newImage.src = './images/wide' + counter + '.png';
	var newDiv = document.createElement("div");
	newDiv.setAttribute('class', 'carousel-item');
	newImage.classList.add('modal-img');
	document.getElementById("fuck").appendChild(newDiv).appendChild(newImage);
	
	
	// counter = 1;
	// while(true){
		
	// 	try {
	// 		newImage = new Image();
	// 		newImage.src = './images/wide' + counter + '.png';
	// 		if(newImage.width == 0) throw "blah";
	// 		var newDiv = document.createElement("div");
	// 		newDiv.setAttribute('class', 'carousel-item');
	// 		newImage.classList.add('modal-img');
	// 		document.getElementById("fuck").appendChild(newDiv).appendChild(newImage);
	// 	}
	// 	catch(err) {
	// 		alert('go fuck urself' + err)
	// 		break;
	// 	}
	// 	counter++;
	// }
	// alert('made it');


	// while(newImage.onload == 1){
	// 	alert('here');
	// 	alert('hereee');
	// 	newImage = new Image();
	// 	var newDiv = document.createElement("div");
	// 	newDiv.setAttribute('class', 'carousel-item');
	// 	newImage.classList.add('modal-img');
	// 	document.getElementById("fuck").appendChild(newDiv).appendChild(newImage);

	// 	counter = counter + 1;

		
	// }

	// if($(window).height() / $(window).width() >= (newImage.naturalHeight / newImage.naturalWidth)){
	// 	newImage.setAttribute('style' , 'img-fluid');
	// } else{
	// 	newImage.style.height = '80vh';
	// 	newImage.style.width = 'auto';
	// 	newImage.style.maxHeight = '80vh';
	// 	newImage.style.maxWidth = '80vw';
	// }
	
	
};



