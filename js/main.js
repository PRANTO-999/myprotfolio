let type = document.querySelector(".type")
let typetext = type.innerHTML
type.innerHTML = ""
let typeDis = typetext.split("")
let typing = 0


function typeJs(){
    if(typing < typetext.length){
       type.innerHTML += typetext.charAt(typing) 
       typing++
       typeDis = typetext.split("")
    }else{
       typeDis.pop()
       type.innerHTML = typeDis.join("")
       if(typeDis.length == 0){
         typing = 0
       }
    }
}

setInterval(()=>{
   typeJs()
},200)