
const dataCasamento = new Date("2025-08-01T00:00:00").getTime();
const contador = document.getElementById("contador");
function atualizarContador() {
    const agora = new Date().getTime();
    const distancia = dataCasamento - agora;
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}
setInterval(atualizarContador, 1000);
atualizarContador();
