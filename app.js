// variables
let billAmount = 0
let tipAmount = 0 
let nrPeople = 0

// total and tip values
let total = document.querySelector('#total')
let tip = document.querySelector('#tip')

// inputs
let bill_input = document.querySelector('#bill_input')
let custom_input = document.querySelector('#custom_input')
let nr_people_input = document.querySelector('#nr_people_input')

// buttons
let fivePercent = document.querySelector('#fivePercent')
let tenPercent = document.querySelector('#tenPercent')
let fifteenPercent = document.querySelector('#fifteenPercent')
let twentyfivePercent = document.querySelector('#twentyfivePercent')
let fiftyPercent = document.querySelector('#fiftyPercent')
let resetButton = document.querySelector('#reset')

// buttons events
fivePercent.addEventListener('click',()=>{
    fivePercent.classList.add('active')
    tenPercent.classList.remove('active')
    fifteenPercent.classList.remove('active')
    twentyfivePercent.classList.remove('active')
    fiftyPercent.classList.remove('active')

    nrPeople = parseInt(nr_people_input.value)
    tipAmount = (billAmount * (5/100)).toFixed(2)
    billAmount = parseFloat(bill_input.value).toFixed(2)
    
    calculate()

})

tenPercent.addEventListener('click',()=>{
    fivePercent.classList.remove('active')
    tenPercent.classList.add('active')
    fifteenPercent.classList.remove('active')
    twentyfivePercent.classList.remove('active')
    fiftyPercent.classList.remove('active')

    nrPeople = parseInt(nr_people_input.value)
    tipAmount = (billAmount * (10/100)).toFixed(2)
    billAmount = parseFloat(bill_input.value).toFixed(2)
    
    calculate()
})

fifteenPercent.addEventListener('click',()=>{
    fivePercent.classList.remove('active')
    tenPercent.classList.remove('active')
    fifteenPercent.classList.add('active')
    twentyfivePercent.classList.remove('active')
    fiftyPercent.classList.remove('active')

    nrPeople = parseInt(nr_people_input.value)
    tipAmount = (billAmount * (15/100)).toFixed(2)
    billAmount = parseFloat(bill_input.value).toFixed(2)
    
    calculate()
})

twentyfivePercent.addEventListener('click',()=>{
    fivePercent.classList.remove('active')
    tenPercent.classList.remove('active')
    fifteenPercent.classList.remove('active')
    twentyfivePercent.classList.add('active')
    fiftyPercent.classList.remove('active')

    nrPeople = parseInt(nr_people_input.value)
    tipAmount = (billAmount * (25/100)).toFixed(2)
    billAmount = parseFloat(bill_input.value).toFixed(2)
    
    calculate()
})

fiftyPercent.addEventListener('click',()=>{
    fivePercent.classList.remove('active')
    tenPercent.classList.remove('active')
    fifteenPercent.classList.remove('active')
    twentyfivePercent.classList.remove('active')
    fiftyPercent.classList.add('active')

    nrPeople = parseInt(nr_people_input.value)
    tipAmount = (billAmount * (50/100)).toFixed(2)
    billAmount = parseFloat(bill_input.value).toFixed(2)
    
    calculate()
})

resetButton.addEventListener('click',()=>{
    bill_input.value = 0
    nr_people_input.value = 0
    custom_input.value = 'Custom'
    total.innerHTML = '$0'
    tip.innerHTML = '$0'
})

// input events
bill_input.addEventListener('input', ()=>{
    if ( bill_input.value < 0 ){
        window.alert('Bill value cannot be negative')
        bill_input.value = 0
    }

    nrPeople = parseInt(nr_people_input.value)
    tipAmount = (billAmount * (custom_input.value/100)).toFixed(2)
    billAmount = parseFloat(bill_input.value).toFixed(2)
    
    calculate()
})

custom_input.addEventListener('input', ()=>{

    nrPeople = parseInt(nr_people_input.value)
    tipAmount = (billAmount * (custom_input.value/100)).toFixed(2)
    billAmount = parseFloat(bill_input.value).toFixed(2)

    calculate()
})

nr_people_input.addEventListener('input', ()=>{
    if ( nr_people_input.value < 0 ){
        window.alert('Number of people cannot be negative')
        nr_people_input.value = 0
    }

    nrPeople = parseInt(nr_people_input.value)
    tipAmount = (billAmount * (custom_input.value/100)).toFixed(2)
    billAmount = parseFloat(bill_input.value).toFixed(2)

    calculate()
})



// functions 
function calculate(){
    // if number of people is 0 then change total and tip values to 0
    if ( nrPeople == 0 ){
        total.innerHTML = '$0'
        tip.innerHTML = '$0'
    }
    else{
        let billPerPeople = ( billAmount/nrPeople ).toFixed(2)
        let totalAmount = parseFloat(billPerPeople) + parseFloat(tipAmount)
        total.innerHTML = '$' + totalAmount.toFixed(2)
        tip.innerHTML = '$' + tipAmount
    }
}