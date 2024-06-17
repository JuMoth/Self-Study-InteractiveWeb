let timeId;
let n = 0;
const btn = document.querySelector('.btn');

function sample() {
    n++;
    console.log(n);
    if(n>200) {
        return;
    }

    timeId = requestAnimationFrame(sample);
}

sample();

// timeId = setTimeout(sample, 3000);
// timeId = setInterval(sample, 1000/60);

// btn.addEventListener('click', () => {
//     clearTimeout(timeId);
// });
btn.addEventListener('click', () => {
    cancelAnimationFrame(timeId);
});