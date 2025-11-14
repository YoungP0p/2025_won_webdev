// 모든 메뉴 요소 가져오기
const menuItems = document.querySelectorAll(".menu-item");

// 현재 선택된 인덱스
let currentIndex = 0;

// 처음 화면에서 0번 항목 선택
setActive(currentIndex);

// 선택 표시 함수
function setActive(idx) {
    menuItems.forEach((item, i) => {
        if (i === idx) {
            item.classList.add("select");
        } else {
            item.classList.remove("select");
        }
    });
}

// 키보드 이벤트
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        // 위로 이동 (순환)
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = menuItems.length - 1;
        }
        setActive(currentIndex);
    } else if (e.key === "ArrowDown") {
        // 아래로 이동 (순환)
        currentIndex++;
        if (currentIndex >= menuItems.length) {
            currentIndex = 0;
        }
        setActive(currentIndex);
    } else if (e.key === "Enter") {
        // 선택된 메뉴 확인용
        alert(`"${menuItems[currentIndex].textContent}" 선택됨`);
    }
});
