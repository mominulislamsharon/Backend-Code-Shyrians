
// var arr = [1, 2, 3, 4, 5];
// 1.-------forEach--------
// arr.forEach(function(val) {
//   console.log(val + "hello")
// })


// 2.-------map--------
// var newarr = arr.map(function(val){
//   return val*3;
// })

// console.log(newarr)

// ---------filter-------------
// var ans = arr.filter(function(val){
//   if(val >= 3){
//     return true;
//   }else return false;
// });
// console.log(ans)

// 3.---------find-------------
// var ans = arr.find(function(val){
//   if(val === 5){
//     return val;
//   }
// })
// console.log(ans)

// 4.---------object-------------
// var obj = {
//   name: "mominul",
//   age: 20
// }
// Object.freeze(obj)
// obj.age = 25;
// console.log(obj);

// 5.---------function-------------
// function abcd (){
//   return "hello world";
// }
// var ans = abcd();

// 6.---------async------------- notworking-------------
 async function abcd(){
  var blob = await fetch(`https://randomuser.me/api/`);
  var ans = await blob.json();

  console.log(ans.results[0].name);
 }

 abcd();



