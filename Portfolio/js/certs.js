const certsContainer = document.querySelector('.certsContainer');

const certsGallery=[
    {
        img: "./img/op.jpg",
        alt: "Open Bootcamp Certificate",
        h3: "HTML y CSS",
        p: "By: Open Bootcamp.",
        aHref: "./plus/diplomas_f248a6af-9c37-40b9-a9ae-4119030c49cf.pdf",
    },

    {
        img: "./img/coursera1.jpg",
        alt: "Coursera Certificate",
        h3: "HTML, CSS and JavaScript for Web Developers.",
        p: "By: Coursera, Johns Hopkins University.",
        aHref: "./plus/Coursera RLEB6HWWBPPN.pdf",
    },
    {
        img:"./img/coursera2.jpg",
        alt: "Coursera Certificate",
        h3: "English Course.",
        p: "By: Coursera, Irvine University of California.",
        aHref: "./plus/Coursera FXHANPYMMXLL.pdf",
    },
    {
        img:"./img/certiprof.jpg",
        alt: "Scrum Foundation Certificate ",
        h3: "Scrum Foundation Certificate.",
        p: "By: CertiProf, Professional knowledge.",
        aHref: "./plus/Certificate.pdf",
    },
]

window.addEventListener("DOMContentLoaded", function(){
    let displayCerts = certsGallery.map(function(item){
        return `                
        <div class="certsCard">
            <img src="${item.img}" alt="${item.alt}">
                <div class="certsText">
                    <h3 class="certsTitle">${item.h3}</h3>
                    <p class="certsSubTitle">${item.p}</p>
                    <a href="${item.aHref}" target="_blank">Ir al certificado <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
        </div>
        `
    });
    displayCerts = displayCerts.join("");
    certsContainer.innerHTML = displayCerts;
})