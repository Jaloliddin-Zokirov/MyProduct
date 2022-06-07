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



var elCheck = document.querySelector('.question__check')
var elSubject = document.querySelector('.question__item')

elCheck.addEventListener('click', function () {
  elSubject.classList.toggle('question__item--on')
})

var elChecktwo = document.querySelector('.two')
var elSubjecttwo = document.querySelector('.question__item-two')

elChecktwo.addEventListener('click', function () {
  elSubjecttwo.classList.toggle('question__item-two--on')
})

var elCheckthere = document.querySelector('.there')
var elSubjectthere = document.querySelector('.question__item-there')

elCheckthere.addEventListener('click', function () {
  elSubjectthere.classList.toggle('question__item-there--on')
})

var elCheckfour = document.querySelector('.four')
var elSubjectfour = document.querySelector('.question__item-four')

elCheckfour.addEventListener('click', function () {
  elSubjectfour.classList.toggle('question__item-four--on')
})