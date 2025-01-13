window.onload = function() 
{
    const pics = [
        {
            url: 'https://sta.uwi.edu/wp-content/uploads/2024/09/visit-main.jpg',
            name: 'Bursary'
        },
        {
            url: 'https://libraries.sta.uwi.edu/assets/images/ajl.jpg',
            name: 'Library'
        },
        {
            url: 'https://fastly.4sqi.net/img/general/600x600/80750884_2EDxu1BpN9EnGT5rrjTK5nbhmlHqHOTQXcZnLz8LPnY.jpg',
            name: 'Tennis Court'
        },
        {
            url: 'https://sta.uwi.edu/cpo/images/PICT1187_000.JPG',
            name: 'TLC'
        },
        {
            url: 'https://sta.uwi.edu/sites/all/themes/dms/images/dms-9.jpg',
            name: 'Management Studies'
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeAHlIBiB4tD9BwTJfTg6GMwOpRILhsPQlVQ&s',
            name: 'SAC'
        },
        {
            url: 'https://d3f013qimivxj3.cloudfront.net/uwigamechangers.com/wp-content/uploads/2022/07/25220257/48530847836_a10b6c15e9_o-1-1-1024x683.jpg',
            name: 'FST'
        },
        {
            url: 'https://sta.uwi.edu/sites/default/files/electrical/contact-us.jpg',
            name: 'Mechanical Engineering'
        }
    ];

    const pic = document.querySelector('section');
    let correctAnswer = ""; // Define globally for dynamic updates

    function showImage() 
    {
        var a = Math.floor(Math.random() * pics.length);
        var img = pics[a];
        correctAnswer = img.name.toLowerCase(); // Update correct answer
        console.log("Random image index:", a);
        console.log("Selected image URL:", img.url);
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

    function checkGuess() 
    {
        const userGuess = guessInput.value.toLowerCase(); // Solve case sensitivity

        // Validate input
        if (!/^[a-z]+$/i.test(userGuess)) 
        {
            resultDiv.textContent = 'Breds...enter a proper word for meh PLZ';
            resultDiv.style.color = 'red';
            return;
        }

        // Increment guess count
        guessCount++;

        // Check if the guess is correct
        if (userGuess === correctAnswer) 
        {
            resultDiv.textContent = `Correct!`;
            resultDiv.style.color = 'green';
            endGame(); // Stop further guesses
        } else if (guessCount === maxGuesses) {
            // If the user has used all guesses
            resultDiv.textContent = `Game over! The correct answer was "${correctAnswer}".`;
            resultDiv.style.color = 'red';
            endGame(); // Stop further guesses
        } else {
            resultDiv.textContent = `Ways, try again dey real quick...yuh have ${maxGuesses - guessCount} tries left!`;
            resultDiv.style.color = 'orange';
        }

        // Clear the input field
        guessInput.value = '';
    }

    // Function to end the game
    function endGame() 
    {
        guessInput.disabled = true; // Disable input field
        submitButton.disabled = true; // Disable button
        resultDiv.style.fontWeight = 'bold'; // Highlight the result
    }

    // Add event listener to the button
    submitButton.addEventListener('click', checkGuess);
};


