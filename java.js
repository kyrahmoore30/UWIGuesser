document.addEventListener('DOMContentLoaded', function () {
    const pics = [
        {
            url: 'https://sta.uwi.edu/wp-content/uploads/2024/09/visit-main.jpg',
            name: 'Bursary',
        },
        {
            url: 'https://libraries.sta.uwi.edu/assets/images/ajl.jpg',
            name: 'Library',
        },
        {
            url: 'https://fastly.4sqi.net/img/general/600x600/80750884_2EDxu1BpN9EnGT5rrjTK5nbhmlHqHOTQXcZnLz8LPnY.jpg',
            name: 'Tennis Court',
        },
        {
            url: 'https://sta.uwi.edu/cpo/images/PICT1187_000.JPG',
            name: 'TLC',
        },
        {
            url: 'https://sta.uwi.edu/sites/all/themes/dms/images/dms-9.jpg',
            name: 'Management Studies',
        },
        {
            url: 'https://d3f013qimivxj3.cloudfront.net/uwigamechangers.com/wp-content/uploads/2022/07/25195234/37739132_10155920129383893_6703545394653036544_n-1024x723.jpg',
            name: 'SAC',
        },
        {
            url: 'https://d3f013qimivxj3.cloudfront.net/uwigamechangers.com/wp-content/uploads/2022/07/25220257/48530847836_a10b6c15e9_o-1-1-1024x683.jpg',
            name: 'FST',
        },
        {
            url: 'https://live.staticflickr.com/6148/6032999416_0205f445b2_b.jpg',
            name: 'Mechanical Engineering',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfE3eBbFfYPFKF7tF9yDNTMKl_7vWivowtTA&s',
            name: 'SPEC'
        }
    ];

    const pic = document.querySelector('section');
    let lastImageIndex = -1;

    let correctAnswer = '';
    let remainingSeconds = 180;
    let countdownInterval = null;

    // Function to show a random image
    function showImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * pics.length);
    } while (randomIndex === lastImageIndex); // Ensure a new image is selected

    lastImageIndex = randomIndex; // Update last shown image index
    const img = pics[randomIndex];
    correctAnswer = img.name.toLowerCase();
    pic.style.backgroundImage = `url('${img.url}')`;
    pic.style.backgroundSize = 'cover';
    pic.style.backgroundPosition = 'center';
}

    showImage();

    const refreshButton = document.getElementById('refreshButton');
    refreshButton.addEventListener('click', showImage);

    const guessInput = document.getElementById('guessInput');
    const submitButton = document.getElementById('submitGuess');
    const resultDiv = document.getElementById('result');
    let guessCount = 0;
    const maxGuesses = 3;

    // Function to check the guess
    function checkGuess() 
    {
        const userGuess = guessInput.value.toLowerCase();
        guessCount++;
        if (userGuess === correctAnswer) {
            resultDiv.textContent = 'Correct!';
            resultDiv.style.color = 'green';
            stopCountdown();
            resetCountdown();

        } else if (guessCount === maxGuesses) {
            resultDiv.textContent = `Game over! The correct answer was "${correctAnswer}".`;
            resultDiv.style.color = 'red';
            stopCountdown();
            resetCountdown();

        } else {
            resultDiv.textContent = `Wrong! You have ${maxGuesses - guessCount} guesses left.`;
            resultDiv.style.color = 'orange';
        }
        guessInput.value = '';
    }

    submitButton.addEventListener('click', checkGuess);

    // Countdown timer functions

    const countdownDisplay = document.getElementById('countdownDisplay');
    function updateCountdownDisplay() 
    {
        const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
        const seconds = (remainingSeconds % 60).toString().padStart(2, '0');
        if (countdownDisplay) {
            countdownDisplay.textContent = `${minutes}:${seconds}`;
        } else {
            console.error("Countdown display element not found!");
        }
    }

    function startCountdown() 
    {
        if (!countdownInterval) 
        {
            updateCountdownDisplay();
            countdownInterval = setInterval(() => {
                remainingSeconds--;
                updateCountdownDisplay();
                if (remainingSeconds <= 0) 
                {
                    clearInterval(countdownInterval);
                    countdownInterval = null;
                    alert("Time's up!");
                }
            }, 1000);
        }
    }

    startCountdown();
});
