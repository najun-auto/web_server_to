//IE10+ blur			
if (typeof document.msHidden != "undefined") {
	[].slice.call(document.querySelectorAll(".cover img")).forEach(function(img) {
		img.classList.add("hidden");
		
		var myImage = new Image(), src = img.src;
		// img.insertAdjacentHTML("afterend", '<svg class="blur" width="160" height="140">\
		// 	<image xlink:href="'+ src +'" src="'+ src +'" width="160" height="140" y="0" x="0" filter="url(#blur)" />\
		// </svg>');
		img.insertAdjacentHTML("afterend", '<svg class="blur" width="400" height="400">\
			<image xlink:href="'+ src +'" src="'+ src +'" width="400" height="400" y="0" x="0" filter="url(#blur)" />\
		</svg>');
	});
}

function ImageClickEvent(){
	window.open('http://www.naver.com','_blank');
}

