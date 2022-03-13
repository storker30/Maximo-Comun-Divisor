var num1,num2,residuo,MCD;
document.write("<h2>Maximo Comun Divisor</h2>");
var a= prompt("Ingresa el primer numero entero");
var b= prompt("Ingresa el segundo numero entero");

    if(a>b){
        num1=a;
        num2=b;
    }

    if(b>a){
        num1=b;
        num2=a;
    }

    if(a==b){
        document.write("El Maximo Comun Divisor es: "+a);
    }
    else{


do {
    residuo=num1%num2;
    num1=num2;
    num2=residuo;
} while (residuo>0);
    }
document.write("El MCD es: "+num1);