window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("main-nav").style.display = "block";
    }, 2000); // 2 second splash
});
