function KtoC() {
    let k, c
    k=Number(document.formtermometer.kelvin1.value);
    c = k - 273.15;
    document.formtermometer.celcius.value=c;
}

function KtoF() {
    let k, f
    k=Number(document.formtermometer.kelvin2.value);
    f = (k - 273.15)*(9/5)+32;
    document.formtermometer.fahrenheit.value=f;
}