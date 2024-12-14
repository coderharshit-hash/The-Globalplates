document.addEventListener('DOMContentLoaded', () => {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const chatbotResponses = [
        "Hello! How can I assist you today?",
        "What kind of recipes are you looking for?",
        "Did you know you can earn coins by using our platform?",
        "Try our kitchen tips for better cooking!",
        "You can redeem your coins for exciting vouchers!",
        "Looking for vegetarian recipes? Let me help you!",
        "Want some dessert ideas? I have plenty!",
        "Cooking for kids? Check out our kid-friendly recipes.",
        "I can help you find recipes based on ingredients you have.",
        "Need help with meal planning? Let’s get started!",
        "Our chatbot is powered by AI for better suggestions.",
        "Do you want to explore new cuisines?",
        "How about some quick 30-minute recipes?",
        "Looking for healthy options? I’ve got you covered.",
        "Try our top-rated recipes by users.",
        "What’s your favorite cuisine? Let’s explore it.",
        "Need tips for baking? Ask me anything!",
        "I can guide you on portion sizes for your meals.",
        "Do you need help with cooking techniques?",
        "What’s your comfort food? Let’s find a recipe.",
        "Want to impress guests with your cooking? Let’s find something special.",
        "Looking for festive recipes? I’ve got ideas for every occasion.",
        "Need help with substitutions in recipes?",
        "I can give you tips for reducing food waste.",
        "Want to learn some advanced cooking skills?",
        "Let me recommend some seasonal recipes.",
        "What’s your favorite spice? Let’s explore its uses.",
        "Are you looking for low-carb recipes?",
        "Do you want to make homemade sauces or dressings?",
        "Need help with grilling? I’ve got tips for you.",
        "Looking for one-pot meals? They’re easy and convenient.",
        "Do you need help organizing your pantry?",
        "Want to make your own bread or pizza dough?",
        "Let’s find recipes for your slow cooker or instant pot.",
        "Need ideas for a romantic dinner?",
        "Want to experiment with fusion cuisine?",
        "Do you have dietary restrictions? Let me assist.",
        "Looking for budget-friendly meal ideas?",
        "How about some quick breakfast recipes?",
        "I’m here to help you become a better cook!"
    ];

    // Add message to chat window
    function addMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = sender;
        messageDiv.textContent = message;
        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Auto-scroll to the bottom
    }

    // Handle user input and bot responses
    sendButton.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage('user', userMessage);
            userInput.value = '';

            // Respond with a random chatbot response
            const botResponse = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)];
            setTimeout(() => addMessage('bot', botResponse), 500); // Delay for realism
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendButton.click();
    });
});
