
function iniciarContagemRegressiva() {
  const destino = new Date("2025-08-01T00:00:00").getTime();
  const countdown = document.getElementById("countdown");

  const atualizar = setInterval(() => {
    const agora = new Date().getTime();
    const distancia = destino - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    countdown.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distancia < 0) {
      clearInterval(atualizar);
      countdown.innerHTML = "É hoje!";
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", iniciarContagemRegressiva);
