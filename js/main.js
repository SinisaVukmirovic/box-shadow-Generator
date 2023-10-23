import { optionsInputs, previewElement } from "./DOMelems.js";

const generateBoxShadow = () => {
    const xDirection = document.querySelector('[data-x-direction]').value;
    const yDirection = document.querySelector('[data-y-direction]').value;
    const blur = document.querySelector('[data-blur]').value;
    const spread = document.querySelector('[data-spread]').value;
    const shadowColor = document.querySelector('[data-shadow-color]').value;
    const inset = document.querySelector('[data-inset]').checked;

    const boxShadow = `${xDirection}px ${yDirection}px ${blur}px ${spread}px`;
    
    previewElement.style.boxShadow = `${inset ? 'inset' : ''} ${boxShadow} ${shadowColor}`;
}

optionsInputs.forEach(input => {
    input.addEventListener('input', generateBoxShadow);
});

generateBoxShadow()
