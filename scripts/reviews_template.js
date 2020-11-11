const templateData = {
	lastReviewsData: [
		{
			pageLink: 'nasty_fritas.html',
			imgSrc: 'img/reviews/nasty_fritas/nasty_fritas__5x3.jpg',
			imgAlt: 'cygaro nasty fritas',
			cigarName: 'Drew Estate Liga Privada Único Serie Nasty Fritas',
			dateTimeAtr: '2020-08-14',
			dateTimeText: '14 sierpnia, 2020r.',
			cigarText:
				'Paskudna? Bynajmniej! Czekoladowy aromat przyjemnie łączy się z typowo Nikaraguańską pieprzną pikantnością dając cygaro o średnio-pełnej mocy i ciekawym kształcie. Dodaj do tego ogromną ilość produkowanego dymu a otrzymasz mieszankę iście wybuchową!',
		},
		{
			pageLink: '#',
			imgSrc: 'img/reviews/american_blend/alecbradley_american_5x3.jpg',
			imgAlt: 'cygaro Alec Bradley American Classic Blend',
			cigarName: 'Alec Bradley American Classic Blend Corona',
			dateTimeAtr: '2020-08-01',
			dateTimeText: '1 sierpnia, 2020r.',
			cigarText:
				'<i>"Libertas Aequitas"</i> - te zawarte na pierścieniu hasła, wraz z amerykańską flagą pokazują intencję producenta, który tymi cygarami	próbuje odtworzyć charakter cygar produkowanych na Florydzie na	początku XX wieku.',
		},
		{
			pageLink: '#',
			imgSrc: 'img/reviews/arturo_fuente/Arturo_Fuente_5x3.jpg',
			imgAlt: 'cygaro Arturo Fuente Gran Reserva',
			cigarName: 'Arturo Fuente Gran Reserva Petit Corona',
			dateTimeAtr: '2020-07-07',
			dateTimeText: '7 lipca, 2020r.',
			cigarText:
				'Ociekający złotem pierścień i dosyć wysoka cena wydają się krzyczeć głośno - to klasa premium! W środku, typowo dla marki, Dominikańska wkładka i binder. Czy samo cygaro dotrzymuje kroku okazałemu	pierścieniowi?',
		},
	],
};

const tempalteSource = document.querySelector('#reviews-handlebars-template')
	.innerHTML;
const template = Handlebars.compile(tempalteSource);
const compiledHtml = template(templateData);
document.querySelector('#reviews_container').innerHTML = compiledHtml;
