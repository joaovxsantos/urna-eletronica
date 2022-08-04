let botoesn = document.getElementsByTagName("li")[0]
let bottom2 = document.getElementsByTagName("li")[1]
let a = 0
let input = document.getElementById("ipt")



function teste(){
  input.value =  botoesn.value
  
  console.log(input.value)
}

function teste2(){
    input.value += bottom2.value
}




botoesn.addEventListener("click", teste)
bottom2.addEventListener("click", teste2)