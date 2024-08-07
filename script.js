console.log("Hello World!!");

// function add(a,b) {
//     console.log(a+b);
// }

// function sub(a,b) {
//     console.log(a-b);
    
// }

// add(1,2)
// add(4,2)
// sub(2,9)
// sub(7,9)

// function arithmetic(a,b) {
//     console.log("a = ",a,",b = ",b)
//     console.log("Addition :",a+b)
//     console.log("Subtraction :",a-b)
//     console.log("division :",a/b)
//     console.log("multiplication :",a*b)
//     console.log("Modulus :",a%b)
// }

// arithmetic(4,7)

// function arithmetic(a,b) {
//     return [a+b,a-b,a/b,a*b,a%b]
// }

// console.log(arithmetic(10,20) )

// function arithmetic1(a,b) {
//     return {
//         addition:a+b,
//         sub:a-b,
//         division:a/b,
//         multiply:a*b,
//         modulus:a%b
//     }
// }

// console.log(arithmetic1(10,30));

/*
// Normal function
var result = []

function even(arr) {
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i]%2===0) {
            result.push(arr[i])
        }
        
    }
    return result
}
console.log(even([1,2,3,4,5,6,7,8,9,10]))
*/

/*
// Annonyomus function
var result = []

a = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i]%2!==0) {
            result.push(arr[i])
        }
        
    }
    return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10]))
*/

// IIFE Function
/*
(function (params) {
    
})()


var result = [];

(function (arr){
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i]%2!==0) {
            result.push(arr[i])
        }
        
    }
    console.log(result)
})([1,2,3,4,5,6,7,8,9,10])

*/

/*
Arrow Function

(param)=>{

}


var result = [];
var even = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        
        if (arr[i]%2!==0) {
            result.push(arr[i])
        }
        
    }
    return result
}
console.log(even([1,2,3,4,5,6,7,8,9,10]));

    */


// HOF higher order function / callback / reduce / filter
// function name(() => {}) {}
//  Median of 2 sorted Arrays