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

let isTiming = false
let Started = false
let isGreen = false
let startTime = 0
let elapsedTime = 0
let interval

function down(ev) {
    const isTouchEvent = ev.type.startsWith('touch')
    const eventCode = isTouchEvent ? (ev.changedTouches[0]?.code || 'Touch') : ev.code

    if (((eventCode === "Space" || eventCode === "Touch") && mainoll.style.display === "none" && !isTiming && !Started)) {
        Started = true
        isGreen = false
        startTime = 0
        elapsedTime = 0
        timer.textContent = "00:00:00"
        timer.style.color = "rgb(220,53,69)"
        setTimeout(() => {
            if (!Started) return
            timer.style.color = "rgb(25,135,84)"
            isGreen = true
        }, 700)
    }
}

async function up(ev) {
    const isTouchEvent = ev.type.startsWith('touch')
    const eventCode = isTouchEvent ? (ev.changedTouches[0]?.code || 'Touch') : ev.code

    if ((eventCode === "Space" || eventCode == "Touch") && Started && isGreen) {
        if (!isTiming) {
            timer.style.color = "rgb(200,200,200)"
            startTime = Date.now() - elapsedTime
            interval = setInterval(timerUpdate, 10)
            isTiming = true
        } else {
            clearInterval(interval)
            interval = null
            elapsedTime = Date.now() - startTime
            isTiming = false
            Started = false

            let allowed = JSON.parse(localStorage.getItem("selectedPll")) || []
            let scramble = randomPll(allowed)
            document.querySelector('.scramblespan').textContent = "Scramble:\n" + scramble.sequence

            await sleep(750)
        }
    } else if ((!ev || eventCode === "Space") && !isGreen) {
        timer.style.color = "rgb(200,200,200)"
        Started = false
    }
}

function timerUpdate() {
    const now = Date.now()
    const timeElapsed = now - startTime

    const totalSeconds = Math.floor(timeElapsed / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    const milliseconds = Math.floor((timeElapsed % 1000) / 10)

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`

    timer.textContent = formattedTime
}

const time = document.getElementsByClassName("time")[0]

addEventListener("keydown", down)
addEventListener("keyup", up)
time.addEventListener('mousedown', down)
time.addEventListener('mouseup', up)
time.addEventListener('touchstart', (ev) => { ev.preventDefault(); down(ev) })
time.addEventListener('touchend', (ev) => { ev.preventDefault(); up(ev) })

function Mobile() {
    // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ]
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem)
    })
}

if (Mobile()) {
    document.getElementsByClassName("tipspan")[0].textContent = "(Hold touch to start)"
}