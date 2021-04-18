// Part 2
var bSecondTxt = document.getElementById('b-second-txt')

var i = 0;

setTimeout(function () { typingEffect('ARTISTIC \n ODESSEY? \n VINEYARD \n VOYAGE?', bSecondTxt) }, 1500)

function typingEffect(txt, place) {
    if (i < txt.length) {
        place.innerHTML += txt.charAt(i);
        i++;
        setTimeout(function () { typingEffect(txt, place) }, 50)
    }
}

// Part 3
var allPages = document.querySelectorAll('.tab-content div[id^="page-"]')
var nextBtn = document.getElementById('next')
var previousBtn = document.getElementById('previous')
var submitBtn = document.getElementById('submit')
var progressBar = document.getElementById('progress-bar')

var firstName = document.getElementById('firstname')
var lastName = document.getElementById('lastname')
var date = document.getElementById('date')
var cookingTrue = document.getElementById('cooking-yes')
var cookingFalse = document.getElementById('cooking-no')
var peopleNumber = document.getElementById('people-number')
var equipment = document.getElementById('equipment')
var color = document.getElementById('color')
var numOfDays = document.getElementById('days-number')
var email = document.getElementById('email')
var agreement = document.getElementById('agreement')

var submitBtn = document.getElementById('submit')
var summaryLocation = document.getElementById('summary')

// 4 Pages Setup
var totalPages = allPages.length
var currentPageIndex = 0

function hideAllPages(pages) {
    pages.forEach((page) => {
        page.classList.add('hidden')
    })
}

function showAllPages(pages) {
    pages.forEach((page) => {
        page.classList.remove('hidden')
    })
}

function hideElement(id) {
    document.getElementById(id).classList.add('hidden')
}

function showElement(id) {
    document.getElementById(id).classList.remove('hidden')
}

hideAllPages(allPages)
showElement('page-' + (currentPageIndex + 1))

if (currentPageIndex == 0) {
    hideElement('previous')
}

if (currentPageIndex != 4) {
    hideElement('submit')
}

nextBtn.onclick = function () {
    currentPageIndex += 1
    hideAllPages(allPages)
    showElement('page-' + (currentPageIndex + 1))

    if (currentPageIndex > 0) {
        showElement('previous')
    }

    conditions()
}

previousBtn.onclick = function () {
    currentPageIndex -= 1
    hideAllPages(allPages)
    showElement('page-' + (currentPageIndex + 1))

    if (currentPageIndex == 0) {
        hideElement('previous')
    }

    if (currentPageIndex > 0) {
        showElement('previous')
    }

    if (currentPageIndex < totalPages - 1) {
        showElement('next')
    }

    conditions()
}

function conditions() {
    if (currentPageIndex == totalPages - 1) {
        hideElement('next')
        showElement('submit')
    } else {
        hideElement('submit')
    }

    switch (currentPageIndex) {
        case 0:
            progressBar.style.width = '25%'
            progressBar.innerHTML = '25%'
            break;
        case 1:
            progressBar.style.width = '50%'
            progressBar.innerHTML = '50%'
            break;
        case 2:
            progressBar.style.width = '75%'
            progressBar.innerHTML = '75%'
            break;
        case 3:
            progressBar.style.width = '100%'
            progressBar.innerHTML = '100%'
            break;
    }
}

//Data Handling

submitBtn.onclick = function () {
    var cookingBooked = ''
    if (cookingTrue.checked == true) {
        cookingBooked = 'Yes'
    } else {
        cookingBooked = 'No'
    }

    agree = ''
    if (agreement.checked == true) {
        agree = 'Yes'
    } else {
        agree = 'No'
    }

    summaryLocation.innerHTML =
        'Name : ' + firstName.value + ' ' + lastName.value +
        '<br>Email : ' + email.value +
        '<br>Booking Date : ' + date.value +
        '<br>Stay Duration : ' + numOfDays.value + ' Days' +
        '<br>Number of People : ' + peopleNumber.value +
        '<br>Equipment Booked : ' + equipment.value +
        '<br>Cooking Facilities Booked : ' + cookingBooked +
        '<br>Prefered Flower Color : ' + '<input type="color" value="' + color.value + '">' +
        '<br>Do you agree with local native conservative initiative agreement : ' + agree
}

// Clear form on refresh
function clearFormInputs() {
    firstName.value = ''
    lastName.value = ''
    date.value = ''
    cookingTrue.checked = false
    cookingFalse.checked = true
    peopleNumber.value = '1'
    equipment.selectedIndex = 0
    numOfDays.value = ''
    email.value = ''
    agreement.checked = false
    summaryLocation.value = ''
}

window.onload = clearFormInputs();