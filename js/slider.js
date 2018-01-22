const updateAfterContainer = () => {
    const afterContainer = document.getElementsByClassName('afterContainer')[0];
    afterContainer.value = 50;
    return e => afterContainer.style.width = `${e.target.value}%`;
};

const slider = document.getElementById('slider');

slider.addEventListener('input', updateAfterContainer());