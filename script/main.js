const ollbtn = document.getElementById("oll")
const loader = document.getElementById("loader")

ollbtn.addEventListener("click", () => {
    loader.style.display = "flex"
    void loader.offsetWidth
    loader.classList.add("show")
    loader.classList.remove("doneloader")

    loader.addEventListener('transitionend', () => {
        location.href = window.location.origin + "/oll"
    });
});