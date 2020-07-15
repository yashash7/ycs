function datetoday() {
    let today = new Date();
    let date = today.getDate();
    let month = today.getUTCMonth()+1;
    let year = today.getFullYear();
    let a = (date + "-" + month + "-" + year);
    console.log(a);
    document.getElementById('dt').innerHTML = 'Date:  ' + a;
}
datetoday()