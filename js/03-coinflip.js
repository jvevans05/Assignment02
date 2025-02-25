//Acquire random number from zero to one, rounded to either zero or one
let randomNum = Math.round(Math.random())
let coin = 'not yet'

//Acquire bet
let choice = prompt('Enter \'Heads\' or \'Tails\'')
choice = choice.toLowerCase()

//lets say zero is heads and 1 is tails. we could also hard compare randomNum in the later if statments
//but defininge them here is easier for me to understand.
if (randomNum == 0) {
    coin = 'heads'
}
else {
    coin = 'tails'
}

//don't break me
if (choice != 'heads' && choice != 'tails') {
    alert('Please correctly enter \'Heads\' or \'Tails\'')
    //cheeky window close
    window.close()
}
else 
{

//first check if the coin matches the bet. both messages will be wins
if (choice == coin) {
    if (coin == 'heads') {
        alert('The flip was head and you chose heheadads...you WIN!')
    }
    else {
        alert('The flip was tails and you chose tails...you WIN!')
    }
}
//next conditions will be losses
else {
    if (coin == 'heads') {
        alert('The flip was heads and you chose tails...you lose!')
    }
    else {
        alert('The flip was tails and you chose heads...you lose!')
    }
}

}

//for me
console.log(randomNum)
console.log(coin)
console.log(choice)

//I would have rather done this with a switch statement and some &&, but this works.