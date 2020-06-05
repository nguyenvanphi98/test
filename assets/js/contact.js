validateEmail = (email) => {
    var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    return re.test(String(email).toLowerCase());
}

validatePhoneNumber = (phone) => {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(phone).toLowerCase());
}

let inputYourPhone = document.getElementById('txtPhone');
inputYourPhone.onblur = () => {
    var txt = inputYourPhone.value;
    console.log(txt);
    
    if (txt===""){
        document.getElementsByClassName('obligatory__phone')[0].style.display = 'inline-block';
        document.getElementsByClassName('obligatory__phone__erro')[0].style.display = 'none';
    }
    else if (!validatePhoneNumber(txt)){
        document.getElementsByClassName('obligatory__phone__erro')[0].style.display = 'inline-block';
        document.getElementsByClassName('obligatory__phone')[0].style.display = 'none';
    }
    else{
        document.getElementsByClassName('obligatory__phone')[0].style.display = 'none';
        document.getElementsByClassName('obligatory__phone__erro')[0].style.display = 'none';
     }
    
}

let inputYourEmail = document.getElementById('txtEmail');
inputYourEmail.onblur = () => {
    var txt = inputYourEmail.value;
    console.log(txt);
    
    if (txt===""){
        document.getElementsByClassName('obligatory__email')[0].style.display = 'inline-block';
        document.getElementsByClassName('obligatory__email__erro')[0].style.display = 'none';
    }
    else if (!validateEmail(txt)){
        document.getElementsByClassName('obligatory__email__erro')[0].style.display = 'inline-block';
        document.getElementsByClassName('obligatory__email')[0].style.display = 'none';
    }
    else{
        document.getElementsByClassName('obligatory__email')[0].style.display = 'none';
        document.getElementsByClassName('obligatory__email__erro')[0].style.display = 'none';
     }
    
}

let inputYourName = document.getElementById('txtName');
inputYourName.onblur = () => {
    var txt = inputYourName.value;
    if (txt==="")
        document.getElementsByClassName('obligatory__name')[0].style.display = 'inline-block';
    else
        document.getElementsByClassName('obligatory__name')[0].style.display = 'none';
}

let inputYourMessage = document.getElementById('txtContent');
inputYourMessage.onblur = () => {
    var txt = inputYourMessage.value;
    if (txt==="")
        document.getElementsByClassName('obligatory__message')[0].style.display = 'inline-block';
    else
        document.getElementsByClassName('obligatory__message')[0].style.display = 'none';
}