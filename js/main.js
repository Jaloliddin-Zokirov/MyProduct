var elBody = document.querySelector('.header__black')
var elSpan = document.querySelector('.site-body')

elBody.addEventListener('click', function () {
  elSpan.classList.toggle('site-body--white')
})





var elIcon = document.querySelector('.header__icon')

elIcon.addEventListener('click', function () {
  elIcon.classList.toggle('open')
})


var elIcon = document.querySelector('.header__icon')
var elRight = document.querySelector('.header__right')

elIcon.addEventListener('click', function () {
  elRight.classList.toggle('header__right--on')
})



// var elInp = document.querySelector('.price__choice')
// var elBtn = document.querySelector('.price__order')

// elInp.addEventListener('click', function () {
//   elBtn.classList.toggle('on')
// })