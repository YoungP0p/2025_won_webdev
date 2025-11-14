const menuItems = document.querySelectorAll(".menu-item");
let currentIndex = 0;

setActive(currentIndex);

function setActive(idx) {
    menuItems.forEach((item, i) => {
        if (i === idx) item.classList.add("select");
        else item.classList.remove("select");
    });
}

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        currentIndex--;
        if (currentIndex < 0) currentIndex = menuItems.length - 1;
        setActive(currentIndex);
    }

    else if (e.key === "ArrowDown") {
        currentIndex++;
        if (currentIndex >= menuItems.length) currentIndex = 0;
        setActive(currentIndex);
    }

    else if (e.key === "Enter") {
        alert(`${menuItems[currentIndex].textContent} 선택됨`);
    }
});
