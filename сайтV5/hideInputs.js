

document.querySelectorAll("input[name='optionsRadios0']").forEach(input => input.onclick = onSecondQuestionSelect)


function onSecondQuestionSelect(){
    const selectedInput = [...document.querySelectorAll("input[name='optionsRadios0']")]
        .filter(input=>input.checked)[0]

    const phoneInput = document.getElementById("text-d8f7")
    const emailInput = document.getElementById("text-3b89")

    switch (selectedInput.value){
        case "option3":
            //phoneInput.style.visibility = "visible"
            //emailInput.style.visibility = "visible"
            phoneInput.style.display = "block"
            emailInput.style.display = "block"
            break
        default:
            //phoneInput.style.visibility = "hidden"
            //emailInput.style.visibility = "hidden"
            phoneInput.style.display = "none"
            emailInput.style.display = "none"
    }

}


onSecondQuestionSelect()