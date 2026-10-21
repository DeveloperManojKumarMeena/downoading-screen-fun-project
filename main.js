let btn = document.querySelector("button");
let percetn = document.querySelector('#percent')
let inner = document.querySelector('#prinner')
let start = 0;


btn.addEventListener("click",()=>{
   let timer = setInterval(()=>{
        percetn.innerHTML=`${start} %`
        inner.style=`width: ${start}%;`
        start++

        if(start>100){
            clearInterval(timer)
            btn.innerHTML="Downloaded"
            btn.style=`background-color: green;`
            btn.disabled=true
            btn.style=`cursor: default;`
            
        }
    },10)   
})