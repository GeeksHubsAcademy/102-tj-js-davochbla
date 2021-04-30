function numPrimo(input) {

    if(input == 1){
        return -1;
    }else {
       
    let Resultado = [];
    
    const esPrimo = (numero) => {
    
        for(let x = 2; x < numero; x++){
            if( numero % x === 0){
    
                return false;
    
            };
        };
    
        return numero;
    };
    
    
        for (let i = 2; i <= input; i++){
            if(esPrimo(i)){
                Resultado.push(i);
            }
        };
        
        return Resultado;
    };
    
}

module.exports = numPrimo;
