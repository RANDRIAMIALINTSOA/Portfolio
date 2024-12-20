const down = document.querySelector(".down")
const up = document.querySelector(".up")
const home = document.querySelector(".home")
const about = document.querySelector(".about")
const toAbout = document.querySelector(".toAbout")
const abm = document.querySelector(".abm")
const toVision = document.querySelector(".toVision")
const profilPage = document.querySelector(".profil-page")
const competence = document.querySelector(".competence")
const toComp = document.querySelector(".toComp")
const toTop = document.querySelector(".toTop")
const toContact = document.querySelector(".toContact")
const contact = document.querySelector(".contact")
const ctm = document.querySelector(".ctm")
const cp = document.querySelector(".cp")
const cn = document.querySelector(".cn")
const hn = document.querySelector(".hn")
const ab = document.querySelector(".ab")

down.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-689px"
    down.style.opacity="0"
    down.style.transition=".5s"
})

about.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-680px"
    down.style.opacity="0"
    down.style.transition=".5s"
})
ab.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-680px"
    down.style.opacity="0"
    down.style.transition=".5s"
})
toAbout.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-680px"
    down.style.opacity="0"
    down.style.transition=".5s"
    toTop.style.opacity="0%"
    toTop.style.transition="2s"
})

abm.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-680px"
    down.style.opacity="0"
    down.style.transition=".5s"
})

home.addEventListener('click', () => {
    profilPage.style.transition="1s"
    profilPage.style.marginTop="0"
    down.style.opacity="100%"
    down.style.transition=".5s"
})
hn.addEventListener('click', () => {
    profilPage.style.transition="1s"
    profilPage.style.marginTop="0"
    down.style.opacity="100%"
    down.style.transition=".5s"
})

up.addEventListener('click', () => {
    profilPage.style.transition="1s"
    profilPage.style.marginTop="0"
    down.style.opacity="100%"
    down.style.transition=".5s"
})

toVision.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-1380px"
    down.style.opacity="0"
    down.style.transition=".5s"
})

competence.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-1380px"
    down.style.opacity="0"
    down.style.transition=".5s"
})
cp.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-1380px"
    down.style.opacity="0"
    down.style.transition=".5s"
})

toComp.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-1380px"
    down.style.opacity="0"
    down.style.transition=".5s"
})

toContact.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-2050px"
    down.style.opacity="0"
    down.style.transition=".5s"
    toTop.style.opacity="100%"
    toTop.style.transition="2s"
})

contact.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-2050px"
    down.style.opacity="0"
    down.style.transition=".5s"
    toTop.style.opacity="100%"
    toTop.style.transition="2s"
})
cn.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-2050px"
    down.style.opacity="0"
    down.style.transition=".5s"
    toTop.style.opacity="100%"
    toTop.style.transition="2s"
})

ctm.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="-2050px"
    down.style.opacity="0"
    down.style.transition=".5s"
    toTop.style.opacity="100%"
    toTop.style.transition="2s"
})

toTop.addEventListener('click', () => {
    profilPage.style.transition="1.5s"
    profilPage.style.marginTop="0px"
    toTop.style.opacity="0"
    toTop.style.transition=".5s"
    down.style.opacity="100%"
    down.style.transition=".5s"
})