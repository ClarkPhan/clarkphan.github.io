jQuery(function ($, undefined) {
  const CONFIG = {
    font: "Cards",
    fontPath: "assets/fonts",
    animationSpeed: 100, // Time between cards (ms)
  };

  // Pre-load the figlet font before using it
  figlet.defaults({ fontPath: CONFIG.fontPath });
  figlet.preloadFonts([CONFIG.font], initTerminal);

  const TERMINAL_COMMANDS = {
    help: function () {
      this.echo(
        "Type any of these commands to try them out! Type `help` to see this list again." +
          "\nclear" +
          "\nabout" +
          "\nprojects" +
          "\nresume" +
          "\ncontact",
        { keepWords: true }
      );
    },
    about: function () {
      this.echo(
        "Software developer with full-stack experience. Currently interested in progressive web apps and generative AI.",
        { keepWords: true }
      );
    },
    projects: function () {
      this.echo(
        "[[!;;;;https://startpage-clarkphan.vercel.app/]StartPage]" +
          " " +
          "[[!;;;;https://github.com/clarkphan]GitHub]",
        { keepWords: true }
      );
    },
    resume: function () {
      this.echo("[[!;;;;https://clarkphan.dev/resume.pdf]Resume.pdf]", {
        keepWords: true,
      });
    },
    contact: function () {
      this.echo(
        "Feel free to contact me at [[!;;;;clark@clarkphan.com]hello@clarkphan.dev].",
        { keepWords: true }
      );
    },
  };

  function initTerminal() {
    $("#terminal").terminal(
      { ...TERMINAL_COMMANDS },
      {
        greetings: false,
        onInit: displayWelcomeAnimation,
        name: "Clark's Terminal",
        height: 800,
        width: 1000,
        prompt: "clark@clarkphan.dev ~ $ ",
        convertLinks: false,
      }
    );
  }

  // Welcome animation display function
  function displayWelcomeAnimation() {
    const term = this;
    const text = "Welcome";

    // Completely disable user input by using both pause and frozen state
    term.pause(true); // True parameter makes it persistent
    term.freeze(true); // Freezes the terminal completely

    // Generate complete figlet text to get dimensions and structure
    const figletText = figlet.textSync(text, {
      font: CONFIG.font,
      whitespaceBreak: true,
    });

    // Split the complete figlet into lines
    const lines = figletText.split("\n");

    // Create an array of empty lines with same height as the figlet
    const emptyLines = Array(lines.length).fill("");

    // Display empty container for animation
    emptyLines.forEach((line) => term.echo(line));

    // Move cursor back up to start of empty space
    term.scroll(-lines.length);

    // Animate each character of the welcome text
    animateFigletText(term, text, lines.length).then(() => {
      term.scroll(lines.length); // Move past the figlet
      // After animation completes, show the help message
      term.echo("Please type `help` and then the 'Enter' key to begin.", {
        keepWords: true,
      });
      // Completely re-enable user input
      term.freeze(false);
      term.resume();
    });
  }

  // Function to animate the figlet text character by character
  function animateFigletText(term, text, lineHeight) {
    return new Promise((resolve) => {
      // Current state of displayed figlet
      let currentDisplay = Array(lineHeight).fill("");
      let position = 0;

      // Start the animation
      const animationInterval = setInterval(() => {
        // If we've displayed all characters, stop animation
        if (position >= text.length) {
          clearInterval(animationInterval);
          resolve();
          return;
        }

        // Get the current character to animate
        const currentChar = text[position];

        // Generate figlet for just this character
        const charFiglet = figlet.textSync(currentChar, {
          font: CONFIG.font,
          whitespaceBreak: true,
        });

        // Split into lines
        const charLines = charFiglet.split("\n");

        // Update the current display with this character
        for (let i = 0; i < lineHeight; i++) {
          if (i < charLines.length) {
            // Update the line with the new character
            currentDisplay[i] += charLines[i];
            // Update terminal line
            term.update(-lineHeight + i, currentDisplay[i]);
          }
        }

        // Move to next character
        position++;
      }, CONFIG.animationSpeed);
    });
  }
});
