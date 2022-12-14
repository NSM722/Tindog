/** Dogs array data import */
import dogsData from './data.js';

/** Dog Class Import */
import Dog from './Dog.js';


/**
 * HTML elements
 */
const acceptBtn = document.getElementById('btn-accept')
const rejectBtn = document.getElementById('btn-reject')
const likeBadge = document.getElementById('like-badge')
const nopeBadge = document.getElementById('nope-badge')


let currentDogIndex = 0
let currentDog = new Dog(dogsData[currentDogIndex])

/**
 * Click Event listeners
 */
acceptBtn.addEventListener('click', dogLiked)
rejectBtn.addEventListener('click', dogNotLiked)

renderDogHtml()

function renderDogHtml() {
    document.getElementById('wrapper').innerHTML = currentDog.getDogHtml()
}

function getNextDog() {
    if (currentDogIndex === (dogsData.length - 1)) {
        currentDogIndex = 0
    } else {
        currentDogIndex++
    }
    currentDog = new Dog(dogsData[currentDogIndex])
    renderDogHtml()
}

function dogLiked() {
    currentDog.setMatchStatus(true)
    likeBadge.style.display = "inline"
    setTimeout(() => {
        likeBadge.style.display = "none"
        getNextDog()

    }, 1500)
}

function dogNotLiked() {
    currentDog.setMatchStatus(false)
    nopeBadge.style.display = "inline"
    setTimeout(() => {
        nopeBadge.style.display = "none"
        getNextDog()

    }, 1500)
}