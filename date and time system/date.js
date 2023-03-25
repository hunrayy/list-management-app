let date = new Date()
let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
let day = days[date.getDay()]
let months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
let month = months[date.getMonth()]
let numb = date.getDate()
let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()
console.log(day, "/", month, "/", year);
// let p = date.getMilliseconds()
// let s = date.getSeconds()
// let p2 = date.getTime();
// console.log(p);
// console.log(s)
// console.log(p2)
// document.body.innerHTML = hour, minute
document.body.innerHTML = hour + ":" + minute 
// document.body.innerHTML = day + " / " + month + " / " +  year


// console.log(day, month, numb, year, "//", hour, ":", minute);
// document.getElementById("wrapper").innerHTML = day
// document.write(month)

// document.getElementById("wrapper").innerHTML = "your name is ";







// const results = []

// for(let i = 1; i <= 20; i++){
//     if(i%2 == 0){
//         results.push(i)
//     }
// }

// console.log(results)







// let a = 'gjhGKJGCHGACAS';
// let b = "hjxhjgxvACX"
// //let par = document.createElement('p');
// let divElement = document.getElementById("set");
// console.log(divElement)
// //divElement.textContent = a
// // document.body.innerHTML = a + b
// let c = [/**"henry", "collins", "kelvin", "mark", "ben"**/ 1,2,3,4,5,6,7,8,9]
// console.log(c.slice(3, 6));
// console.log(c);