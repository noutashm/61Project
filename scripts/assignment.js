// var page1Next = document.getElementById("page-1-next")
// var page2Next = document.getElementById("page-2-next")
// var page2Previous = document.getElementById("page-2-previous")
// var page3Next = document.getElementById("page-3-next")
// var page3Previous = document.getElementById("page-3-previous")
// var page4Previous = document.getElementById("page-4-previous")


// var someTabTriggerEl = document.querySelector('#someTabTrigger')
// var tab = new bootstrap.Tab(someTabTriggerEl)

// tab.show()

var tabList = document.querySelectorAll('.nav-tabs button')
//console.log(tabList)

var tabList1 = [].slice.call(document.querySelectorAll('.nav-tabs button'))
//console.log(tabList1)

for (var i = 0; i < tabList.length; i++) {
    if (tabList[i].className == 'nav-link active') {
        i++
        nextItem = tabList[i]
        document.querySelector('.next').onclick = function () {
            nextItem.click()
            i++
            console.log(tabList[i])
        }
    }
}

// tabList.forEach(function (list, index) {
//     //console.log(list)
//     if (list.className == 'nav-link active') {
//         let nextItem = list.nextElementSibling
//         let previousItem = list.previousElementSibling
//         document.querySelector('.next').onclick = function () {
//             nextItem.click()

//             console.log()
//         }
//         if (previousItem !== null) {
//             document.querySelector('.previous').onclick = function () {
//                 previousItem.click()
//             }
//         }
//     }
// })