
const sliderRecommended = document.querySelector(".contrain-recommend")
let isDrag=false
let prevPageX
let prevScroll

function drageStop(){
    isDrag = false;
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

function phoneDrageRecommendedStart(e){
    isDrag = true;
    prevPageX = e.touches[0].pageX
    prevScroll = sliderRecommended.scrollLeft
 
}

function phoneRecommendedDragging (e){
    let position = e.touches[0].pageX - prevPageX
    if(isDrag == true){
        e.preventDefault()
        sliderRecommended.scrollLeft = prevScroll - position
    }else{
        return
    }
   
}




sliderRecommended.addEventListener("mousedown",drageRecommendedStart)
sliderRecommended.addEventListener("mouseup",drageStop)
sliderRecommended.addEventListener("mouseleave",drageStop)
sliderRecommended.addEventListener("mousemove",recommendedDragging)
sliderRecommended.addEventListener("touchstart",phoneDrageRecommendedStart)
sliderRecommended.addEventListener("touchend",drageStop)
sliderRecommended.addEventListener("touchmove",phoneRecommendedDragging)