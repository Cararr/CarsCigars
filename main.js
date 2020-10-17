const banner = document.getElementById('add_banner');
const mContainer = document.querySelector('.main_container');
const sPannel = document.getElementById('search_pannel');
const hButt = document.getElementById('hamburger_button');
const srch = document.getElementById('search_icon');
const nDetails = document.getElementById('note_details');
const hMenu = document.getElementById('hamburger_menu');
const slidMenu = document.getElementById('hamburger_slide_down_submenu');
const slidTrigger = document.getElementById('drop_span');
() => {
	$.scrollTo(0);
	$('.scroll').click(() => $.scrollTo($('body'), 1));
};
$(window).scroll(() => {
	let howWidth = window.innerWidth;
	if ($(this).scrollTop() > 300 && howWidth > 800) $('.scroll').fadeIn(500);
	else $('.scroll').fadeOut(500);
});
/* SLIDE DOWN SUBMENU */
$(document).ready(function () {
	$('#top_menu li').hover(
		function () {
			let howWidth = window.innerWidth;
			if (howWidth >= 800) {
				$('.slide_down_submenu', this).slideDown(150);
			}
		},
		function () {
			let howWidth = window.innerWidth;
			if (howWidth >= 800) {
				$('.slide_down_submenu', this).stop().slideUp(250);
			}
		}
	);
});

const disableScroll = () => {
	scrollTop = window.pageYOffset;
	window.onscroll = () => {
		scrollTo(0, scrollTop);
	};
};
const enableScroll = () => {
	window.onscroll = () => {};
};

/* SHOW SEARCH PANNEL */
let isSearchOn = false;
const show_search = () => {
	if (isSearchOn === false) {
		mContainer.style.filter = 'blur(5px)';
		banner.style.filter = 'blur(5px)';
		let howWidth = window.innerWidth;
		if (howWidth >= 800) {
			sPannel.style.height = '5rem';
		} else {
			sPannel.style.height = '3.5rem';
			hButt.style.visibility = 'hidden';
		}
		srch.innerHTML = '<i class="icon-cancel"></i>';
		disableScroll();
		isSearchOn = true;
	} else {
		hide_search();
	}

	function hide_search() {
		sPannel.style.height = '0';
		mContainer.style.removeProperty('filter');
		banner.style.removeProperty('filter');
		enableScroll();
		srch.innerHTML = '<i class="icon-search"></i>';
		hButt.style.visibility = 'visible';
		isSearchOn = false;
	}
};
/* SHOW CIGAR NOTE SCORE PARTS */
let areDetailsOn = false;
const hide_note_details = () => {
	nDetails.style.width = '0';
	nDetails.style.paddingLeft = '0';
	areDetailsOn = false;
};
const show_note_details = () => {
	nDetails.style.width = '10rem';
	nDetails.style.paddingLeft = '3px';
	let timeDetailsOn = setTimeout('hide_note_details()', 5000);
	if (areDetailsOn === true) {
		clearTimeout(timeDetailsOn);
	}
	areDetailsOn = true;
};
/* SHOW HAMBURGER MENU ON SMALL SCREEN */
let isMenuOn = false;
const show_menu = () => {
	if (isMenuOn === false) {
		hMenu.style.height = '281px';
		hMenu.style.borderTop = '1px ridge #963700';
		hButt.innerHTML = '<i class="icon-cancel"></i>';
		srch.style.visibility = 'hidden';
		isMenuOn = true;
	} else {
		hide_menu();
	}

	function hide_menu() {
		hMenu.style.height = '0';
		hMenu.style.border = 'none';
		hButt.innerHTML = '<i class="icon-menu"></i>';
		srch.style.visibility = 'visible';
		slidMenu.style.height = '0';
		slidMenu.style.borderTop = 'none';
		slidMenu.style.borderBottom = 'none';
		hMenu.style.setProperty('--info_after', 'rotate(0deg)');
		isSlidOn = false;
		isMenuOn = false;
	}
};

let isSlidOn = false;
const show_info = () => {
	let howWidth = window.innerWidth;
	if (howWidth <= 800) {
		if (isSlidOn === false) {
			slidMenu.style.transition = 'height 0.2s linear, border linear 0.5s';
			hMenu.style.height = 'initial';
			hMenu.style.setProperty('--info_after', 'rotate(180deg)');
			slidMenu.style.height = '218px';
			slidMenu.style.borderTop = '1px solid #963700';
			slidMenu.style.borderBottom = '1px solid #963700';
			isSlidOn = true;
		} else {
			hideSlid();
		}
	}

	function hideSlid() {
		slidMenu.style.transition = 'none';
		hMenu.style.height = '281px';
		slidMenu.style.height = '0';
		slidMenu.style.borderTop = 'none';
		slidMenu.style.borderBottom = 'none';
		hMenu.style.setProperty('--info_after', 'rotate(0deg)');

		isSlidOn = false;
	}
};
