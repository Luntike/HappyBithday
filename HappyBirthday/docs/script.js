function openLetter(){

    const envelope =
        document.querySelector(".envelope");

    const wrapper =
        document.getElementById("envelopeWrapper");

    const card =
        document.getElementById("card");

    // открыть конверт
    envelope.classList.add("open");

    // падение + задержка
    setTimeout(() => {

        wrapper.classList.add("fall");

        // показать открытку
        setTimeout(() => {
            card.classList.add("show");
        }, 800);

    }, 1200);
}