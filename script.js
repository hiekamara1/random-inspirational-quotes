//DOM Elements

const texts = document.querySelector("#text");
const authors = document.querySelector("author");
const newBtn = document.querySelector("#new-btn");
const subBtn = document.querySelectorAll(".sub-btn");
const body = document.getElementById("body");
const quoteBox = document.querySelector("#quote-box");
const encagedElement = document.querySelectorAll(".encaged-element");

const loadedQuote = quoteBox[0];
const nextQuote = quoteBox[1];

const backgroundColor = [
    "#aa4f4f99",
    "#cc884099",
    "#b5a49299",
    "#cdd95b99",
    "#b4c706e4",
    "#77c706e4",
    "#a3bd7ee4",
    "#93f20ee4",
    "#0ef212e4",
    "#099171e4",
    "#0baddce4",
    "#1721ebe4",
    "#7a38d6e4",
];

const randomBGC = Math.floor(Math.random() * 13);
const thrustOut = randomBGC[backgroundColor]

newBtn.addEventListener("click", (e) => {
    if (e.key) {
        loadedQuote.classList.toggle("rotateA");
        nextQuote.classList.toggle("rotateB");
        quoteBox.style["background-color"] = thrustOut;
        randomQuote();
    }
});

document.addEventListener("DOMContentLoaded", randomQuote);

const randomQuote = () => {
    const dataIndex = Math.floor(Math.random * data.length);
    let text = data[dataIndex].text;
    let author = data[dataIndex].author;
    let bg = data[dataIndex].bg

    texts.innerHTML = text;
    authors.innerHTML = author;
}


async function fetchQuote() {
    fetch("/dataURL.json")
    .then(function(response) {
        return response.json;
    })
    .then(function(data) {
        this.data = data;
        randomQuote()
    })
}