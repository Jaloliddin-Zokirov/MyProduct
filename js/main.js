var elBody = document.querySelector('.header__black')
var elSpan = document.querySelector('.site-body')

elBody.addEventListener('click', function () {
  elSpan.classList.toggle('site-body--white')
})