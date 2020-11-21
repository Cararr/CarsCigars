const banner = document.querySelector('#add_banner'),
	mainContainer = document.querySelector('.main_container'),
	searchPannel = document.querySelector('#search_pannel'),
	hamburgerButton = document.querySelector('#hamburger_button'),
	searchIcon = document.querySelector('#search_icon'),
	noteDetails = document.querySelector('#note_details'),
	hamburgerMenu = document.querySelector('#hamburger_menu'),
	slidMenu = document.querySelector('#hamburger_slide_down_submenu'),
	slidTrigger = document.querySelector('.slideShow');
searchIcon.addEventListener('click', show_search);
hamburgerButton.addEventListener('click', show_menu);
slidTrigger.addEventListener('click', showSlid);

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

function disableScroll() {
	scrollTop = window.pageYOffset;
	window.onscroll = () => {
		scrollTo(0, scrollTop);
	};
}
function enableScroll() {
	window.onscroll = () => {};
}

/* SHOW SEARCH PANNEL */
function show_search() {
	if (searchIcon.innerHTML === '<i class="icon-search"></i>') {
		mainContainer.style.filter = 'blur(5px)';
		banner.style.filter = 'blur(5px)';
		let howWidth = window.innerWidth;
		if (howWidth >= 800) {
			searchPannel.style.height = '5rem';
		} else {
			searchPannel.style.height = '3.5rem';
			hamburgerButton.style.visibility = 'hidden';
		}
		searchIcon.innerHTML = '<i class="icon-cancel"></i>';
		disableScroll();
	} else {
		hide_search();
	}

	function hide_search() {
		searchPannel.style.height = '0';
		mainContainer.style.removeProperty('filter');
		banner.style.removeProperty('filter');
		enableScroll();
		searchIcon.innerHTML = '<i class="icon-search"></i>';
		hamburgerButton.style.visibility = 'visible';
	}
}

/* SHOW HAMBURGER MENU ON SMALL SCREEN */
function show_menu() {
	if (hamburgerButton.innerHTML === '<i class="icon-menu"></i>') {
		hamburgerMenu.style.height = '281px';
		hamburgerMenu.style.borderTop = '1px ridge #963700';
		hamburgerButton.innerHTML = '<i class="icon-cancel"></i>';
		searchIcon.style.visibility = 'hidden';
	} else {
		hide_menu();
	}

	function hide_menu() {
		hamburgerMenu.style.height = '0';
		hamburgerMenu.style.border = 'none';
		hamburgerButton.innerHTML = '<i class="icon-menu"></i>';
		searchIcon.style.visibility = 'visible';
		slidMenu.style.height = '0';
		slidMenu.style.borderTop = 'none';
		slidMenu.style.borderBottom = 'none';
		hamburgerMenu.style.setProperty('--info_after', 'rotate(0deg)');
	}
}
function showSlid() {
	let howWidth = window.innerWidth;
	if (howWidth <= 800) {
		if (
			window.getComputedStyle(slidMenu).getPropertyValue('height') === '16px'
		) {
			slidMenu.style.transition = 'height 0.2s linear, border linear 0.5s';
			hamburgerMenu.style.height = 'initial';
			hamburgerMenu.style.setProperty('--info_after', 'rotate(180deg)');
			slidMenu.style.height = '218px';
			slidMenu.style.borderTop = '1px solid #963700';
			slidMenu.style.borderBottom = '1px solid #963700';
		} else {
			hideSlid();
		}
	}

	function hideSlid() {
		slidMenu.style.transition = 'none';
		hamburgerMenu.style.height = '281px';
		slidMenu.style.height = '0';
		slidMenu.style.borderTop = 'none';
		slidMenu.style.borderBottom = 'none';
		hamburgerMenu.style.setProperty('--info_after', 'rotate(0deg)');
	}
}
