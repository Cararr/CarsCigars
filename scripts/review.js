const reviewNoteClick = document.querySelector('.review_note_details');
reviewNoteClick.addEventListener('click', show_note_details);

/* SHOW CIGAR NOTE SCORE PARTS */
function show_note_details() {
	noteDetails.style.width = '10rem';
	noteDetails.style.paddingLeft = '3px';
	reviewNoteClick.removeEventListener('click', show_note_details);
	setTimeout('hide_note_details()', 5000);
}
function hide_note_details() {
	noteDetails.style.width = '0';
	noteDetails.style.paddingLeft = '0';
	reviewNoteClick.addEventListener('click', show_note_details);
}
