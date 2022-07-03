const input = document.querySelector("input")
const btn = document.querySelector("button")
const output = document.querySelector("div")

btn.addEventListener('click', function() {
output.innerHTML = input.value.toUpperCase() 
if (input.value === "") 
alert("Please enter text")
})

