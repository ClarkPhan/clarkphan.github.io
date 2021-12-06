jQuery(function ($, undefined) {
	$('#terminal').terminal({
		help: function() {
			this.echo(
				'Type any of these commands to try them out! Type `help` to see this list again.'
				+ '\nclear'
				+ '\nabout'
				+ '\nresume'
				+ '\ncontact',
				{ keepWords: true }
			);
		},
		about: function() {
			this.echo(
				'Hey, I\'m Clark! I recently graduated from UCSD and am passionate about web development.'
				+ '\n\nSome topics that I find really interesting and exciting at the moment are progressive web apps, the possibilty of Web 3.0,'
				+ ' and full-stack web development.'
				+ '\n\nWithin my lifetime, I hope to create quality, impactful, and accessible software that can make people\'s lives better.'
				+ '\n\nIn my free time, I like to play video games and ride my road bike.',
				{ keepWords: true }
			);
		},
		resume: function() {
			this.echo(
				'Check out my resume [[!;;;;https://clarkphan.com/resume.pdf]here]!',
				{ keepWords: true }
			);
		},
		contact: function() {
			this.echo(
				'Feel free to contact me at [[!;;;;clark@clarkphan.com]clark@clarkphan.com] with any questions!',
				{ keepWords: true }
			);
		}
	}, {
		greetings: false,
		onInit: function() {
			this.echo(
				'Welcome to my personal website! Please type `help` and then the \'Enter\' key to begin.',
				{ keepWords: true }
			);
		},
		name: 'Clark\'s Terminal',
		height: 250,
		width: 650,
		prompt: 'clark@clarkphan.com ~ $ ',
		convertLinks: false,
	});
});