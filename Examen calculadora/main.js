function calcular() {
    // Get the number values 
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado;

    // Validate both are numbers 
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa ambos números.");
        return;
    }

    // Do the selected operation 
    switch (operacion) {
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                alert("No se puede dividir por cero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    // Show the result 
    document.getElementById('resultado').textContent = resultado;
}
