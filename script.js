document.getElementById("main-textarea").addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        document.getElementById("main-textarea").innerHTML="";
    }
});