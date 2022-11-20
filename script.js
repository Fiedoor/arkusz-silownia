document.getElementById('obl').addEventListener('click', function () {
  let a = parseFloat(document.getElementById('wg').value)
  let b = parseFloat(document.getElementById('wz').value) / 100
  console.log(a)
  console.log(b)
  if (isNaN(a) || isNaN(b)) {
    alert('Wpisz prawidłowe wartości !')
  } else {
    let c = a / (b * b)
    console.log(c)
    document.getElementById('wynik').innerText = 'Twoje BMI: ' + c.toFixed(1)
    if (c < 18.5) {
      document.getElementById('kat').innerText = 'Kategoria: Niedowaga'
      document.getElementById('kat').style.color = 'red'
    } else if (c > 18.5 && c < 24.9) {
      document.getElementById('kat').innerText = 'Kategoria: Norma'
      document.getElementById('kat').style.color = 'green'
    } else if (c > 25 && c < 29.9) {
      document.getElementById('kat').innerText = 'Kategoria: Nadwaga'
      document.getElementById('kat').style.color = 'red'
    } else if (c > 30 && c < 34.9) {
      document.getElementById('kat').innerText = 'Kategoria: Otyłość 1st.'
      document.getElementById('kat').style.color = 'red'
    } else if (c > 35 && c < 39.9) {
      document.getElementById('kat').innerText = 'Kategoria: Otyłość 2st.'
      document.getElementById('kat').style.color = 'red'
    } else if (c > 39.9) {
      document.getElementById('kat').innerText = 'Kategoria: Otyłość 3st.'
      document.getElementById('kat').style.color = 'red'
    }
  }
})
