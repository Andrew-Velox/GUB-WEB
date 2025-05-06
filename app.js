
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


function dark_mode_x() {
    const isDarkMode = document.body.classList.contains("dark_mode");
    const newMode = !isDarkMode;
    document.body.classList.toggle("dark_mode", newMode);

    var elements = [
        "head-sec", "navbar", "nav-link", "lft-sec", "mid-sec", "rght-sec", "footer", "info-cart"
    ];

    elements.forEach(id => {
        var element = document.getElementsByClassName(id);
        if (element.length > 0) {
            element[0].classList.toggle("dark_mode", newMode);
        }
    });

    const darkButtons = document.querySelectorAll('.dark-toggle-btn');
    darkButtons.forEach(btn => {
        const icon = btn.querySelector('i');

        if (newMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            btn.style.backgroundColor = "black";
            btn.style.color = "white";
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        }
    });

    initVanta(newMode);
}




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


const get_blg_btn=document.getElementById("blog_btn");

const home_sec=document.getElementById("home-sec");
const blog_sec=document.getElementById("blog-sec");

blog_sec.style.display="none";
get_blg_btn.addEventListener("click",()=>{
    home_sec.style.display="none";
    blog_sec.style.display="block";
});

const get_home_btn=document.getElementById("home-btn");

get_home_btn.addEventListener("click",()=>{
    home_sec.style.display="block";
    blog_sec.style.display="none";
});


// console.log(itms);

// for(const itm of itms){
//     // console.log(itm);

//     if(itm.innerText.includes("OOP")){
//         console.log(itm.innerText);
//     }
// }



// const search_ref = () => {
    const get_srch_btn=document.getElementById("search-btn");
    get_srch_btn.addEventListener("click",function(event){

        event.preventDefault();
        const srch_val= document.getElementById("inpt").value;
        // console.log(srch_val);
        const ref_data=document.getElementById("ref-itms");
        const itms = ref_data.getElementsByTagName("button")


        // for(const itm of itms){
        //     console.log(itm);
        // }
            
            
        if(srch_val==""){
            const nt_fnd_div=document.getElementsByClassName("no-itm");
            while(nt_fnd_div.length > 0) nt_fnd_div[0].remove();
            for(const itm of itms) itm.style.display="block";
            return;
        }

        let flag=false;
        for(const itm of itms){
            
            // console.log(itm.innerText);
            if(itm.innerText.toLocaleLowerCase().includes(srch_val.toLocaleLowerCase())){
                flag=true;
                // console.log(itm.innerText);
                itm.style.display="block";
            }
            else{
                itm.style.display="none";
            }
        }

        if(!flag){
            const nt_fnd_div=document.getElementsByClassName("no-itm");
            while(nt_fnd_div.length > 0) nt_fnd_div[0].remove();


            const div=document.createElement("div");
            div.classList.add("no-itm");
            div.innerHTML=`
                <h2 class="text-center"> No Source Found!💔 </h2>
            `;
            ref_data.appendChild(div);
        }
        else if(flag){
            const nt_fnd_div=document.getElementsByClassName("no-itm");
            while(nt_fnd_div.length > 0) nt_fnd_div[0].remove();
        }

        document.getElementById("inpt").value="";
    });
        
// };
// search_ref();


