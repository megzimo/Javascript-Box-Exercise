console.log("Stupid!!!")
// //(boxgrow").on("click", function() {
// 	// Increase the size of the box.
// 	("#box").animate({height:"+=35px", width:"+=35px"}, "fast");
// })

// function myFunction() {
//     document.getElementById("button2").color = "blue";
// }


function blueBox() {
    console.log("hello")
    document.querySelector(".box").style.backgroundColor = "blue";
}

function growBox() {
    console.log("grow box")
    let box = document.querySelector(".box")
    box.style.height = "300px";
    box.style.width = "300px";
}

function fadeBox() {
    console.log("faded box")
    document.querySelector(".box").style.opacity = ".5";
}

function unfadeBox() {
    console.log("unfaded box")
    document.querySelector(".box").style.opacity = "1.0";
}

function resetBox() {
    console.log("reset box")
    let box = document.querySelector(".box")
    box.style.height = "150px";
    box.style.width = "150px";
    box.style.backgroundColor = "orange";
    box.style.opacity = "1.0";
    box.style.visibility = "visible";
}

function hideBox() {
    console.log("hide box")
    document.querySelector(".box").style.visibility = "hidden";
}