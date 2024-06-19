(function() {
    const houseElem = document.querySelector('.house');
    let maxScrollValue = 0;

    function resizeHandler() {
        maxScrollValue = document.body.offsetHeight-window.innerHeight;
    }

    window.addEventListener('scroll', () => {
        const zMove = scrollY / maxScrollValue * 980 - 490;
        houseElem.style.transform = 'translateZ(' + zMove + 'vw)';
    });

    window.addEventListener('resize', resizeHandler);
    resizeHandler();
})();