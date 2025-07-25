function inserirDisplay(data) {
     const display = document.querySelector('#calc');
    
    if (display.value === 'Error') {
        display.value = data; // Substitui o "Error" pelo novo dado
    } else {
        display.value += data; // Adiciona o dado normalmente
    }
}

function limparTudo() {  // botão C
    document.querySelector('#calc').value = ''
}

function voltar() {   // botão <
    const display = document.querySelector('#calc')
    if(display.value == 'Error') {
        display.value = ''
    } else {
    display.value = display.value.slice(0, -1)  // slice apaga o ultimo valor
    }
}

function resultado() {  // botão =
    const display = document.querySelector('#calc')
    if (display.value == 0){
        display.value = ''
    } else if (display.value == 'Error'){
        display.value = 'Error'
    } else {
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'Error'
    }
 }  // Usando try - catch /  eval: calcula automaticamente + - * /
}