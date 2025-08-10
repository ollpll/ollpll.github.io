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

            let allowed = JSON.parse(localStorage.getItem(dataselect)) || []
            let scramble = selectordata(allowed)
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