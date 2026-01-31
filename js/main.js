document.querySelectorAll('.rule-title').forEach(title => {
    title.addEventListener('click', () => {
        title.parentElement.classList.toggle('open');
    });
});

