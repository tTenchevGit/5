// document.addEventListener('DOMContentLoaded', function() {
//     const gallery = document.querySelector('.photo-gallery');

//     // Assuming you have an array of photo URLs
//     const photoUrls = ['https://static01.nyt.com/images/2022/01/31/crosswords/31meme-wordplay/31meme-wordplay-articleLarge.png?quality=75&auto=webp&disable=upscale'
//     , 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/70e565ff687043e10e150e23d0ae5ea2.png'
//     , 'https://media.cnn.com/api/v1/images/stellar/prod/230721145700-cheezburger-cat-meme.jpg?c=16x9&q=h_833,w_1480,c_fill'
//     ,'asdasdas'
// ,'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/70e565ff687043e10e150e23d0ae5ea2.png'
// ,'https://static01.nyt.com/images/2022/01/31/crosswords/31meme-wordplay/31meme-wordplay-articleLarge.png?quality=75&auto=webp&disable=upscale'
// , 'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/70e565ff687043e10e150e23d0ae5ea2.png'

// ,'https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/70e565ff687043e10e150e23d0ae5ea2.png']; // Add your photo URLs here

//     for (let i = 0; i < 20; i++) { // Creating 10 rows of 3 photos each
//         let photo = document.createElement('div');
//         photo.className = 'photo';
//         photo.innerHTML = `<img src="${photoUrls[i % photoUrls.length]}" alt="Meme Photo">`;
//         gallery.appendChild(photo);
//     }

    
// });


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

// document.addEventListener('DOMContentLoaded', () => {
//     const textElement = document.getElementById('dynamic-text');
//     const sentence = "XA XA NO staking for you!!! "; // Your sentence
//     const words = sentence.split(' '); // Split sentence into words
//     let currentWordIndex = 0; // Tracker for the current word

//     function displayNextWord() {
//         if (currentWordIndex < words.length) {
//             textElement.textContent += words[currentWordIndex] + ' '; // Add next word
//             currentWordIndex++; // Move to next word
//         } else {
//             textElement.textContent = ''; // Reset text
//             currentWordIndex = 0; // Start over
//         }
//     }

//     // Initial call to start displaying words
//     displayNextWord();
//     // Set interval to call function every 3 seconds
//     setInterval(displayNextWord, 1000);
// });

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



