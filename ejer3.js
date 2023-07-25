let array = [5, 10, 12, -1, 3, 24]
let mayor =array[0]
for (i=1; i<array.length; i++){
    if (array[i]>mayor){
        mayor=array[i]
    }
   
}
console.log("El número mayor es: "+ mayor)