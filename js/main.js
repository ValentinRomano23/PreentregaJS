function calculoPromedio() {
    let notaUno = parseInt (prompt("Nota primer trimestre"));
    let notaDos = parseInt (prompt("Nota segundo trimestre"));
    let notaTres = parseInt (prompt("Nota Tercer trimestre"))
  
    const notaFinal = (notaUno + notaDos + notaTres) / 3;
  
    return notaFinal;
  }
  let respuesta;
  
//promedio//
do {
    const promedio = calculoPromedio();

if(promedio>=0 && promedio<=10){
    console.log ("Estas Desaprobado")

}else if (promedio>=10 && promedio<=20){
    console.log ("Estas Aprobado")
}
else [
    alert("Ingresaste mal las notas")
]

respuesta = prompt("¿Desea sacar otro promedio? (si/no)");
} while (respuesta === "si");
