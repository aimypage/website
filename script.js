function getAspectRation(imageUrl) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = imageUrl;

		img.onload = function() {
			const aspectRatio = img.width / img.height;
			resolve(aspectRatio);
		};

		img.onerror = function() {
			reject('Error loading the image');
		};
	});
}

function loadBackground(imageElementClass, containerClass) {
	const obj = document.getElementsByClassName(imageElementClass)[0];
	getAspectRation(obj.src)
		.then((aspectRatio) => {
			const objs = document.getElementsByClassName(containerClass);
			for(let i=0 ; i<objs.length ; i++) {
				const obj = objs[i];
				obj.style.paddingTop = `calc(100% / ${aspectRatio})`;
			}
			document.body.style.opacity = "1";
		})
		.catch((error) => {
			console.error(error);
		});
}

loadBackground('dummy-main-bg', 'main-wrapper');

loadBackground('dummy-about-bg', 'about-wrapper');

loadBackground('dummy-how-bg', 'how-wrapper');

loadBackground('dummy-who-bg', 'who-wrapper');

loadBackground('dummy-pricing-bg', 'pricing-wrapper');

loadBackground('dummy-contact-bg', 'contact-wrapper');
