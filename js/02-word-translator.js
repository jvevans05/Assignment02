//this is a comment

//acquire the input
let lang = prompt('Please enter a language code \(es\) Español, \(en\) English, \(de\) Deutsch, or \(fr\) French.')

//work through the if statement with english as the final check in order to be the default, displayed to the console window
if (lang == 'es') {
    console.log('Hello World translated into Spanish is: ¡Hola Mundo!')
}
else if (lang == 'de') {
    console.log('Hello World translated into German is: Hallo Welt!')
}
else if (lang == 'fr') {
    console.log('Hello World translated into French is: Bonjour le Monde!')
}
else if (lang == 'am') {
    console.log('Hello World translated into American is: Howdy Colonies!')
}
else {
    console.log('Hello World!')
}