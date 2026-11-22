const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    // сервера пока нет, поэтому страницу не перезагружаем
    event.preventDefault();

    const data = new FormData(form);
    const request = new FeedbackRequest(
        data.get('name'),
        data.get('email'),
        data.get('topic'),
        data.get('message'),
        data.has('agreement')
    );

    request.print();
    form.reset();
});
