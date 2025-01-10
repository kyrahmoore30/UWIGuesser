window.onload = function() 
{
    const pics = [
        'https://sta.uwi.edu/wp-content/uploads/2024/09/visit-main.jpg', 
        'https://libraries.sta.uwi.edu/assets/images/ajl.jpg'
    ];

    const pic = document.querySelector('section');

    function showImage() 
    {
        var a = Math.floor(Math.random() * pics.length);
        var img = pics[a];
        console.log("Random image index:", a);
        console.log("Selected image URL:", img);
        pic.style.backgroundImage = `url('${img}')`;
        pic.style.backgroundSize = 'cover'; // Ensure it covers the section
        pic.style.backgroundPosition = 'center'; // Ensure the image is centered
    }

    showImage();
    
    const refreshButton = document.getElementById('refreshButton');
    refreshButton.addEventListener('click', showImage);
};


