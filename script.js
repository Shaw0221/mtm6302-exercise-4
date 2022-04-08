const $form = document.getElementById('form')
const $countdownTitle = document.getElementById('countdownTitle')
const $countdownDate = document.getElementById('countdownDate')
const $submitButton = document.getElementById('submitButton')
const $clock = document.getElementById('clock')
const $card = document.getElementById('card')
const $title = document.getElementById('title')
const $clearTimer = document.getElementById('clearTimer')
const $countdownContainer = document.getElementById('countdownContainer')


function saveData() {
    
  }

function dateDiff (start, end) {
    const diff = end - start > 0 ? end - start : 0
    const format = (num) => num < 10 ? `0${num}` : num
    
    return {
      days: format(Math.floor(diff / 1000 / 60 / 60 / 24)),
      hours: format(Math.floor(diff / 1000 / 60 / 60 % 24)),
      minutes: format(Math.floor(diff / 1000 / 60 % 60)),
      seconds: format(Math.floor(diff / 1000 % 60))
    }
  }

  let timer
  
  $form.addEventListener('click', function (e) {
    if (e.target.classList.contains('submit')) {
        e.preventDefault();

        saveData();

        $card.classList.add('hidden')

        $clock.classList.remove('hidden')

        const countdownTitle = $countdownTitle.value

        $title.textContent = countdownTitle

        timer = setInterval(function() {
        const now = new Date();
        const then = new Date($countdownDate.value);
        const $dateDifference = dateDiff(now, then)

        $countdownContainer.innerHTML = `<div class="countdownContain"><div class="display-4">${$dateDifference.days}:</div> <div class="display-4"> ${$dateDifference.hours}:</div> <div class="display-4"> ${$dateDifference.minutes}:</div> <div class="display-4">${$dateDifference.seconds}</div></div>`
        ,1000})
      }
      localStorage.setItem('localTitle', countdownTitle.value);
  })

  $clock.addEventListener('click', function (e) {
  if (e.target.classList.contains('clear')) {
    e.preventDefault();

    localStorage.clear();

    $card.classList.remove('hidden')

    $clock.classList.add('hidden')

    clearInterval(timer);

    form.reset();

  }
})

let localCountdown = localStorage.getItem('localTitle')
if (localCountdown) {
  const countdownTitle = $countdownTitle.value

  $title.value = countdownTitle

  $card.classList.add('hidden')

  $clock.classList.remove('hidden')
}
