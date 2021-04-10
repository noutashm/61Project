// var page1Next = document.getElementById("page-1-next")
// var page2Next = document.getElementById("page-2-next")
// var page2Previous = document.getElementById("page-2-previous")
// var page3Next = document.getElementById("page-3-next")
// var page3Previous = document.getElementById("page-3-previous")
// var page4Previous = document.getElementById("page-4-previous")

// var progressBar = document.getElementById('progress-bar')

// page1Next.onclick = function () {
//     document.querySelector('#page-2-tab').click()
//     progressBar.style.width = '50%'
//     progressBar.innerHTML = '50%'
// }

// page2Next.onclick = function () {
//     document.querySelector('#page-3-tab').click()
//     progressBar.style.width = '75%'
//     progressBar.innerHTML = '75%'
// }

// page3Next.onclick = function () {
//     document.querySelector('#page-4-tab').click()
//     progressBar.style.width = '100%'
//     progressBar.innerHTML = '100%'
// }

// page2Previous.onclick = function () {
//     document.querySelector('#page-1-tab').click()
//     progressBar.style.width = '25%'
//     progressBar.innerHTML = '25%'
// }

// page3Previous.onclick = function () {
//     document.querySelector('#page-2-tab').click()
//     progressBar.style.width = '50%'
//     progressBar.innerHTML = '50%'
// }

// page4Previous.onclick = function () {
//     document.querySelector('#page-3-tab').click()
//     progressBar.style.width = '75%'
//     progressBar.innerHTML = '75%'
// }


// var someTabTriggerEl = document.querySelector('#someTabTrigger')
// var tab = new bootstrap.Tab(someTabTriggerEl)

// tab.show()


//console.log(tabList)

// var tabList1 = [].slice.call(document.querySelectorAll('.nav-tabs button'))
// console.log(tabList1)

// for (var i = 0; i < tabList.length; i++) {
//     if (tabList[i].className == 'nav-link active') {
//         i++
//         nextItem = tabList[i]
//         document.querySelector('.next').onclick = function () {
//             nextItem.click()
//             console.log(i)
//             //i++
//             //console.log(tabList[i])
//         }
//     }
// }

// function checkCurrentTab() {
//     tabList.forEach(function (list) {
//         if (list.className == 'nav-link active') {
//             nextItem = list.nextElementSibling
//             var previousItem = list.previousElementSibling
//         }
//     })
//     return nextItem
// }

// document.querySelector('.next').onclick = function () {
//     checkCurrentTab().click()
//     checkCurrentTab()
// }

// tabList.forEach(function (list, index) {
//     //console.log(list)
//     if (list.className == 'nav-link active') {
//         var nextItem = list.nextElementSibling
//         var previousItem = list.previousElementSibling
//         document.querySelector('.next').onclick = function () {
//             nextItem.click()
//             for (var i = 0; i < tabList.length; i++) {
//                 if (tabList[i].className == 'nav-link active') {
//                     i++
//                     nextItem = tabList[i]
//                     console.log(nextItem)
//                 }
//             }
//         }
//         if (previousItem !== null) {
//             document.querySelector('.previous').onclick = function () {

//                 previousItem.click()
//             }
//         }
//     }
// })

var currentTab = [].slice.call(document.querySelectorAll('#nav-tabContent div'))
var tabList = document.querySelectorAll('.nav-tabs button')
var progressBar = document.getElementById('progress-bar')

function changeProgressBar() {
    currentTab.forEach(function (list) {
        console.log(list)
        if (list.className == 'tab-pane fade show active') {
            currentID = list.id
            console.log(currentID)
        }
    })
    switch (currentID) {
        case 'page-1':
            progressBar.style.width = '25%'
            progressBar.innerHTML = '25%'
            break;
        case 'page-2':
            progressBar.style.width = '50%'
            progressBar.innerHTML = '50%'
            break;
        case 'page-3':
            progressBar.style.width = '75%'
            progressBar.innerHTML = '75%'
            break;
        case 'page-4':
            progressBar.style.width = '100%'
            progressBar.innerHTML = '100%'
            break;
    }
}

function clickNextItem() {
    tabList.forEach(function (list) {
        if (list.className == 'nav-link active') {
            nextItem = list.nextElementSibling
        }
    })
    nextItem.click()
}

function clickPreviousButton() {
    tabList.forEach(function (list) {
        if (list.className == 'nav-link active') {
            previousItem = list.previousElementSibling
        }
    })
    previousItem.click()
}

document.querySelector('.next').onclick = function () {
    clickNextItem()
    changeProgressBar()
}

document.querySelector('.previous').onclick = function () {
    clickPreviousButton()
    changeProgressBar()
}

//     progressBar.style.width = '25%'
//     progressBar.innerHTML = '25%'