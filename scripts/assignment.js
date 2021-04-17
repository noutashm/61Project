// Part 2 Animation
function typingEffect(txt) {
    var i = 0;
    if (i < txt.length) {
        document.getElementById("b-first-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typingEffect(txt.length), 50) // TODO:
    }
}

typingEffect("Artistic")


// Part 3
var allPages = document.querySelectorAll('.tab-content div[id^="page-"]')
var nextBtn = document.getElementById('next')
var previousBtn = document.getElementById('previous')
var submitBtn = document.getElementById('submit')
var progressBar = document.getElementById('progress-bar')

var date = document.getElementById('date')
var cookingTrue = document.getElementById('cooking-yes')
var cookingFalse = document.getElementById('cooking-no')
var equipment = document.getElementById('equipment')
var email = document.getElementById('email')
var agreement = document.getElementById('agreement')

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

// Clear form on refresh
function clearFormInputs() {
    date.value = ''
    cookingTrue.checked = false
    cookingFalse.checked = false
    agreement.checked = false
    email.value = ''
    equipment.selectedIndex = 0
}

window.onload = clearFormInputs();