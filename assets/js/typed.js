$('document').ready(() => {
  $('#aboutMe').addClass('load');
  $(this).scrollTop(0);
  let typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    startDelay: 1600,
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