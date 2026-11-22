class FeedbackRequest {
    constructor(name, email, topic, message, agreed) {
        this.name = name;
        this.email = email;
        this.topic = topic;
        this.message = message;
        this.agreed = agreed;
    }

    print() {
        const agreed = this.agreed ? 'да' : 'нет';

        console.log(
            [
                'Сообщение с формы обратной связи',
                `Имя:        ${this.name}`,
                `Email:      ${this.email}`,
                `Тема:       ${this.topic}`,
                `Сообщение:  ${this.message}`,
                `Согласие:   ${agreed}`,
            ].join('\n')
        );
    }
}
