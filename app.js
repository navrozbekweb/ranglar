const randomBtnEl = document.querySelector("#random-btn");
const body = document.body;
const h1El = document.querySelector("h1"); 

console.log(randomBtnEl);


randomBtnEl.style = `
    padding:20px 35px;
    border:1px solid blue;
    border-radius:10px;
    color:blue;
    cursor:pointer;
`;

function getRandomHex() {
    const hexColor = "abcdef0123456789";

    let hex = "#";

    for (let i = 0; i < 6; i++) {
        hex += hexColor[Math.trunc(Math.random() * 16)];
    }

    body.style = `
    background-color:${hex};
    `;
            h1El.textContent = hex;

}