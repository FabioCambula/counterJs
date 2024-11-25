// Funzione per creare elementi DOM
function creaElemento(tagName, className = "", textContent = "", attributes = {}) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    if (textContent) element.textContent = textContent;  

    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }

    return element;
}

// Contenitore principale
const counterContainer = creaElemento("section", "", "", { id: "counterContainer" });
document.body.appendChild(counterContainer);

// Display counter
const display = creaElemento("h1", "", "0", { id: "totale" });
counterContainer.appendChild(display);

// Pulsanti
const btnIncrease = creaElemento("button", "btnIncrease", "+", { "data-action": "btnIncrease" });
const btnReset = creaElemento("button", "btnReset", "Reset", { "data-action": "btnReset" });
const btnDecrease = creaElemento("button", "btnDecrease", "-", { "data-action": "btnDecrease" });
const btnSave = creaElemento("button", "btnSave", "Salva valore", { "data-action": "btnSave" });
const btnRemove = creaElemento("button", "btnRemove", "Rimuovi ultimo valore", { "data-action": "btnRemove" });
const btnClearList = creaElemento("button", "btnClearList", "Pulisci lista", { "data-action": "btnClearList" });

// Lista per i valori salvati
const lista = creaElemento("ul", "", "", { id: "valoreSalvato" });
counterContainer.appendChild(lista);

function aggiungiElemento(valore) {
    const li = creaElemento("li", "", valore);
    lista.appendChild(li);
}

// Contenitore pulsanti
const controls = creaElemento("div", "", "", { id: "controls" });
controls.append(btnIncrease, btnReset, btnDecrease, btnSave, btnRemove, btnClearList);
counterContainer.appendChild(controls);

// Variabile numero
let numero = parseInt(display.textContent);

class Menu {
    constructor(elem) {
        this._elem = elem;
        elem.onclick = this.onClick.bind(this);
    }

    btnIncrease() {
        display.textContent = ++numero;
    }

    btnReset() {
        numero = 0;
        display.textContent = numero;
    }

    btnDecrease() {
        if (numero > 0) {
            display.textContent = --numero;
        }
    }

    btnSave() {
        if (numero > 0) {
            aggiungiElemento(numero);
        }
    }

    btnRemove() {
        if (lista.lastChild) {
            lista.removeChild(lista.lastChild);
        }
    }

    btnClearList() {
        lista.innerHTML = "";
    }

    onClick(event) {
        let action = event.target.dataset.action;
        if (action && typeof this[action] === "function") {
            this[action]();
        }
    }
}

// Inizializza il menu
new Menu(document.getElementById('controls'));