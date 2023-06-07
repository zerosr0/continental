const gnbLi = document.querySelectorAll('.basicMenu > ul > li')
const gnbMenu2 = document.querySelectorAll('.basicMenu > ul > .subMenu2')

const snbBtn = document.querySelector(".logoMenu .category");
const snbMenu = document.querySelector("#pWrapSnb");
const iframe = document.querySelector('main .container');

const listTitle = document.querySelector('.listTitle');
const sec = document.querySelector('section');

//topmenu mobile 버전
gnbLi.forEach((el, idx) => {
    el.addEventListener(("click"), (e) => {
        e.preventDefault();
        gnbLi[idx].classList.toggle('active');
        gnbMenu2[idx].classList.toggle('active');
    })
})


// 카테고리 버튼 클릭 시 leftmenu open, close
snbBtn.onclick = (e) => {
    e.preventDefault();
    snbBtn.classList.toggle('active');
    snbMenu.classList.toggle('active');
    snbMenu.classList.contains('active') ? iframe.classList.add('active') : iframe.classList.remove('active')
};


//device size 1200px이상이면 leftmenu 다시 나타나게
window.addEventListener("resize", () => {
    if (window.innerWidth <= 1200) {
        snbBtn.classList.remove('active');
        snbMenu.classList.remove('active');
        iframe.classList.remove('active');
    }
})


window.addEventListener("resize", () => {
    if (window.innerWidth <= 1200) {
        sec.style.paddingTop = `${listTitle.clientHeight}px`;
    }
})

