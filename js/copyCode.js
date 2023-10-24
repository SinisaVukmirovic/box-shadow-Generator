import { codeOutput, copyBtn } from "./DOMelems.js";

// const copyBtn = document.querySelector('[data-copy]');

const copyCode = () => {
    copyBtn.textContent = 'Code Copied!';

    const cssCode = codeOutput.textContent;

    navigator.clipboard.writeText(cssCode).then(() => {
        console.log('Code copied');
    }, (err) => {
        console.log('Couldn\'t copy code', err);
    });
}

copyBtn.addEventListener('click', copyCode);