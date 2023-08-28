const body = document.getElementById("body");
const fullDate = document.getElementById("date")

function getDate(){
    const date = new Date() ;
    const day = date.getDate();
    const month = date.getMonth()+1;
    const year = date.getFullYear();

    fullDate.innerHTML =day + " / " + month + " / " + year;
}

// getDate()

function getTime(){
    getDate()
    const time = new Date();
    const h = time.getHours() 
    const m = time.getMinutes() 
    const s = time.getSeconds() 

    body.innerHTML=h + " : "+m + " : " +s;
}

setInterval(getTime , 1000)