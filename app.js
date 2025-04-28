
let vantaEffect;
function initVanta(isDarkMode) {
    if (vantaEffect) {
        vantaEffect.destroy();
    }
    vantaEffect = VANTA.FOG({
        el: ".head-sec",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        highlightColor: isDarkMode ? 0x3a3a3a : 0xfabf00,
        midtoneColor: isDarkMode ? 0x1c2526 : 0xff1f00,
        lowlightColor: isDarkMode ? 0x0a0a0a : 0x2d00ff,
        baseColor: isDarkMode ? 0x000000 : 0xffebeb,
        blurFactor: 0.6,
        speed: 1.5,
        zoom: 0.8
    });
}

initVanta(false);


function dark_mode_x(){

    const isDarkMode = document.body.classList.contains("dark_mode");
    const newMode = !isDarkMode;
    document.body.classList.toggle("dark_mode", newMode);

    var elements = [
        "head-sec", "navbar","nav-link", "lft-sec", "mid-sec", "rght-sec", "footer", "info-cart"
    ];

    // Loop over each element and toggle the dark_mode class
    elements.forEach(id => {
        var element = document.getElementsByClassName(id);
        if (element.length > 0) {
            element[0].classList.toggle("dark_mode", newMode);
        }
    });

    // var footer = document.querySelector(".footer");
    // footer.classList.toggle("dark_mode");


    initVanta(newMode);
    
                
                
};



// drk-btn-changing
var get_drk_btn=document.getElementById("drk-btn");
get_drk_btn.addEventListener("click",()=>{
    if(get_drk_btn.innerHTML.includes('fa-moon')){
        get_drk_btn.innerHTML="<i class='fa-solid fa-sun text-white pt-2'></i>"
        get_drk_btn.classList.remove("fa-moon");
    }
    else{
        get_drk_btn.innerHTML="<i class='fa-regular fa-moon pt-2'></i>"
        get_drk_btn.classList.remove("fa-sun");
    }

});

get_drk_btn.addEventListener("mouseover", ()=> {
    if(get_drk_btn.innerHTML.includes('fa-sun')){
        
        get_drk_btn.style.backgroundColor = "rgba(41, 41, 41, 0.9)";
        // get_drk_btn.style.transition = "background-color 0.3s";
    }
    else{
        get_drk_btn.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        // get_drk_btn.style.transition = "background-color 0.3s";
    }
});

get_drk_btn.addEventListener("mouseout", () => {
    get_drk_btn.style.backgroundColor = "transparent";
});


// console.log(get_drk_btn);
