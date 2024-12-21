let userInput = document.getElementById("userInput")
let homeContent = document.getElementById("homeContent")
let searchInput = document.getElementById("searchInput")
let alretValidation = document.getElementById("alretValidation")


let items = [];



if (localStorage.getItem("allItems") != null) {
    items = JSON.parse(localStorage.getItem("allItems"))
    displayItem()
}

function addItem() {

    if (userInput.value == "") {
        // display alert
        alretValidation.style.display = "block"
    } else {
        alretValidation.style.display = "none"

        items.push(userInput.value)
        userInput.value = ""
        displayItem()

        localStorage.setItem("allItems", JSON.stringify(items))
    }
}

function displayItem() {
    let cartona = ``
    items.forEach((item, ind) => {
        cartona += `<div
          class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
          <p id="item" class="m-0 p-0">${item}</p>
          <i class="fa-sharp fa-solid fa-trash" onClick="deleteItem(${ind})"></i>
        </div>`
    })

    homeContent.innerHTML = cartona
}


function deleteItem(index) {

    items.splice(index, 1)
    localStorage.setItem("allItems", JSON.stringify(items))
    displayItem()
}


searchInput.addEventListener("input", (event) => {

    searchItems(event.target.value)

})

function searchItems(value) {
    let cartona = ``
    items.forEach((item, ind) => {
        if (item.toLowerCase().includes(value.toLowerCase())) {
            cartona += `<div
              class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
              <p id="item" class="m-0 p-0">${item.toLowerCase().replace(value, `<span class="text-white fw-bolder">${value}</span>`)}</p>
              <i class="fa-sharp fa-solid fa-trash" onClick="deleteItem(${ind})"></i>
            </div>`
        }
    })

    homeContent.innerHTML = cartona
}