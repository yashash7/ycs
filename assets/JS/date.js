function datetoday() {
    const today = new Date();
    const date = today.getDate();
    const month = today.getUTCMonth()+1;
    const year = today.getFullYear();
    const a = (date + "-" + month + "-" + year);
    console.log(a);
    document.getElementById('dt').innerHTML = 'Date:  ' + a;
}
datetoday()