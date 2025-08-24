window.onload = () => {
    const faqItems = document.querySelectorAll('.faq-container')
    new App(faqItems)
}

class App {
    constructor(faqItems) {
        faqItems.forEach((item, index) => new FaqItem(item, index === 0))
    }
}

class FaqItem {
    constructor(container, isExpanded = false) {
        this.element = container
        this.expandButton = container.querySelector('.faq-expand-button')
        this.closeButton = container.querySelector('.faq-close-button')
        this.answer = container.querySelector('.faq-answer')
        this.faqQuestionRowContainer = container.querySelector('.faq-question-row-container')
        this.isExpanded = isExpanded

        if (this.isExpanded) {
            this.expand()
        }

        this.faqQuestionRowContainer.addEventListener('click', event => this.toggleExpansion(event))
        this.expandButton.addEventListener('click', event => this.expand(event))
        this.closeButton.addEventListener('click', event => this.close(event))
    }

    toggleExpansion() {
        if (this.isExpanded) {
            this.close()
        } else {
            this.expand()
        }

        this.isExpanded = !this.isExpanded
    }

    expand() {
        this.answer.classList.add('show')
        this.closeButton.classList.add('show')
        this.expandButton.classList.add('hide')
    }

    close() {
        this.answer.classList.remove('show')
        this.closeButton.classList.remove('show')
        this.expandButton.classList.remove('hide')
    }
}

