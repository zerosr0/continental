const snbBtn = document.querySelector(".logoMenu .category");
const snbMenu = document.querySelector("#pWrapSnb");
const iframe = document.querySelector('main .container');


// 카테고리 버튼 클릭 시 leftmenu open, close
snbBtn.onclick = (e) => {
    e.preventDefault();
    snbBtn.classList.toggle('active');
    snbMenu.classList.toggle('active');
    snbMenu.classList.contains('active') ? iframe.classList.add('active') : iframe.classList.remove('active')
};


//device size 1200px이하이면 leftmenu close
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
        snbBtn.classList.remove('active');
        snbMenu.classList.remove('active');
        iframe.classList.remove('active');
    }
})
