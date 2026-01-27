// DOM Manipulation and Event Handling

// Tabs Functionality (Interactive UI)
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active to clicked
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Contact Form Validation and LocalStorage
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.style.color = 'red';
            return;
        }

        if (!email.includes('@')) {
            formMessage.textContent = 'Please enter a valid email.';
            formMessage.style.color = 'red';
            return;
        }

        // Simulate submission and use LocalStorage
        localStorage.setItem('lastInquiry', JSON.stringify({ name, email, message }));
        formMessage.textContent = 'Inquiry submitted! We\'ll get back to you.';
        formMessage.style.color = 'green';

        // Reset form
        contactForm.reset();
    });
}

// Load from LocalStorage on page load (for demo)
window.addEventListener('load', () => {
    const lastInquiry = localStorage.getItem('lastInquiry');
    if (lastInquiry && formMessage) {
        formMessage.textContent = 'Last inquiry saved in LocalStorage.';
        formMessage.style.color = 'blue';
    }
});
