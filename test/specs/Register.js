//https://stage.pasv.us/user/register

const {expect} = require ('chai');

const user = {
     firstName : 'John',
     lastName : 'Smirnov',
     password : 5233279,
     phone : 14245029099,
     email : Math.random()+'smirkos2@gmail.com',
     about : 'da dad da ad',
     goals : 'eat sleep code',
     language : 'Native',
};

const URL = 'https://stage.pasv.us/user/register';
const URL_LOGIN = 'https://stage.pasv.us/user/login';

const pageRegister = {
    title : 'Progress Monitor',
    h1 : 'User Register',
    description : 'Profiles with fictitious or dummy data will be deleted.',
    buttonText : 'Submit',
};

const pageLogin = {
    title : 'Progress Monitor',
    h1 : 'User Login',
};

const pageConfirmation = {
    h1 : 'You are a new user',
};

const pageRegisterSelectors = {
    h1 : 'h1' ,
    descr : 'p',
    submitButtom : 'form button[type="submit"]',
    firstNameInput : 'form input[name="firstName"]',
    lastNameInput : 'form input[name="lastName"]',
    phoneInput : 'form input[name="phone"]',
    emailInput : 'form input[name="email"]',
    passwordInput : 'form input[name="password"]',
    aboutInput : 'form textarea[name="about"]',
    goalsInput : 'form textarea[name="goals"]',
    englishLevelInput : 'form select[name="englishLevel"]',
};


describe('Register page', () => {

    it('should have the right title', () => {
        browser.url(URL);
        const actualTitle = browser.getTitle();
        const expectedTitle = pageRegister.title;
        expect(actualTitle).equal(expectedTitle);
    })

     it('it should have right h1', () => {
             const actualH1text = $('h1').getText();
             const expectedH1text = pageRegister.h1;
             expect(actualH1text).equal(expectedH1text);

    })
        it('it should have correct describtion', () => {
            const actual = $(pageRegisterSelectors.descr).getText();
            const expected = pageRegister.description;
            expect(actual).equal(expected);
        })

        it('it should have right button text', () => {
            const actual = $(pageRegisterSelectors.submitButtom).getText();
            const expected = pageRegister.buttonText;
            expect(actual).equal(expected);
        })

        it('it should fill First name', () => {
            const element = $(pageRegisterSelectors.firstNameInput);
            element.setValue(user.firstName);
        });

        it('it should fill Last name', () => {
            const element = $(pageRegisterSelectors.lastNameInput);
            element.setValue(user.lastName);
        });

        it('it should fill phone', () => {
            const element = $(pageRegisterSelectors.phoneInput);
            element.setValue(user.phone);
        });

        it('it should fill email', () => {
            const element = $(pageRegisterSelectors.emailInput);
            element.setValue(user.email);

        });


        it('it should fill password', () => {
            const element = $(pageRegisterSelectors.passwordInput);
            element.setValue(user.password);

        });

        it('it should fill about', () => {
            const element = $(pageRegisterSelectors.aboutInput);
            element.setValue(user.about);
        });

        it('it should fill goals', () => {
            const element = $(pageRegisterSelectors.goalsInput);
            element.setValue(user.goals);
        });

        it('it should choose EL dropdown', () => {
            const element = $(pageRegisterSelectors.englishLevelInput);
            element.selectByVisibleText(user.language);
        });

        it('should click submit B', () => {
            const element = $('form button[type="Submit"]');
            element.click();
            browser.pause(1000)
        });
        
    });

    describe('Login page', () => {
        before(() => {
            browser.url(URL_LOGIN)
        });

        it('should have the right title', () => {
            const actualTitle = browser.getTitle();
            const expectedTitle = pageLogin.title;
            expect(actualTitle).equal(expectedTitle);
        })
        it('it should have right h1', () => {
            const actualH1text = $('h1').getText();
            const expectedH1text = pageLogin.h1;
            expect(actualH1text).equal(expectedH1text);

        })

        it('should fill email field', () => {
            const element = $('form input[name="email"]');
            element.setValue(user.email);
            browser.pause()
        });

        it('should fill pass field ', () => {
            const element = $('form input[name="password"]');
            element.setValue(user.password);
            browser.pause()
        });

        it('should click login Button', () => {
            const element = $('form button[type="submit"]');
            element.click();
            browser.pause(2000)
        });
    });

    describe('confirmation page', () => {
        it('should have the right title', () => {
            const actualTitle = $('h1').getText();
            const expectedTitle = pageConfirmation.h1;
            expect(actualTitle).equal(expectedTitle);

        });
    });





