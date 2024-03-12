document.addEventListener('contextmenu', event => {

    event.preventDefault();

});

let i = 0; 
let txt = 'Hi, my name is Clyde Timothy R. Sumabat, a former Graphic Artist with 4 years in the industry. And also a proud KodeGo Graduate, after the bootcamp, I have learned frontend and backend technologies.';
let speed = 25;


window.onload = function () {
    typeWriter();
    date();
}

function typeWriter(){

    if(i < txt.length){

        document.getElementById('aboutMySelf').innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

    }

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