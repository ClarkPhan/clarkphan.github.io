$('document').ready(() => {
    $(this).scrollTop(0);
    let typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      showCursor: false,
      typeSpeed: 20
    })
    let typed2 = new Typed('#typed2', {
      stringsElement: '#typed-strings2',
      startDelay: 2600,
      smartBackSpace: true,
      typeSpeed: 20,
      loop: true,
      onTypingPaused: (arrayPos, self) => {
        $('.typed-cursor').css('display', 'inline')
      },
      onTypingResumed: (arrayPos, self) => {
        $('.typed-cursor').css('display', 'none')
      },
      onBegin: (self) => {
        $('.typed-cursor').css('display', 'none')
      },
      onComplete: (self) => {
        $('.typed-cursor').css('display', 'inline')
      }
    })
    $('.typed-cursor').css('display', 'none')
  });