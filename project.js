document.addEventListener('contextmenu', event => {

    event.preventDefault();

});

window.onload = function () {
    date();
}

function date(){

    let date = new Date().toDateString();

    document.getElementById('navDate').innerHTML = date;


}

function email(){

    let mail = 'soapmac19@yahoo.com.ph';
    let subject = "We Want To Hire You";
    let mailTo = "mailto:" + mail + "?subject=" + subject;

    window.location.assign(mailTo);
}