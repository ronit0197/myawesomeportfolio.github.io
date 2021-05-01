const hamburg = document.querySelector('.hamburg');
const openmenu = document.querySelector('.hamburg-icon');
const closemenu = document.querySelector('.close-icon');

openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

function show() {
    hamburg.style.display = "flex";
    hamburg.style.top = '0';
}
function close() {
    hamburg.style.top = "-100%";
}