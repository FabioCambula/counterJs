const counterContainer = document.getElementById("counterContainer");
// display counter
const display = document.createElement("h1");
display.id = "totale";
display.textContent = 0;
counterContainer.appendChild(display);

//button +
const btnIncrease = document.createElement("button");
btnIncrease.id="btnIncrease"
btnIncrease.textContent = "+";
btnIncrease.addEventListener("click", () => {
    let numero = parseInt(display.textContent);
    display.textContent = ++numero;
});
counterContainer.appendChild(btnIncrease);

//button reset
const btnReset = document.createElement("button");
btnReset.id="btnReset"
btnReset.textContent = "reset";
btnReset.addEventListener("click", () => {
    display.textContent = 0;
});
counterContainer.appendChild(btnReset);

// button -
const btnDecrease = document.createElement("button");
btnDecrease.id="btnDecrease"
btnDecrease.textContent = "-";
btnDecrease.addEventListener("click", () => {
       let numero = parseInt(display.textContent);
    if (numero > 0) {
        display.textContent = --numero;
    }
});
counterContainer.appendChild(btnDecrease);
//button per salvare valore in una lista
const btnSave = document.createElement("button");
btnSave.id="btnSave"
btnSave.textContent="salva valore";
btnSave.addEventListener("click",()=>{
    let numero = parseInt(display.textContent);
    if (numero>0){
        aggiungiElemento(numero);
    }
});
counterContainer.appendChild(btnSave);
//creazione elemento <ul> per lista
const lista = document.createElement("ul");
lista.id = "valoreSalvato";
counterContainer.appendChild(lista);

// Funzione per aggiungere un elemento alla lista
function aggiungiElemento(valore) {
    const li = document.createElement("li");
    li.textContent = valore;
    lista.appendChild(li);
}
//button per rimuovere ultimo elemento dalla lista
const btnRemove = document.createElement("button");
btnRemove.id="btnRemove"
btnRemove.textContent = "rimuovi ultimo valore";
btnRemove.addEventListener("click", () => {
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    }
});
counterContainer.appendChild(btnRemove);

const controls = document.createElement("div");
controls.className = "controls";

// Aggiungi i pulsanti al contenitore "controls"
controls.appendChild(btnIncrease);
controls.appendChild(btnReset);
controls.appendChild(btnDecrease);
controls.appendChild(btnSave);
controls.appendChild(btnRemove);

// Aggiungi il contenitore "controls" al counterContainer
counterContainer.appendChild(controls);
