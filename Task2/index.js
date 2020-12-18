
const handleClick = (e) => {
    let item = e.target
   
     if (item.style.zIndex == "2") {
        item.style.zIndex = "0"
    }
    else {
        item.style.zIndex = "2"
    }
}

const start = () => {
    let box = document.getElementById("grid")
    box.addEventListener("click", handleClick)
}

window.addEventListener("load", start)