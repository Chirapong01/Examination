const nav = document.querySelector(".top-nav");
let lasScrollY = window.scrollY;


window.addEventListener("scroll", () => {
    if (lasScrollY > 50) {
        nav.classList.add("nav-fix")
    } else {
        nav.classList.remove("nav-fix")
    }
    lasScrollY = window.scrollY
})


function changePic(count) {
    let slid = document.getElementsByClassName("slides")
    let icon = document.getElementsByClassName("list-icon")
    if (slid[count].style.display !== "block") {
        for (let i = 0; i < slid.length; i++) {
            if (i !== count) {
                slid[i].style.display = "none"
                icon[i].textContent = "fiber_manual_record"
            } else {
                slid[count].style.display = "block"
                icon[count].textContent = "adjust"
            }
        }
    }
}

function arrowChange(index) {
    let slid = document.getElementsByClassName("slides")
    let count
    for (let i = 0; i < slid.length; i++) {
        if (slid[i].style.display == "block") {
            count = i;
        }
    }
    if (index === 'next') {
        count++
        if (count < 10) {
            changePic(count)
        } else {
            count = 0
            changePic(count)
        }
    }
    if (index === 'prev') {
        count--
        if (count >= 0) {
            changePic(count)
        } else {
            count = 9
            changePic(count)
        }
    }
}

function quantity(index) {
    let i = document.getElementById("count").value
    if (index == 'add') {
        if (i < 1000) {
            i++
        }
    } else {
        if (i > 0) {
            i--
        }
    }
    document.getElementById("count").value = i
}

function selectDescription(index) {
    let data = document.getElementsByClassName('listdescrip')
    let con = document.getElementsByClassName('contrain')
    for (let i = 0; i < data.length; i++) {
        if (i !== index) {
            data[i].classList.remove('toggle-border')
            con[i].classList.remove('contrain-toggle')
        } else {
            data[index].classList.add('toggle-border')
            con[i].classList.add('contrain-toggle')
        }
    }
}

function star(index) {
    let data = document.getElementsByClassName('star')
    for (let i = 0; i < index; i++) {
        data[i].innerHTML = '&#9733'
    }
    for (let i = index; i < 5; i++) {
        data[i].innerHTML = '&#9734'
    }
}

function opensidebar(index) {
    let data = document.getElementsByClassName("hide-bar")
    if (index == 'open') {
        console.log(data);
        data[0].classList.add("display-show")
        document.body.classList.add("stop-scrolling");
    }else if(index =='close'){
        data[0].classList.remove("display-show")
        document.body.classList.remove("stop-scrolling");
    }
}


const sliderRecently = document.querySelector(".contrain-recently")
const sliderRecommended = document.querySelector(".contrain-recommend")
let isDrag=false
let prevPageX
let prevScroll

function drageStop(){
    isDrag = false;
}

function drageRecentlyStart(e){
    isDrag = true;
    prevPageX = e.pageX
    prevScroll = sliderRecently.scrollLeft
}

function recentlyDragging (e){
    let position = e.pageX - prevPageX
    if(isDrag == true){
        e.preventDefault()
        sliderRecently.scrollLeft = prevScroll - position
    }else{
        return
    }
   
}

function drageRecommendedStart(e){
    isDrag = true;
    prevPageX = e.pageX
    prevScroll = sliderRecommended.scrollLeft
}

function recommendedDragging (e){
    let position = e.pageX - prevPageX
    if(isDrag == true){
        e.preventDefault()
        sliderRecommended.scrollLeft = prevScroll - position
    }else{
        return
    }
   
}

sliderRecently.addEventListener("mousedown",drageRecentlyStart)
sliderRecently.addEventListener("mouseup",drageStop)
sliderRecently.addEventListener("mousemove",recentlyDragging)
sliderRecently.addEventListener("touchstart",drageRecentlyStart)
sliderRecently.addEventListener("touchend",drageStop)
sliderRecently.addEventListener("touchmove",recentlyDragging)
sliderRecommended.addEventListener("mousedown",drageRecommendedStart)
sliderRecommended.addEventListener("mouseup",drageStop)
sliderRecommended.addEventListener("mousemove",recommendedDragging)
sliderRecommended.addEventListener("touchstart",drageRecommendedStart)
sliderRecommended.addEventListener("touchend",drageStop)
sliderRecommended.addEventListener("touchmove",recommendedDragging)