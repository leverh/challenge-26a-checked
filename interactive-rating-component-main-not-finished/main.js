const mainContainer = document.querySelector(".container")
const thanksContainer = document.querySelector(".reply-container")
const submitButton = document.getElementById("submit-rating")
const rateAgain = document.getElementById("rate-again")
const ratings = document.querySelectorAll('.button')
const actualRating = document.getElementById("rating")

var selectedRating = 0

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none"
    thanksContainer.classList.remove("hidden")
  })
  
  rateAgain.addEventListener("click", () => {
    mainContainer.style.display = "block"
    thanksContainer.classList.add("hidden")


    selectedRating = 0 
    submitButton.classList.add("green")
    submitButton.disabled = true

    renderButtons()
  })


function toggleRating(rating) {
  selectedRating = rating
  actualRating.innerHTML = selectedRating
  submitButton.classList.remove("green")
  submitButton.disabled = false

  renderButtons()
}

function renderButtons() {
  for(let i = 1; i <= 5; i++) {
    if(i == selectedRating){
      document.getElementById("btn-"+ i).classList.add("selected-button")
    } else {
      document.getElementById("btn-"+ i).classList.remove("selected-button")
    }
  }
}