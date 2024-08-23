

let myMenu = document.getElementById('btn');
let myContent = document.getElementById('dropdown');

myMenu.addEventListener('click', function () {
    myContent.style.display = myContent.style.display === 'none' ? 'block' : 'none';
});