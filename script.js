


document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.photo-gallery');
    // Assuming your photoUrls array is already defined
    const photoUrls = [
,'photo_2024-03-17_11-17-01.jpg'
,'photo_2024-03-17_11-17-01.jpg'
,'photo_2024-03-17_11-17-01.jpg'
,'photo_2024-03-17_11-17-01.jpg'
    ,'photo_2024-03-17_11-17-01.jpg'
    ,'photo_2024-03-17_11-17-01.jpg'];
    photoUrls.forEach((url, index) => {
        let photoDiv = document.createElement('div');
        photoDiv.className = 'photo';
        let flipContainer = document.createElement('div');
        flipContainer.className = 'flip-container';

        let photoImg = document.createElement('img');
        photoImg.src = url;
        photoImg.alt = `Meme Photo ${index + 1}`;

        flipContainer.appendChild(photoImg);
        photoDiv.appendChild(flipContainer);
        gallery.appendChild(photoDiv);
    });

    // This part remains unchanged
    setInterval(() => {
        document.querySelectorAll('.flip-container').forEach(container => {
            container.classList.toggle('flipped');
        });
    }, 15000); // Continue to flip and now spin every 5 seconds
});



document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('dynamic-text');
    // Array of sentences to display
    const sentences = [
        "Text",
        "here",
        "again",
        
    ];
    let currentSentenceIndex = 0; // Tracker for the current sentence

    function displayNextSentence() {
        // Display the current sentence
        textElement.textContent = sentences[currentSentenceIndex];
        // Make text visible
        textElement.style.opacity = 1;

        // Advance to the next sentence, looping back to the first after the last
        currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length;

        // Hide the text after a delay to prepare for the next sentence
        setTimeout(() => {
            textElement.style.opacity = 0;
        }, 1500); // This controls how long the sentence stays visible before fading out
    }

    // Initial call to start displaying sentences
    displayNextSentence();
    // Set the interval for displaying the next sentence, including fade-out time
    setInterval(displayNextSentence, 2000); // Adjust as needed
});



