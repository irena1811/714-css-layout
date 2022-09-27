(function() {

    const clokContainer = document.querySelector('.clok-container');

    function updateClok() {
        clokContainer.innerText = new Date().toLocaleTimeString();
    }

    setInterval(updateClok, 1000);
})();
