const form = document.querySelector("form")
const email = form.querySelector("input")
const message = form.querySelector(".form__message")
// console.log(form,email)
email.addEventListener("invalid", (event) => {
    event.preventDefault()
    message.classList.remove("show")

    message.textContent = "Please enter a valid message"
    email.classList.add("invalid")
    console.log(event)
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Frontend Stuff
    email.classList.remove("invalid")
    message.textContent = "Thank you for subscribing to the updates. See you soon!"
    message.classList.add("show")


    // Backend Stuff
    // Post the data in server or something
})