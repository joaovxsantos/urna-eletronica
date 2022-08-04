let section = document.getElementById("sec1")
let input = document.getElementById("ipt")
let submit = document.getElementById("submit")
let nulo = document.getElementById("nulo")

function numbers(e) {
    input.value += num[e.target.id]
}


let num = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]

let names = [
    "Ciro Gomes",
    "Luis Inácio 'LULA' da Silva",
    "Jair Bolsonaro",
    "Obrigado por usar a urna eletrônica!",

]

function enviar() {

    let img = document.getElementsByTagName("img")[0]
    let img2 = document.getElementsByTagName("img")[1]
    let h2 = document.getElementById("result")
    let p = document.getElementsByTagName("p")[0]

    img2.setAttribute("src", "./images/github.png")
    p.innerHTML = names[3]

    if (input.value == 00) {
        console.log("aa")
    }


    if (input.value == 12) {

        img.setAttribute("src", "./images/ciro.jpg")
        h2.innerHTML = names[0]

    }

    if (input.value == 13) {
        img.setAttribute("src", "./images/lula.jpg")
        h2.innerHTML = names[1]

    }

    if (input.value == 17) {
        img.setAttribute("src", "./images/bolsonaro.jpg")
        h2.innerHTML = names[2]
    }
}




section.addEventListener("click", numbers)
submit.addEventListener("click", enviar)

