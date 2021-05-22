// let instructionsNode = document.getElementById('instructions');
// console.log(instructionsNode)

let instructions = document.querySelector('#instructions')
instructions.innerText = 'Choose a theme:';
instructions.className = 'new-class'
console.log(instructions)

let fbButton = document.querySelector('.facebook-btn')
fbButton.classList.add("pizza-cat")
fbButton.style.color = 'green'
console.log(fbButton.classList)
console.log(fbButton.className)
console.log(fbButton)

// let buttons = document.querySelectorAll('button')
// console.log(buttons)

// let buttonsByTagName = document.getElementsByTagName('button')
// console.log(buttonsByTagName)

// function submit(){
//     alert('Post has been submitted!');
// }

// let submitBtn = document.querySelector('.submit-btn');
// submitBtn.addEventListener('click', submit);
// submitBtn.addEventListener('mouseover', submit);
// submitBtn.addEventListener('mouseout', submit);

// Create variable to store the input value
// let inputValue = '';
// // Add the event and function to handle the event
// document.getElementById('myInput')
// .addEventListener('change', function(e){
//     inputValue = e.target.value
//     console.log(inputValue);
// });

document.querySelector('header')
.addEventListener('click', () => alert('clicked the header'))

fbButton
.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('clicked the facebook button')
})

// let myDiv = document.createElement('div');
// // let ourText = document.createTextNode('My div text');
// myDiv.innerText = 'My div text'
// // myDiv.appendChild(ourText);
// console.log(myDiv);

// document.querySelector('main').appendChild(myDiv);
// myDiv.remove();