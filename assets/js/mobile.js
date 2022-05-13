const highRankContainer = document.querySelector('#rankHigh');
const smallRankContainer = document.querySelector('#rankSmall');
const midleRankContainer = document.querySelector('#rankMidle');
const smallRank = ['/assets/images/low1.png', '/assets/images/low2.png', '/assets/images/low3.png'];
const highRank = [
	'/assets/images/hardmobile1.png',
	'/assets/images/hardmobile2.png',
	'/assets/images/hardmobile3.png',
];
const midRank = [
	'/assets/images/mid1.png',
	'/assets/images/mid2.png',
	'/assets/images/mid3.png',
	'/assets/images/mid4.png',
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
printImagesSliders(smallRank, smallRankContainer);
printImagesSliders(highRank, highRankContainer);
printImages(midRank, midleRankContainer);
var swiper = new Swiper(smallRankContainer, {
	loop: true,
	autoplay: {
		delay: 0,
		disableOnInteraction: false,
	},
	speed: 10000,
	grabCursor: false,
	mousewheelControl: false,
	keyboardControl: false,
	freeMode: true,
	freeModeMomentum: true,
});
var swiper = new Swiper(highRankContainer, {
	effect: 'fade',
	fadeEffect: {
		crossFade: true,
	},
	centeredSlides: true,
	simulateTouch: false,
	draggable: false,
	allowTouchMove: false,
	loop: true,
	autoplay: {
		reverseDirection: true,
		delay: 6000,
		disableOnInteraction: false,
	},
});
