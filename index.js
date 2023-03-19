//Calculadora para préstamos de automovil

//Creamos la clase auto
class Auto {
    constructor(id,modelo,costo,tasa){
        this.id = id
        this.modelo = modelo
        this.costo = costo
        this.tasa = tasa
    }
}

// Creamos los objetos
const city = new Auto(1,'City',363900,16)
const civic = new Auto(2,'Civic',545900,14)
const accord = new Auto(3,'Accord',779900,11)
const crv = new Auto(4,'CRV',714900,12)
const pilot = new Auto(5,'Pilot',1029900,9)
const aveo = new Auto(6,'Aveo',255200,16)

let autoSeleccionado = parseInt(prompt('Selecciona el número del automóvil deseado: \n 1) City $363,900 \n 2) Civic $545,900 \n 3) Accord $7799,900 \n 4) CRV $714,900 \n 5) Pilot $1029,900 \n 6) Aveo $255,200'));


//Verificamos el auto
let seleccionoAuto = false

let infodelAuto

while (seleccionoAuto === false) {
    if (autoSeleccionado === 1) {
        seleccionoAuto = true
        infodelAuto = city
    } else if (autoSeleccionado === 2){
        seleccionoAuto = true
        infodelAuto = civic
    } else if (autoSeleccionado === 3){
        seleccionoAuto = true
        infodelAuto = accord
    } else if (autoSeleccionado === 4){
        seleccionoAuto = true
        infodelAuto = crv
    } else if (autoSeleccionado === 5){
        seleccionoAuto = true
        infodelAuto = pilot
    } else if (autoSeleccionado === 6){
        seleccionoAuto = true
        infodelAuto = aveo
    } else {
        autoSeleccionado = parseInt(prompt('Selecciona solo el NÚMERO del automóvil deseado: \n 1) City $363,900 \n 2) Civic $545,900 \n 3) Accord $7799,900 \n 4) CRV $714,900 \n 5) Pilot $1029,900 \n 6) Aveo $255,200'));

    }
    
}

//Preguntamos el enganche en % 
let enganchePorcentaje = parseInt(prompt('Ingresa un número del 1 al 99 representando el porcentaje del enganche \n Ejemplo: 12, 24, 36, 48, 72'))

if (enganchePorcentaje > 99 || enganchePorcentaje < 0) {
    enganchePorcentaje = parseInt(prompt('Ingresa solo un número del 1 al 99 representando el porcentaje del enganche \n Ejemplo: 12, 24, 36, 48, 72'))
}

//Preguntamos las mensualidades en meses
let mensualidades = parseInt(prompt('Ingresa un número del 1 al 99 representando el plazo del pago en meses \n Ejemplo: 12, 24, 36, 48, 72'))

if (mensualidades > 99 || mensualidades < 0) {
    mensualidades = parseInt(prompt('Ingresa solo un número del 1 al 99 representando el plazo del pago en meses'))
}

//convertimos el enganche en cifra porque esta en porcentaje


function enganchefuncion(ePorcentaje,iAuto) {
    const calculoEnganche = (ePorcentaje*iAuto)/100
return calculoEnganche
}

const enganche = enganchefuncion(enganchePorcentaje,infodelAuto.costo)
console.log('Enganche: '+enganche)

//Calculamos el crédito al costo del auto menos el enganche
const credito = infodelAuto.costo-enganche

//Calculamos tasa de interes mensual
const tasaInteresMensual = (infodelAuto.tasa/12)/100

//Calculamos el interes mensual
const interes = credito*tasaInteresMensual
//elevamos la tasadeinteresmensual a N donde N=#mensualidades
const base = 1+tasaInteresMensual;
const exponente = mensualidades;
let r = 1;
let i = 0; 
while(i < exponente){
    r = r * base;
    i++;
}

//La formula dice que a 1 le restamos el resultado de elevar la potencia a la tasa de interes mensual
const t3 = 1-r
//calculamos la amortización con interes menos el resultado anterior
const amortizacion = interes-t3
//calculamos el impuesto del interes en México es del 16%
const impuesto = interes*0.16
//Calculamos la mensualidad sumando: amortización, interes, impuesto usando una funcion

function mensualidadTotal(amortizacion,interes,impuesto) {
    const totalMensual = amortizacion+interes+impuesto
    return totalMensual 
}
// llamamos a la funcion
const total = mensualidadTotal(amortizacion,interes,impuesto)

// Imprimimos resultado de la funcion
 console.log('Mensualidad Total: '+total)

// Mostramos al cliente la mensualidad total a pagar
alert(`El automóvil seleccionado es: ${infodelAuto.modelo} \n Tú mensualidad seria: ${total.toFixed(2)} MXN por ${mensualidades} mensualidades`)


