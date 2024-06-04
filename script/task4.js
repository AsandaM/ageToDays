//convert age to days

let years = document.querySelectorAll('input')[0]
let days = document.querySelectorAll('input')[1]
let button = document.querySelector('button')


function ageToDays() {
   days.value =  years.value * 365
}


button.addEventListener('click', ageToDays )
