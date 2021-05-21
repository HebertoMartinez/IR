function calculo(){
    var salario_base = document.getElementById('salario_base').value;
    var inss = 0.07;
    var ir;
    var montoinns = salario_base * inss;
    

    if (salario_base<=100000) {
        ir = 0;        
    } else if (salario_base>100000) {
        ir = 0.15;
    } else if (salario_base>200000){
        ir = 0.20;
    } else if (salario_base>350000){
        ir = 0.25;
    } else if (salario_base<500000){
        ir = 0.30;
    }
    /*switch (salario_base) {
        case salario_base <=10000:
            ir = 0;
            break;
        case salario_base > 500000:
                ir = 0.30;
            break;
        case salario_base >350000:
                ir = 0.25;
            break;
        case salario_base >200000:
                ir = 0.20;
                break;
        case salario_base > 10000:
            ir = 0.15;
            break;
    }
    */
     var montoir = salario_base * ir;
     var salario_neto = salario_base - montoinns - montoir;
    document.getElementById('inss').value = montoinns;
    document.getElementById('ir').value = montoir;
    document.getElementById('salario_neto').value = salario_neto;

}