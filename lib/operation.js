const operation = ({num1, num2, operacion}) => {

    const ERROR = {
        error: {
            num1: {
                valor: num1 || null,
                tipo: typeof num1
            },
            num2: {
                valor: num2 || null,
                tipo: typeof num2
            },
            operacion: {
                valor: operacion || null,
                tipo: typeof operacion
            }
        }
    }

    // I've used parseFloat() instead Number(), because I consider an empty string as NaN
    const x = parseFloat(num1), y = parseFloat(num2);
    if(isNaN(x) || isNaN(y)) return ERROR;

    let resultado = null;
    switch(operacion){
        case 'suma': resultado = x + y; break;
        case 'resta': resultado = x - y; break;
        case 'multiplicacion': resultado = x * y; break;
        case 'division': resultado = x / y; break;
        default: return ERROR;
    }
    return {num1, num2, operacion, resultado};
}

export default operation;