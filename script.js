// nav menu
const openIcon = document.querySelector("#hamburger-icon")
const closeIcon = document.querySelector("#close-icon")
const mobileMenu = document.querySelector(".opened-mobile-nav")
const navList = document.querySelector("#opened-nav-list")

openIcon.addEventListener('click',()=>{
    mobileMenu.classList.add("active")
    openIcon.style.display = "none"
    navList.style.animation = "0.6s openMenu"
})

closeIcon.addEventListener('click',()=>{
    setTimeout(() => {
        mobileMenu.classList.remove("active")
    }, 550);
    setTimeout(() => {
        openIcon.style.display = "block"
    }, 550);
    navList.style.animation = "0.6s closeMenu"
})


// slider 

const personBoxes = document.querySelector(".box-wrapper")

const dots = document.querySelectorAll(".dot")

let activeDotIndex = 0;

dots.forEach((dot, index) => {
    dot.setAttribute("data-num", index)
    
    dot.addEventListener('click', event =>{
        let clickedDotNumber = event.target.dataset.num
        console.log(clickedDotNumber)
        if(clickedDotNumber == activeDotIndex)
        {
            return
        }
        else
        {
            let displayAreaWidth = document.querySelector('#person-boxes-container').clientWidth
            let pixelsToMove = -displayAreaWidth * clickedDotNumber;
            personBoxes.style.transform = 'translateX('+pixelsToMove+'px)'
            dots[activeDotIndex].classList.remove('active')
            dots[clickedDotNumber].classList.add('active')
            activeDotIndex = clickedDotNumber
        }
    })
});

// email input
const errorText = document.querySelector("#input-error")

const formButton = document.querySelector("#input-button")

const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm
let validation = true

formButton.addEventListener('click',()=>{

    let emailInputValue = document.querySelector("#email-input").value
    
    if(emailInputValue.match(emailRegex))
    {
        console.log("validation correct")
        errorText.style.display = "none"
    }
    else
    {
        validation = false
        errorText.style.display = "block"
    }
})