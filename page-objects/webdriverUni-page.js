class WebDriverUniversity {
    contactUsLink(){
        return $('//*[@id="contact-us"]');
    }
    firstNameInput(){
        return $('#contact_form > input:nth-child(1)');
    }
    lastNameInput(){
        return $('#contact_form > input:nth-child(2)');
    }
    emailInput(){
        return $('#contact_form > input:nth-child(3)');
    }
    commentsInput(){
        return $('#contact_form > textarea');
    }
    submitButton(){
        return $('#form_buttons > input:nth-child(2)');
    }
    resetButton(){
        return $('#form_buttons > input:nth-child(1)')
    }
}

module.exports = new WebDriverUniversity();