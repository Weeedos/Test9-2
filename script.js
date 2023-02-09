const vypis = document.querySelector(".vypis");

class Autoservis {
    constructor(jmenoAutoservisu, list) {
        this.jmenoAutoservisu = jmenoAutoservisu;
        this.list = list;
    }

    addAuto(a) {
        list.push(a);
    }

}

class Auto {
    constructor(znacka, najeteKilometry, rokVzniku, model) {
        this.znacka = znacka;
        this.najeteKilometry = najeteKilometry;
        this.rokVzniku = rokVzniku;
        this.model = model;
    }
}

const list = [];
let autoservis = new Autoservis("Autoservis", list);

let a1 = new Auto("skoda", 1560, "2004", "felicia")
let a2 = new Auto("skoda", 1560, "2004", "felicia")
let a3 = new Auto("skoda", 1560, "2004", "felicia")

autoservis.addAuto(a1);
autoservis.addAuto(a2);
autoservis.addAuto(a3);

const ot1 = document.getElementById("vsechnaAuta");
const ot2 = document.getElementById("deleteA");

ot1.addEventListener("click", () => {
    vypis.textContent = "";
    autoservis.list.forEach(Auto => {
        vypis.textContent += "Znacka: " + Auto.znacka + ", najete kilometry: " + Auto.najeteKilometry + " rok vyroby: " + Auto.rokVzniku + ", model: " + Auto.model + " \n";
    })
});
ot2.addEventListener("click", () => {
    if (document.getElementById("autoD").value != null) {
        var i = 0;
        while (i < autoservis.list.length) {
            if (autoservis.list[i].nazev === document.getElementById("autoD").value) {
                autoservis.list.splice(i, 1);
            } else {
                ++i;
            }
        }
    }
})


const addAuto = (ev) => {
    ev.preventDefault();
    let a = new Auto(document.getElementById("znacka").value,
        document.getElementById("kilometry").value,
        String(document.getElementById("rok").value),
        document.getElementById("model").value);
    autoservis.addAuto(a);
    console.log("Auto+");

    document.querySelector(".AutoForm").reset();
}

const buttonSubmitAuto = document.getElementById("submitAuto");
buttonSubmitAuto.addEventListener("click", addAuto);
