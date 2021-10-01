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

function calcTipSplitter(bill, numberOfPeople, tipPercentage)
{
    let tipPerPerson = (bill * tipPercentage) / numberOfPeople;
    let totalPerPerson = (bill / numberOfPeople ) + tipPerPerson;
    console.log(tipPerPerson);
    console.log(totalPerPerson);
}

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
const tipPercentage = document.querySelectorAll("tip-percent-btn custom-btn");


tipPercentage.addEventListener("onclick", function(tipPercentage)
{
    const tipVal = parseFloat(tipPercentage.innerText);
});


console.log(bill);
bill.addEventListener("change", function(bill)
{
    const billVal = parseFloat(bill.value);
    console.log(billVal);

});

const numberOfPeople = document.getElementById("people-input");
console.log(numberOfPeople);

numberOfPeople.addEventListener("change", function(numberOfPeople)
{
    const peopleVal = parseInt(numberOfPeople.innerText);
    console.log(peopleVal);
});

document.querySelector("tip-calclation").querySelector("calc-display").innerText = tipPerPerson(bill, numPeople, .5);
document.querySelector("total-calclation").querySelector("calc-display").innerText = totalPerPerson(bill, numPeople, .5);