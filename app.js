//to interactively insert the date
function theDate(){
    var x = document.createElement("INPUT");
    x.setAttribute("type","date");
    x.setAttribute("value","2023-02-19");
    document.body.appendChild(x);
}

//for first layer
const plus1 = document.querySelector(".plus1"),
minus1 = document.querySelector(".minus1"),
num1 = document.querySelector(".num1");

let a = 0;

plus1.addEventListener("click", ()=>{
    a++;
    a = (a < 10) ?  a : a;
    num1.innerText = a;
    console.log(a);
});

minus1.addEventListener("click", ()=>{
   if(a > 0){
    a--;
    a = (a < 10) ? a : a;
    num1.innerText = a;
   }
});

//for second layer
const plus2 = document.querySelector(".plus2"),
minus2 = document.querySelector(".minus2"),
num2 = document.querySelector(".num2");

let b = 0;

plus2.addEventListener("click", ()=>{
    b++;
    b = (b < 10) ? b : b;
    num2.innerText = b;
    console.log(b);
});

minus2.addEventListener("click", ()=>{
   if(b > 0){
    b--;
    b = (b < 10) ? b : b;
    num2.innerText = b;
   }
});

//for third layer
const plus3 = document.querySelector(".plus3"),
minus3 = document.querySelector(".minus3"),
num3 = document.querySelector(".num3");

let c = 0;

plus3.addEventListener("click", ()=>{
    c++;
    c = (c < 10) ? c : c;
    num3.innerText = c;
    console.log(c);
});

minus3.addEventListener("click", ()=>{
   if(c > 0){
    c--;
    c = (c < 10) ? c : c;
    num3.innerText = c;
   }
});

//for fourth layer
const plus4 = document.querySelector(".plus4"),
minus4 = document.querySelector(".minus4"),
num4 = document.querySelector(".num4");

let d = 0;

plus4.addEventListener("click", ()=>{
    d++;
    d = (d < 10) ? d : d;
    num4.innerText = d;
    console.log(d);
});

minus4.addEventListener("click", ()=>{
   if(d > 0){
    d--;
    d = (d < 10) ? d : d;
    num4.innerText = d;
   }
});

//for fifth layer
const plus5 = document.querySelector(".plus5"),
minus5 = document.querySelector(".minus5"),
num5 = document.querySelector(".num5");

let e = 0;

plus5.addEventListener("click", ()=>{
    e++;
    e = (e < 10) ? e : e;
    num5.innerText = e;
    console.log(e);
});

minus5.addEventListener("click", ()=>{
   if(e > 0){
    e--;
    e = (d < 10) ? e : e;
    num5.innerText = e;
   }
});

//for sixth layer
const plus6 = document.querySelector(".plus6"),
minus6 = document.querySelector(".minus6"),
num6 = document.querySelector(".num6");

let f = 0;

plus6.addEventListener("click", ()=>{
    f++;
    f = (f < 10) ? f : f;
    num6.innerText = f;
    console.log(f);
});

minus6.addEventListener("click", ()=>{
   if(f > 0){
    f--;
    f = (d < 10) ? f : f;
    num6.innerText = f;
   }
});