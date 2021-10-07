/* Splitter Tip-Calculator

Goal:
- Calculate the tip amount and total per person

Input: 
- billAmount, tipPercentage, numberPeople

Output:
- tipAmount per person and totalPerPerson

Questions:
- How do we spread the bill of 30 amongst 15 people?
- How do I access the user's input?
- How to catch if the user entered the wrong input?
- How do you determine which tip is selected?
- How to calculate the total per person?
- What kind of variables might we use to store info?
- Bill, percentage, totalTip, numberOfPeople
- How to reset?

## Logic:

functions():
- calcTipSplitter(bill, numberOfPeople, tipPercentage)
{
    let tipPerPerson = (bill * tipPercentage) / numberOfPeople;
    let totalPerPerson = (bill / numberOfPeople) + totalTip;
}

const billInput = document.getElementById("bill");
billInput.addEventListener("change", function()
{
    const bill = billInput.value;
    calcTipSplitter(bill, 15, .5)
});

PSUEDOCODE
-When/if the user presses enter on the bill input, the bill amount 
variable becomes equal to the input, and then the "cursor"
should focus onto the tip % buttons.

-When the tip % is selected, the tip percentage variable within the
javascript becomes equal to the selected percent.

-When the # of people is entered, the variable becomes equal to the input.

-After the information is entered, the tip amount/person and the total/person are displayed.

-When the reset button is selected, the fields and variables are reset.

.addEventListener("onclick", function()
{
    .innerHTML = ;
})

.addEventListener("onclick", function()
{

});*/

function getVal(element)
{
    return document.querySelector(element.value);
}

// function calcTipSplitter(bill, numberOfPeople, tipPercentage)
// {
//     let tipPerPerson = parseFloat((bill * tipPercentage) / numberOfPeople);
//     let totalPerPerson = parseFloat((bill / numberOfPeople ) + tipPerPerson);
//     if (!isFinite())
//     {
//         document.querySelector(".tip-calculation").querySelector(".calc-display").innerText = "$0.00";
//         document.querySelector(".total-calculation").querySelector(".calc-display").innerText = "$0.00";
//     }
//     console.log(tipPerPerson.toFixed(2));
//     console.log(totalPerPerson.toFixed(2));
// }

function tipPerPerson(bill, numberOfPeople, tipPercentage)
{
    return (bill * tipPercentage) / numberOfPeople;
}

function totalPerPerson(bill, numberOfPeople, tipPercentage)
{
    return (bill / numberOfPeople ) + tipPerPerson(bill, numberOfPeople, tipPercentage);
}

const bill = document.getElementById("bill-input");
const numPeople = document.getElementById("people-input");

bill.addEventListener("change", function()
{
    document.querySelector(".tip-calculation").querySelector(".calc-display").innerText = "$0.00";
    document.querySelector(".total-calculation").querySelector(".calc-display").innerText = "$0.00";

    const billVal = parseFloat(bill.value);
    
    console.log("bill input: ", billVal);
});

numPeople.addEventListener("change", function()
{

    const peopleVal = parseFloat(numPeople.value);
    console.log("people input: ", peopleVal);
});

let buttons = document.querySelectorAll(".tipPerBtn");

buttons.forEach((button) => 
{
    button.addEventListener("click", function()
    {
        let tipPercent = button.dataset.num / 100;
        
        document.querySelector(".tip-calculation").querySelector(".calc-display").innerHTML = "$" + parseFloat(tipPerPerson(bill.value, numPeople.value, tipPercent)).toFixed(2);
        document.querySelector(".total-calculation").querySelector(".calc-display").innerHTML = "$" + parseFloat(totalPerPerson(bill.value, numPeople.value, tipPercent)).toFixed(2);
    }
)});

const custom = document.querySelector(".cusButton");

custom.addEventListener("change", function()
    {
        let tipPercent = custom.value / 100;
        console.log(tipPercent);
        const val = parseFloat(custom.value);
        document.querySelector(".tip-calculation").querySelector(".calc-display").innerHTML = "$" + parseFloat(tipPerPerson(bill.value, numPeople.value, tipPercent)).toFixed(2);
        document.querySelector(".total-calculation").querySelector(".calc-display").innerHTML = "$" + parseFloat(totalPerPerson(bill.value, numPeople.value, tipPercent)).toFixed(2);
    }
);

const reset = document.querySelector(".reset-btn");

reset.addEventListener("click", function()
{
    let tipPercent = 0;
    document.querySelector(".tip-calculation").querySelector(".calc-display").innerHTML = "$" + parseFloat(tipPerPerson(bill.value, numPeople.value, tipPercent)).toFixed(2);
    document.querySelector(".total-calculation").querySelector(".calc-display").innerHTML = "$" + parseFloat(totalPerPerson(bill.value, numPeople.value, tipPercent)).toFixed(2);
    console.log("$" + parseFloat(tipPerPerson(bill.value, numPeople.value, tipPercent)).toFixed(2))

});