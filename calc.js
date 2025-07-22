let result=document.getElementById("resultElement");
let n1=document.getElementById("one");
let n2=document.getElementById("two");
let n3=document.getElementById("three");
let n4=document.getElementById("four");
let n5=document.getElementById("five");
let n6=document.getElementById("six");
let n7=document.getElementById("seven");
let n8=document.getElementById("eight");
let n9=document.getElementById("nine");
let n0=document.getElementById("zero");
let add=document.getElementById("plus");
let sub=document.getElementById("minus");
let div=document.getElementById("divide");
let mul=document.getElementById("multi");
let clear=document.getElementById("Clear");
let evaluate=document.getElementById("Evaluate");

let array=[];
n1.onclick=function(){
    let display=""
    array.push("1");
    
    for(let i of array){
        if(array.length==0){
            result.textContent="1";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}

clear.onclick=function(){
    result.textContent="";
    array=[]
    
}
n2.onclick=function(){
    let display=""
    array.push("2");
   for(let i of array){
        if(array.length==0){
            result.textContent="2";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }
}
n3.onclick=function(){
    let display=""
    array.push("3");
   for(let i of array){
        if(array.length==0){
            result.textContent="3";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}
n4.onclick=function(){
     let display=""
    array.push("4");
    for(let i of array){
        if(array.length==0){
            result.textContent="4";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }


}

n5.onclick=function(){
    let display=""
    array.push("5");
    for(let i of array){
        if(array.length==0){
            result.textContent="5";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}

n6.onclick=function(){
    let display=""
    array.push("6");
    for(let i of array){
        if(array.length==0){
            result.textContent="6";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

    
}

n7.onclick=function(){
    let display=""
    array.push("7");
    for(let i of array){
        if(array.length==0){
            result.textContent="7";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

    
}

n8.onclick=function(){
    let display=""
    array.push("8");
    for(let i of array){
        if(array.length==0){
            result.textContent="8";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}

n9.onclick=function(){
    let display=""
    array.push("9");
    for(let i of array){
        if(array.length==0){
            result.textContent="9";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}

n0.onclick=function(){
    let display=""
    array.push("0");
    for(let i of array){
        if(array.length==0){
            result.textContent="0";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}

add.onclick=()=>{
    let display=""
    array.push("+");
    for(let i of array){
        if(array.length==1){
            result.textContent="Error! Please Enter Value";
            result.style.color="red";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}

sub.onclick=()=>{
    let display=""
    array.push("-");
    for(let i of array){
        if(array.length==1){
            result.textContent="Error! Please Enter Value";
            result.style.color="red";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}

mul.onclick=()=>{
    let display=""
    array.push("*");
    for(let i of array){
        if(array.length==1){
            result.textContent="Error! Please Enter Value";
            result.style.color="red";

        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}

div.onclick=()=>{
    let display=""
    array.push("/");
    for(let i of array){
        if(array.length==1){
            result.textContent="Error! Please Enter Value";
            result.style.color="red";


        }
        else{
            display+=i
            result.textContent=display
            
        }

    }

}

evaluate.onclick=()=>{
    evaluate.onclick = function () {
  try {
    let expression = array.join("");  
    let resultValue = eval(expression); 
    result.textContent = resultValue;  
    array = [resultValue.toString()];  
  } catch (error) {
    result.textContent = "Error";
  }
};
}
