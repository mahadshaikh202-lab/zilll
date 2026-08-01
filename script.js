// ===============================
// Navbar Scroll Effect
// ===============================
console.log("Script Loaded");

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});
// ===============================
// Cursor Glow
// ===============================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/*=====================================
      PRODUCT GALLERY
=====================================*/

const images = [
    "images/pefume1.jpeg",
    "images/perfume2.jpeg",
    "images/perfume3.jpeg",
    "images/perfume4.jpeg"
];

let currentIndex = 0;

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

// Update Gallery
function updateGallery(){

    mainImage.src = images[currentIndex];

    thumbnails.forEach((thumb,index)=>{

        thumb.classList.remove("active");

        if(index===currentIndex){

            thumb.classList.add("active");

        }

    });

}

// Thumbnail Click
thumbnails.forEach((thumb,index)=>{

    thumb.addEventListener("click",()=>{

        currentIndex=index;

        updateGallery();

    });

});

// Right Arrow
rightArrow.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=images.length){

        currentIndex=0;

    }

    updateGallery();

});

// Left Arrow
leftArrow.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){

        currentIndex=images.length-1;

    }

    updateGallery();

});

// =========================
// MOBILE SWIPE
// =========================

let startX=0;

mainImage.addEventListener("touchstart",(e)=>{

    startX=e.touches[0].clientX;

});

mainImage.addEventListener("touchend",(e)=>{

    let endX=e.changedTouches[0].clientX;

    if(startX-endX>50){

        currentIndex++;

        if(currentIndex>=images.length){

            currentIndex=0;

        }

    }

    else if(endX-startX>50){

        currentIndex--;

        if(currentIndex<0){

            currentIndex=images.length-1;

        }

    }

    updateGallery();

});


/*=====================================
        PRODUCT GALLERY
=====================================*/

const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

if(mainImage && thumbnails.length){

    thumbnails.forEach((thumb)=>{

        thumb.addEventListener("click",()=>{

            mainImage.src = thumb.src;

            thumbnails.forEach(img=>{
                img.classList.remove("active");
            });

            thumb.classList.add("active");

        });

    });

}


