import { optionsInputs } from "./DOMelems.js";

const generateBoxShadow = () => {
    console.log('sdfs')
}

optionsInputs.forEach(input => {
    input.addEventListener('input', generateBoxShadow);
});
