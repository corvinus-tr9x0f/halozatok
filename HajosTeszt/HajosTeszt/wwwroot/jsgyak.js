window.onload = () => {

    console.log("betöltõdött")

    var faktorialisR = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * faktorialisR(n - 1)
        }
    }

    //Pascal-háromszög

    for (var sor = 0; sor < 10; sor++) {
        var sordiv = document.createElement("div");
        sordiv.classList.add("sor");
        document.getElementById("pascal").appendChild(sordiv);

        for (var oszlop = 0; oszlop <= sor; oszlop++) {
            var elemdiv = document.createElement("div");
            sordiv.appendChild(elemdiv);
            elemdiv.classList.add("elem");
            elemdiv.innerText = faktorialisR(sor) / (faktorialisR(oszlop) * faktorialisR(sor - oszlop));
        }
    }

    //színes szorzótábla

    for (var s = 0; s < 10; s++) {

        let sor = document.createElement("div");
        sor.classList.add("sor");
        document.getElementById("szorzo").appendChild(sor);

        for (var o = 0; o < 10; o++) {

            let oszlop = document.createElement("div");
            oszlop.classList.add("oszlop");
            sor.appendChild(oszlop);
            oszlop.innerText = (s + 1) * (o + 1);
            oszlop.style.background = `rgb(0,${(2 * 255 / oszlop.innerText) + 40},0)`;
            oszlop.style.color = 'white';
        }
    }
}