// console.log(a)
//           	var a=10;
// console.log(b)
// 	let b =100;
// console.log(b)
// 	let b =100;

// can not redeclare block scope variable 
// function fun() {
// 	var a =10;
    
// }

// fun()
// console.log(a)
 //refrence error as a is not defind
//  function fun3() {
// 	var a =10;
// 	{
// 		let b=100
        
// 	}
// 	console.log(b)

// }

// fun3()
//unexpexted idetifier b 
// function sample (){
//     for (var i=0; i<=5;i++){
//         setTimeout (() => console.log(i), 1000 );
//     }
//     }
//     sample()
// let promise1=new Promise((resolve,reject)=>{
//     resolve({ msg: 'Successful'})
//     })
//     promise1.then((data)=>{console.log(data)})
//     .catch(err=>{console.log(err.msg) })
    
function a(){
    console.log('Hello World!')



  return function (){



  console.log('Hello People')


    }
}
a()()