window.addEventListener("load", () => {
    const switchBtn = document.querySelector(".header-switch");
    const switchOnBtn = document.querySelector(".switch-on")
    const switchOffBtn = document.querySelector(".switch-off")
    const monthlyValuesContainer = document.querySelectorAll(".monthly")
    const annuallyValuesContainer = document.querySelectorAll(".annually")

    switchBtn.addEventListener("click", () => {
        switchToggleOn("show-switch", switchOnBtn, monthlyValuesContainer, annuallyValuesContainer);
        switchToggleOff("hide-switch", switchOffBtn);
    })

    function switchToggleOn(className, btn, monthlyPrices, annualPrices) {
        btn.classList.toggle(className);

        const amountPrices = monthlyPrices.length;
        for(let i = 0 ; i < amountPrices; i++) {
            monthlyPrices[i].classList.toggle("show-prices");
            annualPrices[i].classList.toggle("hide-prices"); 
        }
    }

    function switchToggleOff(className, btn) {
        btn.classList.toggle(className);
    }
})

