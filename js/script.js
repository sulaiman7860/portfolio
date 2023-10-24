window.addEventListener("scroll", function () {
    var header = document.getElementById("navbar-id");
    var content = document.getElementById("contentful");

    if (window.pageYOffset > content.offsetTop) {
        header.style.backgroundImage = "linear-gradient(to right , #74ebd5,#ACB6E5)"; 
    } else {
        header.style.backgroundImage = "none";  
    }
});

document.getElementById('button1').addEventListener('click', function() {
    document.getElementById('data1').style.display = 'block';
    document.getElementById('data2').style.display = 'none';
});

document.getElementById('button2').addEventListener('click', function() {
    document.getElementById('data1').style.display = 'none';
    document.getElementById('data2').style.display = 'block';
});