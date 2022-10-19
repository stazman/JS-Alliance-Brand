var customerName = "Alliance  ";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;

    let header1 = document.getElementById('tm-header')

    header1.textContent = customerName

    let h2 = document.getElementById('introheader')

    h2.textContent = customerName


};
/*
function toggleColors() {
    let toggClrs = document.getElementsByClassName("tm-white-rect");

    toggClrs.className = "tm-blue-rect";
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->

};
*/
function hideElement() {

    let hidEle = document.querySelector(".tm-social-links")//<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->

    hidEle.style.display = "none"
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->

    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->

     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->

    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->

    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->

};


addCustomerName()
hideElement()