let menu = document.getElementById("navList")
menu.style.maxHeight = "0px";

function toggleMenu(){
    if(menu.style.maxHeight == "0px")
    {
        menu.style.maxHeight = "300px";
    }
    else{
        menu.style.maxHeight = "0px";
    }
}
const listItems = document.querySelectorAll("#navList li");
listItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.style.maxHeight = "0px";
    });
});

document.getElementById('send-button').addEventListener('click', function() {
    sendEmail();
});

function sendEmail() {
    const sendButton = document.getElementById('send-button');
    sendButton.disabled = true;
    sendButton.style.cursor = 'not-allowed';

    emailjs.init('YpzGEhanJZfTZgyLj'); 

    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_2g9wjbe', 'template_dl6wpxp', params)
        .then(function(response) {
            alert('Email sent successfully!');

            document.getElementById('contact-form').reset();

            sendButton.disabled = false;
            sendButton.style.cursor = 'pointer';
        }, function(error) {
            alert('Failed to send email. Try again later.');

            sendButton.disabled = false;
            sendButton.style.cursor = 'pointer';
        });
}

