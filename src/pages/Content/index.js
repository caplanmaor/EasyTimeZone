// import { printLine } from './modules/print';

// console.log('Content script works!');
// console.log('Must reload extension for modifications to take effect.');

// printLine("Using the 'printLine' function from the Print Module");

const text = document.querySelctorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i = 0; i < text.length; i++) {
    if (text[i].innerHTML.includes('utc+2')) {
        text[i].innerHTML = text[i].innerHTML.replace('utc+2', 'users-utc-test')
    }
}