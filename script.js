// const openInYoutube = document.getElementById("yt-bt-div");

// var num = 0;

// openInYoutube.addEventListener("click", function(){
//     num++;
//     setTimeout(()=>{
//         alert(`Clicked ${num} times`);
//     },200);
// })

document.body.onload = function(){
    document.getElementById("read-more-div").addEventListener("click", function(){
        window.open("/biography", "_self");
    })
}