var allPages = document.querySelectorAll('#tab-content div[id^="page-"]');
var nextBtn = document.getElementById('next');
var previusBtn = document.getElementById('previous');

var totalPages = allPages.length;
var currentPageIndex = 0;

function hideAllPages(pages) {
    pages.forEach((page) => {
        page.classList.add('hidden');
    });
}

function showAllPages(pages) {
    pages.forEach((page) => {
        page.classList.remove('hidden');
    });
}

function hideElement(id) {
    document.getElementById(id).classList.add('hidden')
}

function showElement(id) {
    document.getElementById(id).classList.remove('hidden');
}

hideAllPages(allPages);
showElement('page-' + (currentPageIndex + 1));

if (currentPageIndex == 0) {
    hideElement('previous');
}

nextBtn.onclick = function () {
    currentPageIndex += 1;
    hideAllPages(allPages);
    showElement('page-' + (currentPageIndex + 1));

    if (currentPageIndex > 0) {
        showElement('previous');
    }

    if (currentPageIndex == totalPages - 1) {
        hideElement('next');
    }
}

previusBtn.onclick = function () {
    currentPageIndex -= 1;
    hideAllPages(allPages);
    showElement('page-' + (currentPageIndex + 1));

    if (currentPageIndex == 0) {
        hideElement('previous');
    }

    if (currentPageIndex > 0) {
        showElement('previous');
    }

    if (currentPageIndex == totalPages - 1) {
        hideElement('next');
    }

    if (currentPageIndex < totalPages - 1) {
        showElement('next');
    }
}