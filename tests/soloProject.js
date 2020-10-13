var ford 
module.exports = {
    beforEach: browser => {
        ford = browser.page.soloObj()
        ford
        .navigate()
    },
    after: browser => {
        browser.ford
    },

    'project': browser => {
        ford
        .click('@new')
        .click('@year20')
        .click('@make')
        .click('@mustang')
        .click('@search')
        .verify.urlEquals('https://www.athensford.com/searchnew.aspx?Type=N&Year=2020&Make=Ford&Model=Mustang')
        .click('@home')
        .click('@new')
        .click('@year20')
        .click('@make')
        .click('@f150')
        .click('@search')
        .verify.urlEquals('https://www.athensford.com/searchnew.aspx?Type=N&Year=2020&Make=Ford&Model=F-150')
        .click('@home')
        .click('@certified')
        .click('@year20')
        .click('@make')
        .click('@explorer')
        .click('@search')
        .verify.urlEquals('https://www.athensford.com/searchused.aspx?Cpo=true&Year=2020&Make=Ford&Model=Explorer')
        .click('@home')
        .click('@used')
        .click('@year19')
        .click('@make')
        // .click('@f150')
        .click('@search')
        .verify.urlEquals('https://www.athensford.com/searchused.aspx?Type=U&Year=2019&Make=Ford')
        .pause(3000)
        
    }

}