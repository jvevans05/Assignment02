//collect grade. change to int.
let grade = parseInt(prompt('Please enter your grade from 1 to 100.'))
console.log(typeof(grade))

//check for proper range100
if (grade < 1 || grade > 100) {
alert('Only grades in the range of 1 to 100 are accepted.')
}
else {

//the first applicable condition will be chosen, so we can lower the number checked in the expression instead of checking a range with &&s
switch (true) {
    case grade >= 90:
        console.log('You received an A.')
        break
    case grade >= 80:
        console.log('You received a B.')
        break
    case grade >= 70:
        console.log('You received a C.')
        break
    case grade >= 60:
        console.log('You received a D.')
        break
    default:
        console.log('You received an F T-T.')
}

}