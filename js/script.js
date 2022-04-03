function moveButton() {
    document.getElementById('button-yes').classList.add('button-yes');
    let btn = document.getElementById("button-yes");
    let width = btn.offsetWidth, height = btn.offsetHeight;
    btn.style.left = Math.random() * (window.innerWidth - width) + "px";
    btn.style.top = Math.random() * (window.innerHeight - height) + "px";
}