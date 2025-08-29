//Navbar counters
let heartCount= 0;
let coinCount= 100;
let copyCount= 0;

//Select navbar elements, call history lists and clear history buttons
const heartNavbar= document.getElementById("heart-navbar");
const coinNavbar= document.getElementById("coin-navbar");
const copyNavbar= document.getElementById("copy-navbar");

const historyList= document.getElementById("call-history-list");
const historyListSmall= document.getElementById("call-history-list-small-device");

const clearHistoryBtn= document.getElementById("clear-history");
const clearHistoryBtnSmall= document.getElementById("clear-history-small-device");

function updateNavbar() { //Updating navbar display
    heartNavbar.textContent= heartCount;
    coinNavbar.textContent= coinCount;
    copyNavbar.textContent= copyCount;
}

function handleCall(card) { //Handling call action
    if (coinCount < 20) {
        alert("You do not have enough coins to make a call!");
        return;
    }
    coinCount= coinCount - 20;
    updateNavbar();
    const serviceNameFull= card.querySelector(".service-name").textContent;
    const serviceNameShort= card.querySelector(".card-body p").textContent;
    const serviceNumber= card.querySelector(".service-number").textContent;
    const now= new Date();
    const hours= String(now.getHours()).padStart(2, '0');
    const minutes= String(now.getMinutes()).padStart(2, '0');
    const seconds= String(now.getSeconds()).padStart(2, '0');
    const time24= `${hours}:${minutes}:${seconds}`;

    alert(`📞 Calling ${serviceNameShort} at ${serviceNumber}....`); //Alert message

    const entry= document.createElement("div"); //Adding in history (desktop)
    entry.className= "flex flex-col bg-gray-100 rounded-lg px-3 py-2";
    entry.innerHTML= `
        <div class="flex justify-between items-center"><span class="font-medium text-sm">${serviceNameFull}</span><span class="text-sm text-gray-500">${time24}</span></div>
        <span class="text-gray-700">${serviceNumber}</span>`;
    historyList.appendChild(entry);

    const entrySmall = entry.cloneNode(true); //Adding in history (mobile)
    historyListSmall.appendChild(entrySmall);
}

function handleCopy(serviceNumber) { //Handling copy action
    navigator.clipboard.writeText(serviceNumber).then(() => {
        copyCount++;
        updateNavbar();
        alert(`Number ${serviceNumber} copied to clipboard!`);
    });
}

function handleHeart() { //Handling heart action
    heartCount++;
    updateNavbar();
}

for (let i= 1; i <= 9; i++) {
    const callBtn= document.getElementById(`call${i}`);
    const copyBtn= document.getElementById(`copy-button${i}`);
    const heartIcon= document.getElementById(`heart${i}`);
    const card= document.querySelector(`#call${i}`).closest(".card");
    if (callBtn) {
        callBtn.addEventListener("click", () => handleCall(card));
    }
    if (copyBtn) {
        copyBtn.addEventListener("click", () => handleCopy(card.querySelector(".service-number").textContent));
    }
    if (heartIcon) {
        heartIcon.addEventListener("click", handleHeart);
    }
}

clearHistoryBtn?.addEventListener("click", () => {
    historyList.innerHTML = "";
});

clearHistoryBtnSmall?.addEventListener("click", () => {
    historyListSmall.innerHTML = "";
});