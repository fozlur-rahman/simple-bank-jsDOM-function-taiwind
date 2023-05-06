document.getElementById("submit-btn").addEventListener('click', function(){
    const inputEmail = document.getElementById('input-email');
    const emailText = inputEmail.value;
    const inputPass = document.getElementById('input-pass');
    const passText = inputPass.value;

    if(emailText == 'abc@gmail.com' && passText == '1234'){
    window.location.href = 'bnak.html';
    }

    inputEmail.value = '';
    inputPass.value = '';
})