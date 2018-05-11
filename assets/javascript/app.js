// Jump to Top Button 
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("go-to-top").style.display = "block";
        } else {
            document.getElementById("go-to-top").style.display = "none";
        }
    }
