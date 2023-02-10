let number = document.querySelector('div#n')
let somar = document.getElementById('soma')
let sub = document.querySelector('input#subtrai')
let rest = document.getElementById('reset')


let n1 = 0
let n2 = 10
//let sm = 1
number.style.color = '#0e0e0e'

somar.addEventListener('click', Some)
sub.addEventListener('click', Tire)
rest.addEventListener('click', Reset)


function Some() {
   if (0 < 1) {
     number.innerHTML = n1 = n1 + 1
    }
    if (n1 > 0) {
    number.style.color = 'green'
   } 
   if (n1 == 0 ) {
      number.style.color = '#0e0e0e'
    }
}

function Reset() {
      number.innerHTML = 0
      if (n1 > 0 || 0 > n1)
      n1 = 0
      number.style.color = '#0e0e0e'
}

function Tire() {
     if (0 < 1) {
      number.innerHTML = n1 = n1 - 1
     }
     if (n1 <= 0) {
    number.style.color = 'red'
    } 
    if (n1 == 0 ) {
      number.style.color = '#0e0e0e'
    }
}

