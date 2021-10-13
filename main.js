const questionList = [
  { text: 'Perut sering kembung (begah) / distensi abdominal', score: 5 },
  {
    text:
      'Heartburn (sensasi seperti terbakar) di perut, dada, dan tenggorokan ',
    score: 5,
  },
  {
    text: 'Nyeri di bagian perut atas sampai dada (nyeri di ulu hati)',
    score: 5,
  },
  { text: 'Muda lelah, letih, dan lesu', score: 5 },
  { text: 'Sering sendawa', score: 5 },
  { text: 'Sesak nafas ringan sampai berat (sulit bernafas lega)', score: 5 },
  {
    text: 'Rasa tidak nyaman saat beraktivitas maupun  beristirahat',
    score: 5,
  },
  { text: 'Sering mual dan muntah ', score: 5 },
  { text: 'Rasa nyeri atau panas di perut ', score: 5 },
  { text: 'Emosi menjadi tidak stabil (cemas berlebih)', score: 5 },
  { text: 'Jantung berdebar – debar', score: 3 },
  { text: 'Kehilangan nafsu makan atau justru mudah lapar', score: 3 },
  { text: 'Anggota badan terasa berat (tangan, kaki, dan kepala)', score: 3 },
  { text: 'Sering keluar kringat dingin', score: 3 },
  { text: 'Gangguan tidur (insomnia)', score: 3 },
  { text: 'Borborygmus (perut sering berbunyi)', score: 2 },
  { text: 'Mulut terasa kering, asam dan atau pahit', score: 2 },
  { text: 'Berat badan turun ', score: 2 },
  { text: 'Sering sariawan di bibir dan mulut', score: 2 },
  {
    text: 'Telapak tangan dan kaki sering terasa panas atau dingin ',
    score: 2,
  },
]
var totalScore = 0
var questionIndex = 0

const questionSection = document.getElementById('question-section')
const scoreSection = document.getElementById('score-section')
const question = document.getElementById('question')
const btnYa = document.getElementById('btn-1')
const btnTidak = document.getElementById('btn-0')
const btnReset = document.getElementById('btn-reset')
const scoreDisplay = document.getElementById('score')

btnYa.addEventListener('click', function () {
  btnClick(1)
})
btnTidak.addEventListener('click', function () {
  btnClick(0)
})
btnReset.addEventListener('click', function () {
  resetTest()
})

function showQuestion() {
  question.innerText = questionList[questionIndex].text
}

function toggleTestDisplay(showQuestion) {
  if (showQuestion) {
    questionSection.style.display = 'block'
    scoreSection.style.display = 'none'
  } else {
    scoreSection.style.display = 'block'
    questionSection.style.display = 'none'
  }
}

function showScore() {
  const gejala =
    totalScore >= 41 ? 'Berat' : totalScore >= 25 ? 'Sedang' : 'Ringan'
  scoreDisplay.innerHTML = `Score anda = ${totalScore}<br>Gejala ${gejala}`
}

function btnClick(value) {
  if (questionIndex === questionList.length) {
    alert(totalScore)
    showScore()
    toggleTestDisplay(false)
  } else {
    totalScore = value
      ? totalScore + questionList[questionIndex].score
      : totalScore
    showQuestion()
    questionIndex++
  }
}

function resetTest() {
  totalScore = 0
  questionIndex = 0
  toggleTestDisplay(true)
}

function loadCSS(id, url) {
  if (!document.getElementById(id)) {
    let head = document.getElementsByTagName('head')[0]
    let link = document.createElement('link')
    link.id = id
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = url
    link.media = 'all'
    head.appendChild(link)
  }
}
toggleTestDisplay(true)
showQuestion()
