function calculator() {
    let bucleCalculadora = true;
    
    while (bucleCalculadora) {
        const num1 = parseFloat(prompt("Ingrese el primer número:"));
        const operator = prompt("Ingrese el operador (+, -, *, /):");
        const num2 = parseFloat(prompt("Ingrese el segundo número:"));

        let result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                console.log("Operador no válido");
                continue;
        }

        console.log(`El resultado de ${num1} ${operator} ${num2} es: ${result}`);
        bucleCalculadora = confirm("¿Desea realizar otro cálculo?");
    }
    console.log("GRACIAS POR USAR MI CALCULADORA <3");
}

calculator();
