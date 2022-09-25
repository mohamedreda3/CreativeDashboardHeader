let openDrop = document.querySelectorAll('.open-drop');
openDrop.forEach(ele => {
    ele.onclick = (e) => {
        document.querySelectorAll('.drop').forEach(item => item.classList.remove('active'));
        dropLi.forEach(dropLis => dropLis.classList.remove("active"));
        openDrop.forEach(lis => lis.classList.remove("active"));
        ele.classList.add('active');
        if (e.currentTarget.nextElementSibling != null) {
            e.currentTarget.nextElementSibling.classList.add('active');
        }
    }
});


let dropLi = document.querySelectorAll('ul.dropmenu li');
dropLi.forEach(item => {
    item.addEventListener('click', (e) => {
        dropLi.forEach(dropLis => dropLis.classList.remove("active"));
        console.log(e.currentTarget);
        e.currentTarget.classList.add('active');
    }, { capture: false });
});

