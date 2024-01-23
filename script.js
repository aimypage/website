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

const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const comments = document.getElementById("comments");

name.addEventListener('click', () => {
	name.style.backgroundColor = "#FFFFFF";
});

email.addEventListener('click', () => {
	email.style.backgroundColor = "#FFFFFF";
});

phone.addEventListener('click', () => {
	phone.style.backgroundColor = "#FFFFFF";
});

function sendForm() {
	name.style.backgroundColor = '#FFFFFF';
	phone.style.backgroundColor = '#FFFFFF';
	email.style.backgroundColor = '#FFFFFF';

	let hasError = false;

	if(name.value.length < 1) {
		name.style.backgroundColor = '#ef9a9a';
		hasError = true;
	}

	if(email.value.length < 1) {
		email.style.backgroundColor = '#ef9a9a';
		hasError = true;
	}

	if(phone.value.length < 1) {
		phone.style.backgroundColor = '#ef9a9a';
		hasError = true;
	}

	// send data
	if(hasError === false) {
		document.getElementsByClassName("contact-form")[0].style.display = "none";
		document.getElementsByClassName("contact-form-sent")[0].style.display = "";
	}
}
