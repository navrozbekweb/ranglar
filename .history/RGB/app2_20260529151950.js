const randomBtnEl = document.querySelector("#random-btn");
const body = document.body;
const h1El = document.querySelector("h1"); 
randomBtnEl.style = `
    padding: 20px 35px;
    border: 1px solid blue;
    border-radius: 10px;
    color: ;
    cursor: pointer;
    font-size: 16px;
`;

function getRandomHex() {
    const r = Math.trunc(Math.random() * 256);
    const g = Math.trunc(Math.random() * 256);
    const b = Math.trunc(Math.random() * 256);

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

    body.style = `
        background-color: ${rgbColor};
    `;

        h1El.textContent = rgbColor;
    
}