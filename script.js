let boxsubmit = document.getElementById("submit")


function primer() {
    let boxnumber = document.getElementById("number")
    let img = document.getElementById("img")
    let label = document.getElementById("label")


    if (boxnumber.value == 12) {
        img.setAttribute("src", "./images/cirozada.jpg")
        label.innerHTML = "Ciro Gomes"

    } else if (boxnumber.value == 13) {
        img.setAttribute("src", "./images/luladrao.jpg")
        label.innerHTML = "Lula"

    } else if (boxnumber.value == 17) {

        img.setAttribute("src", "./images/bolsocorno.jpg")
        label.innerHTML = "Jair Bolsonaro"
    }






}














boxsubmit.addEventListener("click", primer)