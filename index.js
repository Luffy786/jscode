// let age = 23;

// console.log(age);

// let a="birthday";
// console.log(a);
// let firstName ="Hitesh";
// console.log(firstName);
// let ram = true;
// console.log(ram);

// age=age+1;
// console.log(age);
// document.getElementById("p1").innerHTML = "Hello " + firstName;
// document.getElementById("p2").innerHTML = "you are " + age + " years old";


// let students=23;
// // students=students/2;
// // students=students*2;
// // students=students-2;
// // students=students+2;

// // let extraStudents =students%3;
// // students+=1;
// // console.log(extraStudents);

// // let user = window.prompt("what's your name?");
// // console.log(user);

// document.getElementById("myButton").onclick=function(){
//     username=document.getElementById("hello").value;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML =username;
// }


// let age=window.prompt("how old are you ");
// age=Number(age);
// console.log(typeof(age));
// age+=1;

// console.log("happy birthday @ YOu are ", age, "years old");


// let x;
// let y;
// let z;
// x=Number("2.23");
// y=String(3.14);
// z=Boolean("piza");
// console.log(x,y,z);


// const pie = 3.14;
// let radius ;
// let circumference;

//  radius = window.prompt("enter the radius of a circle");
//  radius=Number(radius);

//  circumference=3*pie*radius;
//  console.log("the circumference is ",circumference);


// let x=3;
// x=Math.round(x);
// x=Math.floor(x);
// x=Math.ceil(x);
// x=Math.pow(x,3);
// let y=5;
// let z=9;
// let maximum;
// let minimum;
// maximum=Math.max(x,y,z);
// minimum=Math.min(x,y,z);
// let s=Math.abs(-78);
// let d=Math.trunc(3.9);

// =======================================================

// let a=4;
// let b=3;
// let c=Math.sqrt((Math.pow(a,2))+(Math.pow(b,2)));
// let z=Math.hypot(a,b);


// console.log(c);

// let a;
// let b;
// let c;



// document.getElementById("button").onclick=function(){

//     a=document.getElementById("aText").value;
//     a=Number(a);
//     b=document.getElementById("bText").value;
//     b=Number(b);
//     c=Math.sqrt((Math.pow(a,2))+(Math.pow(b,2)));
//     document.getElementById("c").innerHTML="Side C: " + c;
// }

// a=0;
// document.getElementById("show").innerHTML=a;

// document.getElementById("plus").onclick = function(){
//     a+=1;
//     document.getElementById("show").innerHTML=a;

// }
// document.getElementById("minus").onclick = function(){
//     a-=1;
//     document.getElementById("show").innerHTML=a;

// }


// document.getElementById("roll").onclick = function () {
//     let x = Math.floor(Math.random() * 6 + 1);
//     let y = Math.floor(Math.random() * 6 + 1);
//     let z = Math.floor(Math.random() * 6 + 1);
//     document.getElementById("x").innerHTML = x;
//     document.getElementById("y").innerHTML = y;

//     document.getElementById("z").innerHTML = z;


// }
// let phoneNum="123-654-987";

// // // console.log(x);
// // let user ="   subu   ";
// // // console.log(user.charAt(3));
// // user=user.trim();
// // console.log(user.lastIndexOf("u"));
// // // user=user.toLocaleUpperCase();
// // // console.log(user);
// phoneNum=phoneNum.replaceAll("-","");
//  console.log(phoneNum);










// document.getElementById("myButton").onclick = function () {
//     const myCheck = document.getElementById("myCheck");
//     const vis = document.getElementById("visa");
//     const mas = document.getElementById("master");
//     const pay = document.getElementById("paypal");


    // if (document.getElementById("myCheck").checked == true) {
    //     console.log("you are subscribed");

    // }
    // else {
    //     console.log("you are not subscribed");
    // }
    // if(vis.checked){
    //     console.log("you are paying with visa");
    // }
    // else if(mas.checked){
    //     console.log("you are paying with mastercard");
    // }
    // else if(pay.checked){
    //     console.log("you are paying with paypal");
//     // }
// }





// Switch statement ++++++++++++++++++++++++++

// let grade="B";

// switch(grade){
//     case "A":
//     console.log("you did great!");
//     break;
//     case "B":
//     console.log("you did good!");
//     break;
//     case "C":
//     console.log("you did nice!");
//     break;
//     case "D":
//     console.log("you did great!");
//     break;
//     default:
//     console.log(grade,"is not a letter grade!");

// }
username = "hitesh";
age = 34;

let a = `hello you name is ${username} <br> 
and you age is<br> ${age}<br>`;
console.log(a);