var elBody = document.querySelector('.header__black')
var elSpan = document.querySelector('.site-body')

elBody.addEventListener('click', function () {
  elSpan.classList.toggle('site-body--white')
})





var elIcon = document.querySelector('.header__icon')

elIcon.addEventListener('click', function () {
  elIcon.classList.toggle('open')
})



var elRight = document.querySelector('.header__right')

elSpan.addEventListener('click', function () {
  elRight.classList.toggle('header__right--on')
})