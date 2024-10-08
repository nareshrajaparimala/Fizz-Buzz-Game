// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter something: ', (input) => {
//   console.log(`You entered: ${input}`);
//   if(input%3==0 && input%5==0){
//     console.log("Fizz Bizz");
//     rl.close();
//     return ;
//   }
//   else if(input%3==0){
//     console.log("Fizz");
//     rl.close();
//     return;
//   }
//   else if(input%5==0){
//     console.log("Buzz");
//     rl.close();
//     return ;
//   }
// });


// html input
let innn1;
let option;
let body=document.getElementById("abc");
let corw=document.getElementById("corw");
let submit=document.getElementById("submit");
console.log("naresh");

submit.addEventListener("click",()=>{
    

    
    innn1=document.getElementById("innn1").value;
    option=document.getElementById("option").value;
    if(innn1%3==0 && innn1%5==0){
        console.log("Fizz Buzz");
        if(option=="Fizz Buzz"){
            body.style.backgroundColor="green";
            corw.innerText="Correct";
            corw.style.color="green";
        }
        else{
            body.style.backgroundColor="red";
            corw.innerText="Wrong";
            corw.style.color="red";
        }
        setTimeout(resetPage, 3000);
        return ;
      }
      else if(innn1%3==0){
        console.log("Fizz");
        if(option=="Fizz"){
            body.style.backgroundColor="green";
            corw.innerText="Correct";
            corw.style.color="green";
        }
        else{
            body.style.backgroundColor="red";
            corw.innerText="Wrong";
            corw.style.color="red";
        }
        setTimeout(resetPage, 3000);
        return;
      }
      else if(innn1%5==0){
        console.log("Buzz");
        if(option=="Buzz"){
            body.style.backgroundColor="green";
            corw.innerText="Correct";
            corw.style.color="green";
        }
        else{
            body.style.backgroundColor="red";
            corw.innerText="Wrong";
            corw.style.color="red";
        }
        setTimeout(resetPage, 3000);
        return ;
      }
      else{
        body.style.backgroundColor="red";
        corw.innerText="Dose not belong to both number";
        corw.style.color="red";
        setTimeout(resetPage, 3000);
      }
    
});


function resetPage() {
    location.reload();  // Reloads the current page
}


