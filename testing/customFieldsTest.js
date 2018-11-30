const data = require('../sources/data')
//const functions = require('../sources/functions')

module.exports = {
    before: browser => {
        //browser.url('https://admin.saleshub.io/users/login')
    },
    after: browser => {
        browser.end()
    },

    'Add Custom Field': (browser) => {
        //functions.login(browser, data)
        let addCustomField = browser.page.addCustomField();
        addCustomField.navigate()
            .waitForElementVisible('@companyURL', 5000)
            .waitForElementVisible('@username', 5000)
            .waitForElementVisible('@password', 5000)
            .setValue('@companyURL', data.company)
            .setValue('@username', data.username)
            .setValue('@password', data.password)
            .waitForElementVisible('@loginButton', 5000)
            .click('@loginButton')
            .waitForElementVisible('@salesHub', 5000)
            
    }
}