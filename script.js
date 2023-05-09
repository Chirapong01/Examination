
const sliderRecommended = document.querySelector(".contrain-recommend")
let isDrag=false
let prevPageX
let prevScroll

function drageStop(){
    isDrag = false;
}


function drageRecommendedStart(e){
    console.log();
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


sliderRecommended.addEventListener("mousedown",drageRecommendedStart)
sliderRecommended.addEventListener("mouseup",drageStop)
sliderRecommended.addEventListener("mousemove",recommendedDragging)