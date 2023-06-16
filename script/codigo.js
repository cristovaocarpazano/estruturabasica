const botao = document.getElementById('botao');
const nome = document.getElementById('entrada');

let setNome = '';

botao.onclick = () => {
    setNome = nome.value;
    alert('O nome digitado foi ' + setNome);
}