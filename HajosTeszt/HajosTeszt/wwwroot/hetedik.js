var kérdések;
var kérdés;
var aktuáliskérdés;
var kérdésSorszám = 1;
var jovalasz;


function letöltés() {
    console.log("Fetching all")
    fetch('/questions/all')
        .then(response => response.json())
        .then(data => { kérdésSorszám = data.length });
}


function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}


function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d
    kérdésMegjelenítés(1);
}


function kérdésMegjelenítés(kérdés) {
    aktuáliskérdés = kérdés;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;

    if (kérdés.image != "") {
        kép1.src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        kép1.src = "";
    }
}


jovalasz = kérdésSorszám.correctAnswer;

function elsőválasz() {
    
    if (jovalasz == 1) {
        document.getElementById("válasz1").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz1").style.background = "red";        
    }
}

function másodikválasz() {
    
    if (jovalasz == 2) {
        document.getElementById("válasz2").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz2").style.background = "red";
    }
}

function harmadikválasz() {
    
    if (jovalasz == 3) {
        document.getElementById("válasz3").style.background = "darkgreen";
    }
    else {
        document.getElementById("válasz3").style.background = "red";
    }
}


function alapszínezés() {
    document.getElementById("válasz1").style.background = "white";
    document.getElementById("válasz2").style.background = "white";
    document.getElementById("válasz3").style.background = "white";
}


window.onload = () => {
    letöltés();
    kérdésBetöltés(kérdésSorszám)

}


id = 1;
function előre() {
    alapszínezés();
    id++
    if (id <= kérdésSorszám - 1) {
        kérdésBetöltés(id);
    }
    else {
        id = 1;
        kérdésBetöltés(id);
    }
}

function vissza() {
    alapszínezés();
    id--
    if (id >= 1) {
        kérdésBetöltés(id);
    }
    else {
        id = kérdésSorszám - 1;
        kérdésBetöltés(id);
    }
}