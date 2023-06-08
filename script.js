document.body.onload = function(){

    const urlParams = new URLSearchParams(window.location.search);
    const resp = urlParams.get('resp');

    if(resp == "suc"){
        document.getElementById("message").style.display = "flex";
        document.getElementsByClassName("suc")[0].style.display = "flex";
        setTimeout(function(){
            document.getElementById("message").style.display = "none";
        },1500);
    }else if(resp == "fail"){
        document.getElementById("message").style.display = "flex";
        document.getElementsByClassName("fail")[0].style.display = "flex";
        setTimeout(function(){
            document.getElementById("message").style.display = "none";
        },1500);
    }


        const link = `https://api.countapi.xyz/hit/nazz/views`
        let p = fetch(link)
        p.then(resp => {return resp.json()}).then(val => {
            console.log(val.value);
        });

    const links = [
        "https://openinapp.co/b34gk",
        "/biography",
        "https://open.spotify.com/artist/7iEUKVcv42PUcIS696yadB?si=BwI1MjuqSD64ioaesjrT7g&dl_branch=1&nd=1",
        "https://www.instagram.com/nazzmusic/?hl=en",
        "https://twitter.com/nazzfuckingbest",
        "https://www.snapchat.com/add/nazzmuzic",
        "https://www.facebook.com/people/Nihar-Hodawdekar/100011063224584/",
        "https://yash.codes"
    ]

    const extensions = [
        "youtube",
        "biography",
        "spotify",
        "instagram",
        "twitter",
        "snapchat",
        "facebook",
        "yash"
    ]

    const buttons = document.getElementsByClassName("count-btn");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            const link = `https://api.countapi.xyz/hit/nazz/${extensions[i]}`
            let p = fetch(link)
            p.then(resp => {return resp.json()}).then(val => {
                console.log(val.value);
            });
            window.open(`${links[i]}`, "_self");
            })
    }

}
