let array = [25, 30, 28, 32, 29, 27]
let mayor =array[0]
for (i=0; i<array.length; i++){
    if (array[i]>mayor){
        mayor=array[i]
    }
   
}
console.log("El número mayor es: "+ mayor)