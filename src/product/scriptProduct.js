let nav = document.querySelector(".top-nav")
let topnav = document.getElementsByClassName("top-nav")
let search = document.getElementsByClassName("search")
let navlist = document.getElementsByClassName("nav-list")
let logo = document.getElementsByClassName("logo")
let navicon = document.getElementsByClassName("nav-icon")
let piece = document.getElementById("count").value
let lasScrollY = window.scrollY
let dollarUSLocale = Intl.NumberFormat('en-US');


window.addEventListener("scroll", () => {
    if (lasScrollY > 50) {
        navlist[0].style.marginTop = "25px";
        search[0].style.display = "none"
        topnav[0].style.height = "70px"
        logo[0].style.display = "none"
        navicon[0].style.marginTop = "0px"
        navicon[1].style.marginTop = "0px"
        navicon[2].style.marginTop = "0px"
        nav.classList.add("nav-fix")
    } else {
        navlist[0].style.marginTop = "1rem";
        search[0].style.display = "flex"
        topnav[0].style.height = "auto"
        logo[0].style.display = "block"
        navicon[0].style.marginTop = "0px"
        navicon[1].style.marginTop = "0px"
        navicon[2].style.marginTop = "0px"
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
    let total
    if (piece < 0) {
        piece = 0
    } else {
        if (index == 'add') {
            if (piece < 1000) {
                piece++
            }
        } else if (index == 'remove') {
            if (piece > 0) {
                piece--
            }
        }
        else if (index == 'change') {
                piece = document.getElementById("count").value
        }
    }
    document.getElementById("count").value = piece
    total = piece * 11400
    document.getElementById("piece-model").innerHTML = piece
    document.getElementById("total-model").innerHTML = dollarUSLocale.format(total)
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
    } else if (index == 'close') {
        data[0].classList.remove("display-show")
        document.body.classList.remove("stop-scrolling");
    }
}


const sliderRecently = document.querySelector(".contrain-recently")
const sliderRecommended = document.querySelector(".contrain-recommend")
let isDrag = false
let prevPageX
let prevScroll

function drageStop() {
    isDrag = false;
}

function drageRecentlyStart(e) {
    isDrag = true;
    prevPageX = e.pageX
    prevScroll = sliderRecently.scrollLeft
}

function recentlyDragging(e) {
    let position = e.pageX - prevPageX
    if (isDrag == true) {
        e.preventDefault()
        sliderRecently.scrollLeft = prevScroll - position
    } else {
        return
    }

}

function drageRecommendedStart(e) {
    isDrag = true;
    prevPageX = e.pageX
    prevScroll = sliderRecommended.scrollLeft
}

function recommendedDragging(e) {
    let position = e.pageX - prevPageX
    if (isDrag == true) {
        e.preventDefault()
        sliderRecommended.scrollLeft = prevScroll - position
    } else {
        return
    }

}
function phoneDrageRecentlyStart(e) {
    isDrag = true;
    prevPageX = e.touches[0].pageX
    prevScroll = sliderRecently.scrollLeft

}

function phoneRecentlyDragging(e) {
    let position = e.touches[0].pageX - prevPageX
    if (isDrag == true) {
        e.preventDefault()
        sliderRecently.scrollLeft = prevScroll - position
    } else {
        return
    }

}

function phoneDrageRecommendedStart(e) {
    isDrag = true;
    prevPageX = e.touches[0].pageX
    prevScroll = sliderRecommended.scrollLeft

}

function phoneRecommendedDragging(e) {
    let position = e.touches[0].pageX - prevPageX
    if (isDrag == true) {
        e.preventDefault()
        sliderRecommended.scrollLeft = prevScroll - position
    } else {
        return
    }

}


sliderRecently.addEventListener("mousedown", drageRecentlyStart)
sliderRecently.addEventListener("mouseup", drageStop)
sliderRecently.addEventListener("mouseleave", drageStop)
sliderRecently.addEventListener("mousemove", recentlyDragging)
sliderRecently.addEventListener("touchstart", phoneDrageRecentlyStart)
sliderRecently.addEventListener("touchend", drageStop)
sliderRecently.addEventListener("touchmove", phoneRecentlyDragging)
sliderRecommended.addEventListener("mousedown", drageRecommendedStart)
sliderRecommended.addEventListener("mouseup", drageStop)
sliderRecommended.addEventListener("mouseleave", drageStop)
sliderRecommended.addEventListener("mousemove", recommendedDragging)
sliderRecommended.addEventListener("touchstart", phoneDrageRecommendedStart)
sliderRecommended.addEventListener("touchend", drageStop)
sliderRecommended.addEventListener("touchmove", phoneRecommendedDragging)