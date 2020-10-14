module.exports = {
    url: ('https://www.athensford.com/'),
    elements: {
        new: {
            selector: '(//option[@value="Type:N"])[1]',
            locateStrategy: 'xpath',
        },
        used: {
            selector: '(//option[@value="Type:U"])[1]',
            locateStrategy: 'xpath'
        },
        certified: {
            selector: '(//option[@value="Cpo:true"])[1]',
            locateStrategy: 'xpath'
        },  
        year21: {
            selector: '//option[@value="2021"]',
            locateStrategy: 'xpath'
        },
        year20: {
            selector: '//option[@value="2020"]',
            locateStrategy: 'xpath'
        },
        year19: {
            selector: '//option[@value="2019"]',
            locateStrategy: 'xpath'
        },
        make: {
            selector: '(//option[@value="Ford"])[1]',
            locateStrategy: 'xpath'
        },

        mustang: {
            selector: '(//option[@value="Mustang"])',
            locateStrategy: 'xpath',
        },  
        f150: {
            selector: '(//option[@value="F-150"])',
            locateStrategy: 'xpath',
        },
        explorer: {
            selector: '(//option[@value="Explorer"])',
            locateStrategy: 'xpath',
        },
        search: {
                selector: '//a[@id="submit_button_basic_search"]',
                locateStrategy: 'xpath'
            },
        home: {
            selector: '#homePage'
        }


        }
    
}