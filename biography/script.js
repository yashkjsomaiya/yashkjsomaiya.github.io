document.body.onload = function(){

    const goBack = document.getElementsByClassName("back-to-main");

    for(let i = 0; i < goBack.length; i++){
        goBack[i].addEventListener("click", function(){
            window.open('../', "_self");
        })
    }

}