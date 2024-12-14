// Chatbot functionality
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');
const chatbotMessages = document.getElementById('chatbot-messages');

// Toggle chatbot visibility
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('hidden');
    chatbotToggle.textContent = chatbotWindow.classList.contains('hidden')
        ? 'Open Chatbot'
        : 'Close Chatbot';
});

// Handle sending messages
chatbotSend.addEventListener('click', () => {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
        appendMessage('User', userMessage);
        chatbotInput.value = '';

        // Simulate chatbot response
        setTimeout(() => {
            const botResponse = getChatbotResponse(userMessage);
            appendMessage('Chatbot', botResponse);
        }, 1000);
    }
});

// Function to append messages to the chat
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender.toLowerCase());
    messageElement.textContent = `${sender}: ${message}`;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto-scroll to the bottom
}

// Basic chatbot responses
function getChatbotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Example responses
    if (lowerCaseMessage.includes('hello')) {
        return 'Hello! How can I assist you today?';
    } else if (lowerCaseMessage.includes('recipe')) {
        return 'Looking for recipes? Tell me what cuisine or ingredient you need!';
    } else if (lowerCaseMessage.includes('coins')) {
        return 'You can earn coins by exploring recipes and completing challenges!';
    } else {
        return "I'm here to help! Ask me anything about cooking, recipes, or this platform.";
    }
}
// Tips data
const kitchenTips = [
    "Keep your knives sharp to make chopping easier and safer.",
    "Store herbs in a jar with water in the fridge to keep them fresh longer.",
    "Use a damp cloth under your cutting board to prevent slipping.",
    "Clean as you cook to save time and reduce mess.",
    "Freeze leftover sauces in ice cube trays for quick single-serving portions.",
];

// Add event listeners to features
document.querySelector('.features').addEventListener('click', (event) => {
    const target = event.target.closest('.feature');
    if (!target) return;

    const id = target.id;
    if (id === 'kitchen') {
        // Populate Kitchen Tips section
        const tipsList = document.getElementById('kitchen-tips-list');
        tipsList.innerHTML = ""; // Clear previous tips
        kitchenTips.forEach((tip) => {
            const listItem = document.createElement('li');
            listItem.textContent = tip;
            tipsList.appendChild(listItem);
        });

        // Show Kitchen Tips section
        document.querySelectorAll('section').forEach((section) => {
            section.classList.add('hidden');
        });
        document.getElementById('tips-display').classList.remove('hidden');
    }
});

// Back button functionality
function goBack() {
    document.querySelectorAll('section').forEach((section) => {
        section.classList.add('hidden');
    });
    document.querySelector('.features').classList.remove('hidden');
}
// Function to handle video upload and display
function loadVideo(event) {
    const videoFile = event.target.files[0];
    const videoElement = document.getElementById('uploaded-video');

    if (videoFile) {
        const videoURL = URL.createObjectURL(videoFile);
        videoElement.src = videoURL;
        videoElement.style.display = 'block';
    }
}

// Video Upload Button Click Event
document.getElementById('video-upload-button').addEventListener('click', () => {
    document.getElementById('video-upload').click();
});
