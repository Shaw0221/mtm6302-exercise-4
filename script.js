const $form = document.getElementById('form')
const $countdownTitle = document.getElementById('countdownTitle')
const $countdownDate = document.getElementById('countdownDate')
const $submitButton = document.getElementById('submitButton')
const $clock = document.getElementById('clock')
const $card = document.getElementById('card')
const $title = document.getElementById('title')
const $clearTimer = document.getElementById('clearTimer')

if (localStorage.length != 0) {
    let retrievedTitle = localStorage.getItem('countdownTitle')
    let retrievedDate = localStorage.getItem('countdownDate')

    $countdownTitle.value = retrievedTitle
    $countdownDate.value = retrievedDate
}

function saveData() {
    let countdownTitle = $countdownTitle.value
    let countdownDate = $countdownDate.value

    localStorage.setItem('countdownTitle', countdownTitle)
    localStorage.setItem('countdownDate', countdownDate)
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

  $form.addEventListener('click', function (e) {
    if (e.target.classList.contains('submit')) {
        e.preventDefault();

        saveData();

        $card.classList.add('hidden')

        document.getElementById("clock").innerHTML += "<h1 class='display-6 mb-3 d-flex justify-content-center'>"+$countdownTitle.value+"</h1> <h1 class='display-5 mb-3'>"+$countdownDate.value+"</h1> <button class='btn btn-secondary clear' id='clearTimer'>Clear Countdown</button>";
    }

    if (e.target.classList.contains('clear')) {
      
    }
  })