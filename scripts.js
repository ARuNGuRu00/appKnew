let state=0;
let serve_state=0;
let company_state=0;
let about_state=0;

function noptions(){
    if(state===0){
        state=1;
        document.getElementById('options').style.display="block";
    }
    else if(state===1){
        state=0;
        document.getElementById('options').style.display="none";
    }
    
}

function serve(){
    if (serve_state===0){
        document.getElementById('serve-option').style.display="block";
        document.getElementById('serve').innerHTML="SERVICES<span>-</span>";
        serve_state=1;
    }
    else if (serve_state===1){
        document.getElementById('serve-option').style.display="none";
        document.getElementById('serve').innerHTML="SERVICES<span>+</span>";
        serve_state=0;
    }
}

function company(){
    if (company_state===0){
        document.getElementById('company-option').style.display="block";
        document.getElementById('company').innerHTML="COMPANY<span>-</span>";
        company_state=1;
    }
    else if (company_state===1){
        document.getElementById('company-option').style.display="none";
        document.getElementById('company').innerHTML="COMPANY<span>+</span>";
        company_state=0;
    }
}

function about(){
    if (about_state===0){
        document.getElementById('about-option').style.display="block";
        document.getElementById('about').innerHTML="ABOUT<span>-</span>";
        about_state=1;
    }
    else if (about_state===1){
        document.getElementById('about-option').style.display="none";
        document.getElementById('about').innerHTML="ABOUT<span>+</span>";
        about_state=0;
    }
}