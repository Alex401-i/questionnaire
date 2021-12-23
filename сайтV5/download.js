

function downloadData(){
    console.log("ASDFASDFASDFD")

    const fioInput = document.getElementById("name-6871")
    const groupInput = document.getElementById("text-a7d1")
    const emailInput = document.getElementById("text-3b89")
    const phoneInput = document.getElementById("text-d8f7")
    
    const question1 = document.getElementById("question1").innerText
    let selectionValue1
    document.querySelectorAll("input[name='optionsRadios']").forEach(elem=>{if (elem.checked) selectionValue1=elem.value})
	
	const question2 = document.getElementById("question2").innerText
    let selectionValue2
    document.querySelectorAll("input[name='optionsRadios0']").forEach(elem=>{if (elem.checked) selectionValue2=elem.value})
	
    const data = [
        {
            name: "fio",
            value: fioInput.value
        }, {
            name: "group",
            value: groupInput.value
        }, {
            name: "email",
            value: emailInput.value
        }, {
            name: "phone",
            value: phoneInput.value
        }, {
            name: "question1",
            value: selectionValue1
        }, {
            name: "question2",
            value: selectionValue2
        }
    ]

    const textData = JSON.stringify(data)

    downloadAsFile(textData)
}

function downloadAsFile(data){
    const a = document.createElement("a")
    const file = new Blob([data], {type: "application/json"})
    a.href = URL.createObjectURL(file)
    a.download = "example.txt"
    a.click()
}