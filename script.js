let clicks=0

document.getElementById("title").onclick=()=>{

clicks++

if(clicks==5){

let pass = prompt("Enter Admin Password")

if(pass=="useas"){

document.getElementById("adminPanel").style.display="block"

}else{

alert("Wrong Password")

}

clicks=0

}

}


// LOAD APPS FROM JSON

fetch("apps.json")

.then(res=>res.json())

.then(data=>{

let html=""

data.apps.forEach(app=>{

html+=`

<div class="app">

<img src="${app.image}">

<h3>${app.name}</h3>

<a href="${app.download}" target="_blank">
<button>GET</button>
</a>

<br>

<a href="${app.qr}" target="_blank">
<button>SCAN</button>
</a>

</div>

`

})

document.getElementById("appList").innerHTML=html

})


// ADMIN GENERATE CODE

function addApp(){

let name=document.getElementById("appName").value
let image=document.getElementById("appImage").value
let download=document.getElementById("downloadLink").value
let qr=document.getElementById("qrLink").value


let code=

`{
"name":"${name}",
"image":"${image}",
"download":"${download}",
"qr":"${qr}"
},`

document.getElementById("output").value=code

}
