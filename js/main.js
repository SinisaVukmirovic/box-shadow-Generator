import { optionsInputs, previewPanel, previewElement, codeOutput, copyBtn } from "./DOMelems.js";
import './copyCode.js';
import './displayIndicators.js';

const generateBoxShadow = () => {
    copyBtn.textContent = 'Copy';

    const xDirection = document.querySelector('[data-x-direction]').value;
    const yDirection = document.querySelector('[data-y-direction]').value;
    const blur = document.querySelector('[data-blur]').value;
    const spread = document.querySelector('[data-spread]').value;
    const shadowColor = document.querySelector('[data-shadow-color]').value;
    const inset = document.querySelector('[data-inset]').checked;

    const boxShadow = `${xDirection}px ${yDirection}px ${blur}px ${spread}px`;
    previewElement.style.boxShadow = `${inset ? 'inset' : ''} ${boxShadow} ${shadowColor}`;

    const panelBg = document.querySelector('[data-panel-bg]').value;
    previewPanel.style.background = panelBg;
    const elementBg = document.querySelector('[data-element-bg]').value;
    previewElement.style.background = elementBg;
    const borderRadius = document.querySelector('[data-border-radius]').value;
    previewElement.style.borderRadius = `${borderRadius}%`;

    codeOutput.textContent = `box-shadow: ${inset ? 'inset' : ''} ${boxShadow} ${shadowColor};`;
}

optionsInputs.forEach(input => {
    input.addEventListener('input', generateBoxShadow);
});

// const copyBtn = document.querySelector('[data-copy]');

// const copyCode = () => {
//     copyBtn.textContent = 'Code Copied!';

//     const cssCode = codeOutput.textContent;

//     navigator.clipboard.writeText(cssCode).then(() => {
//         console.log('Code copied');
//     }, (err) => {
//         console.log('Couldn\'t copy code', err);
//     });
// }

// copyBtn.addEventListener('click', copyCode);

generateBoxShadow();