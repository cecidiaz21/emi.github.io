// Variables globales para llevar un registro de los números ingresados
const numerosIngresados = [];

// Función para agregar un número a la lista
function agregarNumero() {
    const numero = parseInt(document.getElementById('numero').value);
    if (!isNaN(numero)) {
        numerosIngresados.push(numero);
        document.getElementById('numero').value = '';
        if (numerosIngresados.length === 10) {
            calcularResultado();
        }
    }
}

// Función para calcular el número con mayor probabilidad
function calcularResultado() {
    const frecuencias = {};
    for (const numero of numerosIngresados) {
        if (numero in frecuencias) {
            frecuencias[numero] += 1;
        } else {
            frecuencias[numero] = 1;
        }
    }
    const numeroMasFrecuente = Object.keys(frecuencias).reduce((a, b) => frecuencias[a] > frecuencias[b] ? a : b);
    const frecuenciaMasAlta = frecuencias[numeroMasFrecuente];
    document.getElementById('resultado').textContent = `El número con mayor probabilidad de volver a salir es ${numeroMasFrecuente} con ${frecuenciaMasAlta} apariciones.`;
}

document.getElementById('agregar').addEventListener('click', agregarNumero);
