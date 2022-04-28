const ConPassword = document.getElementById('ConPassword')
const Password = document.getElementById('password')
const btn = document.getElementById('btn')
const match = document.getElementById('match')
const match_img = document.getElementById('match_img')
const text_1 = document.getElementById('text_1')
const text_password = document.getElementById('.login__tittle')

btn.addEventListener('click', ()=>{
    ConPassword.classList.add('change_color')
    Password.classList.add('change_color')
    if(ConPassword.value === Password.value){
        match.innerHTML = 'Passwords must match.'
        match.classList.add('space')
    }
    if(ConPassword.value && Password.value && Password.value.length>=8){
        text_1.innerHTML = 'Must have more than 8 characters.'
        text_1.classList.add('space')
    }else{
        text_password.classList.add('red')
    }
})
