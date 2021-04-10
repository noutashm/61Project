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

tabList.forEach(function (list, index) {
    //console.log(list)
    if (list.className == 'nav-link active') {
        console.log(index)
        let nextItem = list.nextElementSibling
        let previousItem = list.previousElementSibling
        //console.log(nextItem)
        document.querySelector('.next').onclick = function () {
            while (index > -1) {
                nextItem.click()
                index++
            }
        }
        if (previousItem !== null) {
            document.querySelector('.previous').onclick = function () {
                previousItem.click()
            }
        }
    }
})