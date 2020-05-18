let  togglenavstatus = false;

let togglenav = function () {
    let getsidebar = document.querySelector(".sidebar");
    let getSideBarUl = document.querySelector(".sidebar ul");
    let getSideBarlist = document.querySelector(".sidebar li");
    let getavengerslink = document.querySelectorAll(".ff a")

    if (togglenavstatus === false){
        getSideBarUl.style.visibility = "visible";
        getSideBarlist.style.visibility = "visible";
        getsidebar.style.width = "40vmin";
        getsidebar.style.background = "rgba(0,0,0,0.9)";

        let arraylength = getavengerslink.length;
            for(let i = 0; i < arraylength; i++){
                getavengerslink[i].style.opacity = "1";
            }

        togglenavstatus = true;
    }
    else if (togglenavstatus === true){
        getsidebar.style.width = "0px";
        getSideBarUl.style.visibility = "hidden";
        getSideBarlist.style.visibility = "hidden";
        getsidebar.style.background = "rgba(0,0,0,0.0)";

        let arraylength = getavengerslink.length;
            for(let i = 0; i < arraylength; i++){
                getavengerslink[i].style.opacity = "0";
            }
        togglenavstatus = false;
    }
}

let avengersstatus = false;

let dropdownavengers = function () {
    let getavengers = document.querySelector(".ff");
    let getavengerslink = document.querySelectorAll(".ff a")

    if(avengersstatus === false){
        getavengers.style.visibility = "visible";
        getavengers.style.marginBottom = "0px";


        let arraylength = getavengerslink.length;
            for(let i = 0; i < arraylength; i++){
                getavengerslink[i].style.opacity = "1";
            }
            avengersstatus = true;
        }
    else if(avengersstatus === true){
        getavengers.style.visibility = "hidden";
        getavengers.style.marginBottom = "-110px";

        let arraylength = getavengerslink.length;
            for(let i = 0; i < arraylength; i++){
                getavengerslink[i].style.opacity = "0";
            }

        avengersstatus = false;
    }
}