const snbBtn = document.querySelector(".logoMenu .category");
const snbMenu = document.querySelector("#pWrapSnb");
const iframe = document.querySelector('main .container');


// 카테고리 버튼 클릭하면 버튼, leftMenu, iframe에 active를 
snbBtn.onclick = (e) => {
    e.preventDefault();
    snbBtn.classList.toggle('active');
    snbMenu.classList.toggle('active');
    snbMenu.classList.contains('active') ? iframe.classList.add('active') : iframe.classList.remove('active')
};



window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
        snbBtn.classList.remove('active');
        snbMenu.classList.remove('active');
        iframe.classList.remove('active');
        // snbMenu.classList.contains('active') ? iframe.classList.add('active') : iframe.classList.remove('active')
    }
})