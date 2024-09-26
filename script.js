function whichNumber(x) {

    let element = document.getElementById('Result');
    x = +x;

    if (x === 1) {
        element.innerHTML = "You clicked button 1";
        element.style.display = "block";
        element.style.color = "red";
    }

    if (x === 2) {
        element.innerHTML = "You clicked button 2";
        element.style.display = "none";
        element.style.display = "block";
        element.style.color = "blue";
    }
}