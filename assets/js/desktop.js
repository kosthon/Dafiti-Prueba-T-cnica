const highRankContainer = document.querySelector('#rankHigh');
const smallRankContainer = document.querySelector('#rankSmall');
const midleRankContainer = document.querySelector('#rankMiddle');
const highRank = [
	'/assets/images/hard1.png',
	'/assets/images/hard2.png',
	'/assets/images/hard3.png',
];
const middleRank = [
	'/assets/images/middle1.png',
	'/assets/images/middle2.png',
	'/assets/images/middle3.png',
	'/assets/images/middle4.png',
];
const smallRank = [
	'/assets/images/small1.png',
	'/assets/images/small2.png',
	'/assets/images/small3.png',
];
function printImages(array, containerCampaign) {
	array.forEach(element => {
		const campaignLink = document.createElement('a');
		campaignLink.href = '#';
		campaignLink.classList.add('campaign__element');

		const imageCampaing = document.createElement('img');
		imageCampaing.src = element;

		campaignLink.appendChild(imageCampaing);
		containerCampaign.appendChild(campaignLink);
	});
}
function printImagesSliders(array, containerCampaign) {
	const swiperWrapper = document.createElement('div');
	swiperWrapper.classList.add('swiper-wrapper');
	array.forEach(element => {
		const campaignLink = document.createElement('a');
		campaignLink.href = '#';
		campaignLink.classList.add('campaign__element');
		campaignLink.classList.add('swiper-slide');

		const imageCampaing = document.createElement('img');
		imageCampaing.src = element;

		campaignLink.appendChild(imageCampaing);
		swiperWrapper.appendChild(campaignLink);
	});
	containerCampaign.appendChild(swiperWrapper);
}
printImages(middleRank, midleRankContainer);
printImagesSliders(smallRank, smallRankContainer);
printImagesSliders(highRank, highRankContainer);

var swiper = new Swiper(highRankContainer, {
	loop: true,
	autoplay: {
		delay: 6000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
var swiper = new Swiper(smallRankContainer, {
	loop: true,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	slidesPerView: 1,
	speed: 10000,
	grabCursor: false,
	mousewheelControl: false,
	keyboardControl: false,
	freeMode: true,
	freeModeMomentum: true,
});
