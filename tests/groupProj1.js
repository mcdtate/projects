var blue
module.exports = {
    beforEach: browser => {
        blue = browser.page.groupProjPage()
        blue
            .navigate()

    },
    after: browser => {
        browser.blue
    },
    'group project': browser => {
        blue
            .pause(2000)
            .click('@menu')
            .verify.urlEquals('https://www.blueapron.com/pages/sample-recipes')
            .click('@pricing')
            .verify.urlEquals('https://www.blueapron.com/pricing')
            .pause(100)
            .click('@vision')
            .verify.urlEquals('https://www.blueapron.com/pages/vision')
            .pause(2000)
            .click('@wine')
            .verify.urlEquals('https://www.blueapron.com/wine')
            .click('@market')
            .verify.urlEquals('https://www.blueapron.com/market')
            .click('@gifts')
            .verify.urlEquals('https://www.blueapron.com/gifts')
            .click('@blog')
            .verify.urlEquals('https://blog.blueapron.com/')
            .click('@home')
            .verify.urlEquals('https://www.blueapron.com/?utm_source=organic&utm_medium=blog&utm_campaign=blog')
            .click('@cookbook')
            .verify.urlEquals('https://www.blueapron.com/cookbook')
            .click('@suppliers')
            .verify.urlEquals('https://www.blueapron.com/pages/meet-our-recent-partners')
            .click('@affiliates')
            .verify.urlEquals('https://www.blueapron.com/pages/affiliates')
            .click('@supply')
            .verify.urlEquals('https://www.blueapron.com/pages/supply-chain-disclosure')
            .click('@safety')
            .verify.urlEquals('https://blog.blueapron.com/foodsafety/')
            .click('@home')
            .verify.urlEquals('https://www.blueapron.com/?utm_source=organic&utm_medium=blog&utm_campaign=blog')
            .click('@careers')
            .verify.urlEquals('https://www.blueapron.com/pages/our-team')
            .click('@press')
            .verify.urlEquals('https://press.blueapron.com/')
            .click('@home2')
            .click('@team')
            .verify.urlEquals('https://www.blueapron.com/pages/our-team')
            .click('@investor')
            .verify.urlEquals('https://investors.blueapron.com/')
            .click('@home3')
            .click('@help')
            .verify.urlEquals('https://support.blueapron.com/hc/en-us')
            


    }
}