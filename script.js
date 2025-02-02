window.onload = function () {
    const buttons = document.querySelectorAll('.accordion-button');
    const contents = document.querySelectorAll('.accordion-content');

    console.log('buttons', buttons);

    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {
            const content = contents[index];

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
}