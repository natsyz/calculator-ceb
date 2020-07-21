// Deklarasi konstanta berisikan element di HTML
const calculatorScreen = document.querySelector('.calculator-screen')
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector('.equal-sign')
const clearBtn = document.querySelector('.all-clear')
const decimal = document.querySelector('.decimal')
const percentage = document.querySelector('.percentage')

// Deklarasi variabel untuk operasi kalkulator
let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

// Fungsi untuk memperbaharui nilai pada layar
const updateScreen = (number) => {
    calculatorScreen.value = number
}

// Fungsi untuk mengubah nilai currentNumber
const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// Fungsi untuk mengubah nilai operator
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

// Fungsi untuk menambahkan desimal pada currentNumber
const inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

// Fungsi untuk menghitung persentase
const inputPercentage = () => {
    currentNumber /= 100
}

// Fungsi untuk menghitung operasi dua buah bilangan
const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

// Fungsi untuk menghapus isi layar tampilan
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

// Operasi ketika .number ditekan
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

// Operasi ketika .operator ditekan
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

// Operasi ketika .equal-sign ditekan
equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

// Operasi ketika .all-clear ditekan
clearBtn.addEventListener("click", () => {
    clearAll()
    updateScreen(currentNumber)
})

// Operasi ketika .decimal ditekan
decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

// Operasi ketika .percentage ditekan
percentage.addEventListener("click", () => {
    inputPercentage()
    updateScreen(currentNumber)
})