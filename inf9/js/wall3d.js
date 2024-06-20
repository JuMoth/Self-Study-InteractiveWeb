(function() {
    const stageElem = document.querySelector('.stage');
    const houseElem = document.querySelector('.house');
    const barElem = document.querySelector('.progress-bar');
    const mousePos = { x: 0, y: 0 };
    let maxScrollValue = 0;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight-window.innerHeight;
    }

    window.addEventListener('scroll', () => {
        const scrollPer = scrollY / maxScrollValue;
        const zMove = scrollPer * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';

        // progress bar
        barElem.style.width = scrollPer * 100 + '%';
    });

    window.addEventListener('mousemove', (e) => {
        // 외워서 사용하기
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        stageElem.style.transform = 'rotateX(' + (mousePos.y * 10) + 'deg) rotateY(' + (mousePos.x * 10) + 'deg)';
    });

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

    window.addEventListener('click', () => {
        new Character();
    });
})();