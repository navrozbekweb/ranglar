const randomBtnEl = document.querySelector("#random-btn");
const body = document.body;
const h1El = document.querySelector("h1"); 

randomBtnEl.style = `
    padding: 20px 35px;
    border: 1px solid blue;
    border-radius: 10px;
    color: blue;
    cursor: pointer;
    font-size: 16px;
`;

function getRandomHex() {
    const r1 = Math.trunc(Math.random() * 256);
    const g1 = Math.trunc(Math.random() * 256);
    const b1 = Math.trunc(Math.random() * 256);

    const r2 = Math.trunc(Math.random() * 256);
    const g2 = Math.trunc(Math.random() * 256);
    const b2 = Math.trunc(Math.random() * 256);

    const r3 = Math.trunc(Math.random() * 256);
    const g3 = Math.trunc(Math.random() * 256);
    const b3 = Math.trunc(Math.random() * 256);

    const color1 = `rgb(${r1}, ${g1}, ${b1})`;
    const color2 = `rgb(${r2}, ${g2}, ${b2})`;
    const color3 = `rgb(${r3}, ${g3}, ${b3})`;

    const gradientColor = `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`;

    body.style.background = gradientColor;

    h1El.textContent = `${color1} + ${color2} + ${color3}`;
}