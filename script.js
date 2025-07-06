
let count = 0;
let tasbihCount = 0;
let goalCount = 0;
let cycleLimit = 100;
const beep = document.getElementById("beepAudio");

function updateCycle() {
    const input = document.getElementById('cycleInput').value;
    cycleLimit = parseInt(input) || 100;
    resetCount();
}

function incrementCount() {
    count++;
    beep.play();
    document.getElementById('countDisplay').innerText = count;
    if (count >= cycleLimit) {
        tasbihCount++;
        count = 0;
        document.getElementById('tasbihCountDisplay').innerText = 'Tasbihs: ' + tasbihCount;
        if (tasbihCount % 10 === 0) {
            goalCount++;
            document.getElementById('goalDisplay').innerText = 'Spiritual Goals: ' + goalCount;
        }
    }
}

function resetCount() {
    count = 0;
    tasbihCount = 0;
    goalCount = 0;
    document.getElementById('countDisplay').innerText = '0';
    document.getElementById('tasbihCountDisplay').innerText = 'Tasbihs: 0';
    document.getElementById('goalDisplay').innerText = 'Spiritual Goals: 0';
}

function toggleTheme() {
    document.body.classList.toggle('dark');
}
