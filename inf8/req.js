let timeId;
const btn = document.querySelector('.btn');

function sample() {
    console.log('sample!');
}

// timeId = setTimeout(sample, 3000);
timeId = setInterval(sample, 1000/60);

// btn.addEventListener('click', () => {
//     clearTimeout(timeId);
// });
btn.addEventListener('click', () => {
    clearInterval(timeId);
});