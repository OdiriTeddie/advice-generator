const button = document.querySelector('.advice-button')
const advice = document.querySelector('.advice-main')
const adviceNumber = document.querySelector('.advice-number')
const adviceWrapper = document.querySelector('.advice-wrapper')



async function getQuotes() {
    const loader = document.createElement('img')
    loader.setAttribute('src', './images/loader.gif')
    adviceWrapper.prepend(loader)


    advice.textContent = 'loading...'
    const response = await fetch('https://api.adviceslip.com/advice')
    const quotes = await response.json()
    adviceWrapper.removeChild(loader)
    adviceNumber.textContent = `Advice #${quotes.slip.id}`
    advice.textContent = `"${quotes.slip.advice}"`

}




document.addEventListener('DOMContentLoaded', getQuotes)
button.addEventListener('click', getQuotes)


