// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// ===============================
// Navbar Shadow
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,.75)";
        header.style.backdropFilter = "blur(18px)";
        header.style.transition = ".4s";

    }

    else{

        header.style.background = "transparent";

    }

});


// ===============================
// Scroll Reveal
// ===============================

const reveals = document.querySelectorAll("section");

function revealSection(){

    const trigger = window.innerHeight * 0.82;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";
            section.style.transition = ".8s";

        }

    });

}

reveals.forEach(section=>{

    section.style.opacity = "0";
    section.style.transform = "translateY(70px)";

});

window.addEventListener("scroll",revealSection);

revealSection();


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") == "#" + current){

            link.classList.add("active");

        }

    });

});


// ===============================
// Hero Image Parallax
// ===============================

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove",(e)=>{

    const x = (window.innerWidth / 2 - e.pageX) / 35;

    const y = (window.innerHeight / 2 - e.pageY) / 35;

    heroImage.style.transform =

    `translate(${x}px,${y}px)`;

});


// ===============================
// Counter Animation
// ===============================

const counters = document.querySelectorAll(".counter");

const speed = 80;

counters.forEach(counter=>{

    const update = ()=>{

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target){

            counter.innerText = Math.ceil(count + inc);

            setTimeout(update,20);

        }

        else{

            counter.innerText = target;

        }

    };

    update();

});


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";
topBtn.style.padding = "15px 18px";
topBtn.style.fontSize = "20px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#ED1D24";
topBtn.style.color = "#fff";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 20px rgba(237,29,36,.6)";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

topBtn.onclick = ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// ===============================
// Loading Animation
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity = "0";

    setTimeout(()=>{

        document.body.style.transition = "1s";

        document.body.style.opacity = "1";

    },100);

});


// ===============================
// Hero Button Glow Effect
// ===============================

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform = "scale(1)";

    });

});