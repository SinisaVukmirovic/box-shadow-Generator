// const justRangeInputs = Array.from(document.querySelectorAll('input[type="range"]'));
const justRangeInputs = document.querySelectorAll('input[type="range"]');

const indicatorsSteps = [
    [-50, -25, 0, 25, 50],
    [-50, -25, 0, 25, 50],
    [0, 10, 20, 30, 40, 50],
    [-50, -25, 0, 25, 50],
    [0, 10, 20, 30, 40, 50],
];

indicatorsSteps.forEach((inds, i = 0) => {
    const indicators = document.createElement('ul');
    indicators.classList.add('indicators');

    inds.forEach(step => {
        const li = document.createElement('li');
        li.append(step);
        indicators.append(li);
    });

    justRangeInputs[i].parentElement.append(indicators);
    i++;
});