function FindNeedle (haystack, needle) {
  // Your code here:

}

module.exports = FindNeedle








//                  0123456789   01234
//                  o-ed redux   redux    // -> 6
//                  elem 10      elem 5
// function FindNeedle(haystack, needle) {
//   // Your code here:
//   let firstLetter = needle[0]; // "r"
//   let sizeNeedle = needle.length; // 5
​
//   for (let index = 0; index < haystack.length; index++) {
//     //                                     5               9 - 5 = 4
//     if (firstLetter === haystack[index] && sizeNeedle <= haystack.length - index) {
//       // optimizando el code && sizeNeedle <= haystack.length - index
//       for (let j = 1; j < sizeNeedle; j++) {
//         // "d" !== "d"
//         if (needle[j] !== haystack[index + j]) { //
//           break; // corta la escalada del for j
//         }
//         if (sizeNeedle - 1 === j) {
//           return index;
//         }
//       }
//     }
//   }

//   return -1;
// }
// O (n2)
//--------------------------------------------------------------------------------------------
// O (n)
// *function FindNeedle(haystack, needle) {
//   let firstLetter = needle[0]; // "r"
//   let sizeNeedle = needle.length; // 5
//   for (let index = 0; index < haystack.length; index++) {
//     if (
//       firstLetter === haystack[index] &&
//       sizeNeedle <= haystack.length - index
//     ) {
//       // 012345
//       // o-ed redux   redux <- 5
//       if (haystack.slice(index, index + sizeNeedle) === needle) {
//         return index;
//       }
//     }
//   }
//   return -1;
// }
// console.log(FindNeedle("o-ed redux", "redux"));








/*
STEPS
1. Leer consigna
2. Determinar bien la entrada y la salida
3. Remarcar que NO se puede usar
4. Refelexión previa del problema y cual puede ser la posible solución
5. Hacer preguntas -> a) se deben identificar la diferencia entre mayúscula y minúscula
                   -> b) es posible usar findindex
                   -> c) puedo consultar a chatgpt  NO
                   -> d) puedo consultar con google NO
                   -> e) puedo consultar con mis apuntes NO
6. De no entender volver desde el paso 1
7. Desarrollar nuestro code -> pseudo-code
​
Fuerza bruta <- buscar de manera rápida la solución y ya luego vemos de optimizar, limpiar
​
para tal entrada react-redux   redux 
tenemos str1 para ver si se encuentra dentro de str2
​
str1 = redux
length -> 5
r
​
str2 = react-redux
str2.length
​
r  === str2[i]
str1.length    -> 6
​
retrun -1
     
​
espera -> 6
*/
/*
Ejemplos
Lo encuentra
needle: redux
haystack: react-redux
output: 6
No lo encuentra
needle: puntual
haystack: pinky
output: -1 <-
​
no se pueden utilizar los métodos 
indexOf( )react-redux redux -> 6   -1
ni 
arr.includes(str) -> true
*/
