const faBar = document.querySelector(".fa-bars");
const sideBar = document.querySelector(".sideBar");
const profil = document.querySelector(".profil");
const m = document.querySelector(".m");
const pages = document.querySelector(".pages")
const icones = document.querySelector(".icones")
const iconPage = document.querySelector(".iconPage")

faBar.addEventListener('click', () => {
    sideBar.classList.toggle("sdHide");
    sideBar.classList.toggle("sdShow");
    sideBar.style.transition=".3s";
    profil.style.dispay="none";
    // m.style.dispay="block";
    profil.classList.toggle("ph")
    m.classList.toggle("ms")
    m.style.transition=".5s"
    pages.classList.toggle("icoH")
    iconPage.classList.toggle("icoPH")
    iconPage.classList.toggle("icoPS")
    iconPage.style.transition=".2s"
    icones.classList.toggle("icLiS")
    icones.classList.toggle("icLiH")
})

