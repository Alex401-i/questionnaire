



const emailInput = document.getElementById("name-6871")
const emailLabel = document.getElementById("label-for-name-6871")

emailInput.oninput = onInput1

function onInput1(){
    const value = emailInput.value

    if (value) emailLabel.style.visibility = "hidden"
    else emailLabel.style.visibility = "visible"

}


onInput1()








const groupInput = document.getElementById("text-a7d1")
const groupLabel = document.getElementById("label-for-text-a7d1")

groupInput.oninput = onInput2

function onInput2(){
    const value = groupInput.value

    if (value) groupLabel.style.visibility = "hidden"
    else groupLabel.style.visibility = "visible"

}


onInput2()
