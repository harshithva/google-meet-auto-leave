let t = null, x = 20;
function autoLeaveGoogleMeet() {
    console.log("checking members.....");
    //check for active members in meet
    if (document.querySelector(".gV3Svc>span").nextElementSibling.innerText < x) {
        console.log("STOP THE MEET");
        try {
            window.document.querySelector(".FbBiwc").click(); //click the endcall btn on meet
            console.log('Ooo...Harshith Meet has been ended');
        } catch {
            console.log("ERROR");
        }
    }
    else {
        t = setTimeout(autoLeaveGoogleMeet, 5000); //here it ll call itself after 5 seconds
    }
}

autoLeaveGoogleMeet();