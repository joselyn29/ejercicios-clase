let array = [2, 4, -3, 20, 50, 70, -19, -68, 5, 17]
let cont=0
for (let i= 0; i<array.length; i++){
    if (array[i]>0){
        cont++
    }
}
console.log("Los numeros positivos son: "+ cont)