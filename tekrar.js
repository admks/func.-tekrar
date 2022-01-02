// // let switchVar=5

// // if (!switchVar) {
// // }else if (switchVar) {
    
// //     console.log("5'e eşit")
// // }


// //     const arrowFun =switchVar => switchVar*2
// // console.log (arrowFun(5))

// let arr=[6 , "7" , {} , [6 , "1"] , true , ]
// // console.log(arr[3])

// // let x= [0 , 1 , 2 , 3 ,4 ]
// // let sliceMethod =x.splice(0,2)
// // console.log(sliceMethod)

// // let filteredArr = arr.filter((item)=>{

// // return item>3;

// // })
// // console.log(filteredArr)

// // let newArr=[]
// // arr.filter(item => {
// //     if (item>3 ) {
// //         newArr.push(item)
        
// //     }
     
// // })
// // console.log(newArr)
// let array=[6 , "7" , {} , [6 , "1"] , true , ]
// let tree="";
// for (let i = 0; i < array.length; i++) {
//     tree  += array[i];
//     console.log(tree)
    
// }

// for (i in array) {
//     console.log(i)
    
  
// }
// for (item of array) {
//     console.log(item)
    
// }

// function findNeedle(arr) {
                    
// }

var haystack_1 = ['3', '123124234', undefined, 'needle', NaN, 'world', "nee", 'hay', 2, '3', true, false];
var haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'nedle', 'something somebody lost a while ago'];
var haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];

function findNeedle(arr) {
let ifFind = arr.find((item) => item === "needle")
let indexNum= arr.indexOf(ifFind)
// let ind = arr.findIndex((item) => item === "needle")
// console.log(ind)
console.log(`Bu array'de ${ifFind} var. index numarası da ${indexNum}`)

    
}
findNeedle(haystack_1);

function findNee(arr,value) {
    
    for(let i=0; i < arr.length; i++){
        if (typeof arr[i] === "string") {
            // console.log(arr[i])
           if ( arr[i].includes(value)){
            return (`Bu array'de ${value} kelimesi index numarası ${i} de var.`)
           } else{
               return "yoktur"
           }
        }
        
    }
}
console.log(findNee(haystack_3,"nee"))




function filterword(arr,value) {
    let result = [];
    for(let i=0; i < arr.length; i++){
        if (typeof arr[i] === "string") {
            // console.log(arr[i])
           if ( arr[i].includes(value)){
            result.push(`${value}`)
           }         
        }
      
    }
    return result;
}
console.log(filterword(haystack_1,"nee"))

