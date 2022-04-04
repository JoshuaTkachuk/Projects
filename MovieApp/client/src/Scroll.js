const buttonRight = document.getElementById('rightButton');

buttonRight.onclick = () => {
    document.getElementById('row_items').scrollLeft += 5;
}