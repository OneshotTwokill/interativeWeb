const progressBar = document.querySelector("div.progress-bar");
const bodyTag = document.querySelector("body");

document.addEventListener("scroll", function(){
    console.log(window.scrollY);

    const bodyHeight = bodyTag.getBoundingClientRect().height;

    let scrollableHeight = bodyHeight - window.innerHeight;

    let scrollWidth = window.scrollY / scrollableHeight * window.innerWidth;

    progressBar.style.width = scrollWidth + "px";
})

const cardB = document.querySelector("div.B");
const h1Tag = document.querySelector("h1");
document.addEventListener("scroll", function(){
    let cardBTop = cardB.getBoundingClientRect().top;
    let cardBMid = cardBTop + cardB.getBoundingClientRect().height/2;
    let windowMid = window.innerHeight/2;
    console.log(windowMid - cardBMid);

    if(Math.abs(windowMid - cardBMid)<100){
        cardB.classList.add("middle")
    }else{
        cardB.classList.remove("middle")
    }
})


const headerTag = document.querySelector("header");

document.addEventListener("scroll",function(){
    const pixels = window.scrollY;

    if(pixels >= headerTag.getBoundingClientRect().height){
        headerTag.classList.add("scrolled");
    }else{
        headerTag.classList.remove("scrolled");
    }
})

// const titleTag = document.querySelectorAll(".title");
// const info2Tag = document.querySelectorAll(".info2");

// titleTag.style.opacity = "0";
// info2Tag.style.opacity = "0";
// document.addEventListener("scroll", function(){
//     const tagTop = titleTag.getBoundingClientRect().top;
//     const tagBottom = titleTag.getBoundingClientRect().bottom;
//     if(tagTop < window.innerHeight && tagBottom > 0){
//         titleTag.style.opacity = "1";
//         titleTag.style.transition = "all 2s";
//     }else{
//         titleTag.style.opacity = "0";
//     }
// })
// document.addEventListener("scroll", function(){
//     const tagTop = info2Tag.getBoundingClientRect().top;
//     const tagBottom = info2Tag.getBoundingClientRect().bottom;
//     if(tagTop < window.innerHeight && tagBottom > 0){
//         info2Tag.style.opacity = "1";
//         info2Tag.style.transition = "all 2s";
//     }else{
//         info2Tag.style.opacity = "0";
//     }
// })

const animatedTags = document.querySelectorAll(".title, .info1, .info2, .card img, .card h1, button, .info3, .info4");
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

document.addEventListener("scroll",function(){
    animatedTags.forEach(tag =>{
        const tagTop = tag.getBoundingClientRect().top;
        const tagBottom = tag.getBoundingClientRect().bottom;

        if(tagTop < window.innerHeight && tagBottom > 0){
            tag.style.opacity = "1";
            tag.style.transition = "ease 2s";
        }else{
            tag.style.opacity = "0";
        }
    })
})



// const titleTag = document.querySelector(".title");
// const info2Tag = document.querySelector(".info2");

// titleTag.style.opacity = "0";
// info2Tag.style.opacity = "0";
// document.addEventListener("scroll", function(){
//     const tagTop = titleTag.getBoundingClientRect().top;
//     const tagBottom = titleTag.getBoundingClientRect().bottom;
//     if(tagTop < window.innerHeight && tagBottom > 0){
//         titleTag.style.opacity = "1";
//         titleTag.style.transition = "all 2s";
//     }else{
//         titleTag.style.opacity = "0";
//     }
// })




