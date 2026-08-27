document.addEventListener('DOMContentLoaded', () => {
    let total = 0;
    const totalElemento = document.getElementById('total-carrito');
    const tarjetas = document.querySelectorAll('.tarjeta-producto');

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            const precio = parseFloat(tarjeta.getAttribute('data-precio'));
            total += precio;
            totalElemento.textContent = total.toLocaleString('es-MX');
        });
    });
});