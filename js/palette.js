// ==================================================================== //
        // Палетка с пустыми квадратиками
const emptyPalette = document.querySelector(".mosaic-palette");
        // Some helper functions to render palette items
createEmptyPaletteItems();

function createEmptyPaletteItems() {
    const itemsEmpty = [];
    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            const itemEmpty = document.createElement("button");
            itemEmpty.type = "button";
            itemEmpty.classList.add("item-empty");
            itemsEmpty.push(itemEmpty);
        }
    }
    emptyPalette.append(...itemsEmpty);
}


// ==================================================================== //
        // Палитра с цветами
const colorPalette = document.querySelector(".color-palette");



const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
    if (event.target.nodeName !== "BUTTON") {
        return;
    }

    const selectedColor = event.target.dataset.color;
    output.textContent = `Selected color: ${selectedColor}`;
    output.style.color = selectedColor;
}


const colorsPaletteItems = ["#fff", "#B0B0AF", "#B5E61D", "#92D25D", "#22B14C", "#FF553D", "#FFAEC9", "#C8BFE7", "#00A2E8", "#3F48CC", "#FFF200", "#FFB64E", "#000", "#FE70A7", "#A349A4", "#B97A57", "rgba(255, 255, 255, 0)"];

function createColorPaletteItems() {
    const itemsColor = [];
    for (let i = 0; i < colorsPaletteItems.length; i++) {
        const color = colorsPaletteItems[i];
        const itemColor = document.createElement("button");
        itemColor.type = "button";
        itemColor.dataset.color = color;
        itemColor.style.backgroundColor = color;
        itemColor.classList.add("item-color");
        itemsColor.push(itemColor);

        if (i == colorsPaletteItems.length - 1) {
      // Set background image for the last element
            itemColor.style.backgroundImage = "url('./img/clear_button.png')";
            itemColor.style.backgroundSize = "cover";
            itemColor.style.backgroundPosition = "center";
            // itemColor.style.border = "none";
      // Ensure transparency with background-color
            itemColor.style.backgroundColor = "rgba(255, 255, 255, 0)";  
        } else {
            itemColor.style.backgroundColor = color;
        }
    }
    colorPalette.append(...itemsColor);
}

createColorPaletteItems();




const inputColor = document.querySelector(".input-color");

inputColor.addEventListener("click", sendColor);

function sendColor(event) {
    if (event.target.classList.contains("item-empty")) {
        // Check if clicked element has class "item-empty"
        const currentColor = output.style.color; // Get current color from output
   
        event.target.style.backgroundColor = currentColor;
    }
}
