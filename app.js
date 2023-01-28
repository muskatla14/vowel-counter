const input = document.querySelector('input');
const btn = document.querySelector('.btn');


btn.addEventListener('click', checkVowels)

function checkVowels() {
    const inputValue = input.value;
    const inputArr = inputValue.split('');
    let num = 0;
    inputArr.forEach(word => {
        if(word === 'a' || word === 'e' ||  word === 'i' || word === 'o' || word === 'u') {
            return num++;
        }
    })
    alert(`There are ${num} vowels`);
    input.value = '';
}