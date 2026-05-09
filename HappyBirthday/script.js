function openLetter(){

    const envelope =
        document.querySelector(".envelope");

    const card =
        document.getElementById("card");

    envelope.classList.add("open");

    setTimeout(() => {

        card.classList.add("show");

    }, 1200);
}