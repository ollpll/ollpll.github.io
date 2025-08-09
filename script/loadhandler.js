window.addEventListener('load', () => {
    const loader = document.getElementById("loader")

    setTimeout(() => {
        loader.classList.add("loaderdone")
    }, 1000)

    loader.addEventListener('transitionend', () => {
        loader.style.display = "none"
    });
})