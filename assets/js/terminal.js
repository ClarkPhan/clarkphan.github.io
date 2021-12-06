jQuery(function ($, undefined) {
	$('#terminal').terminal({
		help: function () {
			this.echo('Type any of these commands to try them out! Type `help` to see this list again.'
				+ '\nclear'
				+ '\nabout',
				{ keepWords: true }
			);
		},
		about: function () {
			this.echo('Hey, I\'m Clark! I recently graduated from UCSD and am interested in full-stack web development.'
				+ '\nI am passionate about creating quality and impactful software that aims to make people\'s lives better.'
				+ '\nIn my free time I like to play video games and ride my road bike.',
				{ keepWords: true }
			);
		},
	}, {
		greetings: false,
		onInit: function () {
			this.echo('Welcome to my personal website! Please type `help` and then the \'Enter\' key to begin.',
				{ keepWords: true }
			);
		},
		name: 'Clark\'s Terminal',
		height: 250,
		width: 750,
		prompt: 'clark@clarkphan.com ~ $ ',
		convertLinks: false,
	});
});