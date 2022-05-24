

let basic = document.getElementById('basic')
let pro = document.getElementById('pro')
let master = document.getElementById('master')

let id = document.getElementsByName('planChanger')[0].id


function priceDiff() {
    if (id == 1) {
        basic.innerText = 199.99;
        pro.innerText = 249.99;
        master.innerText = 399.99;
        id = 0
    }
    else {
        basic.innerText = 19.99;
        pro.innerText = 24.99;
        master.innerText = 39.99;
        id = 1
    }
}







