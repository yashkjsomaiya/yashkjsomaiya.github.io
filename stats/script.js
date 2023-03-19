const extensions = [
    "views",
    "youtube",
    "spotify",
    "instagram",
    "twitter",
    "snapchat",
    "facebook",
    "biography",
    "yash"
]

const displays = document.getElementsByClassName("p-2");
const inputs = document.getElementsByClassName("p-3");
const addBtn = document.getElementsByClassName("p-4-1");
const subBtn = document.getElementsByClassName("p-4-2");


//Update
function update(){
for(let i = 0; i < extensions.length; i++){
    const link = `https://api.countapi.xyz/get/nazz/${extensions[i]}`
    let p = fetch(link)
    p.then(resp => {return resp.json()}).then(val => {
        displays[i].innerText = val.value;
    });
}
}
update();

// Add and Subtract Event Listeners
for(let i = 0; i < addBtn.length; i++){
    addBtn[i].addEventListener("click", function(){
       const num = (Number(displays[i].innerText) + Number(inputs[i].value)); 
       const link = `https://api.countapi.xyz/set/nazz/${extensions[i]}?value=${num}`
    let p = fetch(link)
    p.then(resp => {return resp.json()}).then(val => {
        displays[i].innerText = val.value;
    });
    })

    subBtn[i].addEventListener("click", function(){
        const num = (Number(displays[i].innerText) - Number(inputs[i].value)); 
        const link = `https://api.countapi.xyz/set/nazz/${extensions[i]}?value=${num}`
     let p = fetch(link)
     p.then(resp => {return resp.json()}).then(val => {
         displays[i].innerText = val.value;
     });
     })

}