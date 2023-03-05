let result = document.querySelector("#result")
let total = document.querySelector("#total")
let numbers = document.querySelectorAll(".btn-success")
let operators = document.querySelectorAll(".btn-primary")
let evaluate = document.querySelector(".btn-warning")
let clearBtn = document.querySelector("#clearAll")
let removeBtn = document.querySelector("#remove")

numbers.forEach( e => {
    e.addEventListener("click", () => {
        result.innerText += e.innerText
    })
})

operators.forEach( e => {
    e.addEventListener("click", () => {
        let len = result.innerText.length
        let lastEl = result.innerText[result.innerText.length - 1]
        if (len == 0) {
            if (e.innerText == "-") {
                result.innerText += e.innerText
            }
        }else{
            if (!isNaN(lastEl)) {
                result.innerText += e.innerText
                if (
                    result.innerText.substring(0, len - 1).includes("+") ||
                    result.innerText.substring(0, len - 1).includes("-") ||
                    result.innerText.substring(0, len - 1).includes("*") ||
                    result.innerText.substring(0, len - 1).includes("/")
                ) {
                    total.innerText = eval(result.innerText.substring(0, len))
                }
            }else{
                result.innerText = result.innerText.substring(0, len - 1) + e.innerText
            }
        }
    })
})

evaluate.addEventListener("click", () => {
    total.innerText = eval(result.innerText)
    result.innerText = total.innerText
    total.innerText = ""
})

clearBtn.addEventListener("click", () => {
    result.innerText = ""
    total.innerText = ""
})

removeBtn.addEventListener("click", () => {
    result.innerText = result.innerText.substring(0, result.innerText.length - 1)
})

