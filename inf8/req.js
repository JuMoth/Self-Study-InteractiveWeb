let timeId;
const btn = document.querySelector('.btn');

function sample() {
    console.log('sample!');
}

timeId = setTimeout(sample, 3000);

btn.addEventListener('click', () => {
    clearTimeout(timeId);
})