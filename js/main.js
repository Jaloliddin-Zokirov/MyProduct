let elBody = document.querySelector('.site-body')
let elDark = document.querySelector('.header__black')

let theme = false

function chengeTheme(){
  if(window.localStorage.getItem('theme') == 'site-body--white'){
    elBody.classList.add('site-body--white')
    elDark.classList.add('light')
  } else{
    elBody.classList.remove('site-body--white')
    elDark.classList.remove('light')
  }
}
elDark.addEventListener('click', function(){
  theme = !theme
  window.localStorage.setItem('theme', theme ? 'site-body--white' : 'light')
  chengeTheme()
})
chengeTheme()

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