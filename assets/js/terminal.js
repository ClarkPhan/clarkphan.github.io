jQuery(function ($, undefined) {
	$('#terminal').terminal({
		help: function() {
			this.echo(
				'Type any of these commands to try them out! Type `help` to see this list again.'
				+ '\nclear'
				+ '\nabout'
				+ '\nprojects'
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
		projects: function() {
			this.echo(
				"[[!;;;;https://startpage-clarkphan.vercel.app/]StartPage]" +
            	" " +
				'[[!;;;;https://github.com/clarkphan]GitHub]',
				{ keepWords: true }
			);
		},
		resume: function() {
			this.echo(
				'[[!;;;;https://clarkphan.dev/resume.pdf]Resume.pdf]',
				{ keepWords: true }
			);
		},
		contact: function() {
			this.echo(
				'Feel free to contact me at [[!;;;;clark@clarkphan.com]hello@clarkphan.dev].',
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
		height: 400,
		width: 650,
		prompt: 'clark@clarkphan.dev ~ $ ',
		convertLinks: false,
	});
});