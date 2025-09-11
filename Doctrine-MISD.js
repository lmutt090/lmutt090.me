function showPopup(username) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}
function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}
function redirectToDiscord() {
    window.open("dm/disc", "_blank");
    window.location.href = "https://discord.com/users/1286383453016686705";
}
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const message = document.getElementById('feedbackInput').value;
    let sssender = document.getElementById('feedbackSender').value;
    const status = document.getElementById('feedbackStatus');
    if (!message.trim()) {
        status.textContent = "Please enter a message.";
        return;
    }
    if (!sssender.trim()) {
        sssender = "Unknown/Anonymized Person"
    }
    const ws = new WebSocket('wss://example.com');
    ws.onopen = function () {
        ws.send(JSON.stringify({ type: 'feedback', smessage: message, msender: sssender }));
        status.textContent = "Feedback sent!";
        document.getElementById('feedbackInput').value = '';
        ws.close();
    };
    ws.onerror = function (error) {
        console.error('WebSocket Error:', error); // Log the error to the console for debugging
        status.textContent = `Error sending feedback: ${error.message || error}`; // Display error message to the user
    };
});