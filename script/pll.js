const SelectSpan = document.getElementById("centeredspan")

let selectedCount = 0

window.addEventListener('load', () => {
    const selectedPll = JSON.parse(localStorage.getItem('selectedPll')) || []
    selectedPll.forEach(id => {
        const img = document.querySelector(`img[src$="${id}.svg"]`)
        if (img) {
            img.classList.add("selected")
            selectedCount++
        }
    })
    SelectSpan.textContent = selectedCount + " out 21"
})

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function selectPll(id) {
    const img = document.querySelector(`img[src$="${id}.svg"]`)
    let selectedPll = JSON.parse(localStorage.getItem('selectedPll')) || []

    if (img.classList.contains("selected")) {
        img.classList.remove("selected")
        selectedCount--
        selectedPll = selectedPll.filter(item => item !== id)
    } else {
        img.classList.add("selected")
        selectedCount++
        selectedPll.push(id)
    }

    localStorage.setItem('selectedPll', JSON.stringify(selectedPll))
    SelectSpan.textContent = selectedCount + " out 21"
}

function selectGroup(id) {
    const imgs = document.querySelectorAll(`img[src^="../plls_svg/${id}/"]`)    
    const allSelected = Array.from(imgs).every(img => img.classList.contains("selected"))
    let selectedPll = JSON.parse(localStorage.getItem('selectedPll')) || []

    if (allSelected) {
        imgs.forEach(img => {
            if (img.classList.contains("selected")) {
                img.classList.remove("selected")
                selectedCount--
                const imgId = img.src.split('/').pop().replace('.svg', '')
                selectedPll = selectedPll.filter(item => item !== imgId)
            }
        })
    } else {
        imgs.forEach(img => {
            if (!img.classList.contains("selected")) {
                img.classList.add("selected")
                selectedCount++
                const imgId = img.src.split('/').pop().replace('.svg', '')
                if (!selectedPll.includes(imgId)) {
                    selectedPll.push(imgId)
                }
            }
        })
    }

    localStorage.setItem('selectedPll', JSON.stringify(selectedPll))
    SelectSpan.textContent = selectedCount + " out 21"
}

function selectAll() {
    const imgs = document.querySelectorAll(`img[src$=".svg"]`)
    const allSelected = Array.from(imgs).every(img => img.classList.contains("selected"))
    let selectedPll = JSON.parse(localStorage.getItem('selectedPll')) || []

    if (allSelected) {
        imgs.forEach(img => {
            if (img.classList.contains("selected")) {
                img.classList.remove("selected")
            }
        })

        selectedPll = []
        selectedCount = 0
        SelectSpan.textContent = "0 out 21"
    } else {
        imgs.forEach(img => {
            if (!img.classList.contains("selected")) {
                img.classList.add("selected")
            }
        })

        selectedPll = Array.from(imgs).map(img => {
            return img.src.split('/').pop().replace('.svg', '')
        })

        selectedCount = imgs.length
        SelectSpan.textContent = `${selectedCount} out 21`
    }

    localStorage.setItem('selectedPll', JSON.stringify(selectedPll))
}

function showNotifier(message) {
    const notif = document.getElementById('notif')

    const box = document.createElement('div')
    box.innerText = message
    box.style.background = '#333'
    box.style.color = '#fff'
    box.style.padding = '25px'
    box.style.marginBottom = '10px'
    box.style.borderRadius = '5px'
    box.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)'
    box.style.transform = "translateX(120%)"
    box.style.transition = 'transform 0.3s ease'

    notif.appendChild(box)

    requestAnimationFrame(() => {
        box.style.transform = "translateX(0)"
    })

    setTimeout(() => {
        box.style.transform = "translateX(120%)"
        setTimeout(() => {
        if (notif.contains(box)) {
            notif.removeChild(box)
        }
        }, 500)
    }, 3000)
}

const mainoll = document.getElementById("mainoll")
const timer = document.getElementById("timer")

function switch_page() {
    if (selectedCount == 0) {
        showNotifier("Select an PLL!")
    } else {
        let allowed = JSON.parse(localStorage.getItem('selectedPll')) || []
        let scramble = randomPll(allowed)
        document.getElementsByClassName("scramblespan")[0].textContent = "Scramble:\n" + scramble.sequence 

        mainoll.style.display = "none",
        document.getElementsByClassName("training")[0].style.display = "none",
        document.getElementsByClassName("maintimer")[0].style.display = "flex"
    }
}

function revert_page() {
    mainoll.style.display = "flex",
    document.getElementsByClassName("training")[0].style.display = "flex",
    document.getElementsByClassName("maintimer")[0].style.display = "none"
}

let selectordata = randomPll