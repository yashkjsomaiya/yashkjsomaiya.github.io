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

    const yash = document.getElementById("yash");
    yash.addEventListener("click", function(){
        yash.style.boxShadow = "0px 5px 10000px 5000px var(--color-6-1)";
        window.open("https://yash.codes", "_self");
    })
}
