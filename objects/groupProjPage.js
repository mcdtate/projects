module.exports = {
    url: 'https://www.blueapron.com/',
    elements:{
        menu: {
            selector: '(//a[@data-tracking-name="On The Menu"])[3]',
            locateStrategy: 'xpath'},
        pricing: {
            selector: '(//a[@data-tracking-name="Pricing"])[3]',
            locateStrategy: 'xpath'},
         vision: {
            selector: '//a[@href="/pages/vision"]',
            locateStrategy: 'xpath'},
         wine: {
          selector: '(//a[@data-tracking-name="Wine"])[3]',
          locateStrategy: 'xpath'},
        market: {
            selector: '(//a[@data-tracking-name="Shop"])[3]',
            locateStrategy: 'xpath'},
        gifts: {
            selector: '(//a[@data-tracking-name="Gifts"])[3]',
            locateStrategy: 'xpath'},
        blog: {
            selector: '//a[@data-tracking-name="Blog"]',
            locateStrategy: 'xpath'},
        cookbook: {
            selector: '//a[@data-tracking-name="Cookbook"]',
            locateStrategy: 'xpath'},
        suppliers: {
            selector: '//a[@href="/pages/meet-our-recent-partners"]',
            locateStrategy: 'xpath'},
        affiliates: {
            selector: '//a[@data-tracking-name="Affiliates"]',
            locateStrategy: 'xpath'},
        supply: {
            selector: '//a[@href="/pages/supply-chain-disclosure"]',
            locateStrategy: 'xpath'},
        safety: {
            selector: '//a[@href="http://blog.blueapron.com/foodsafety/"]',
            locateStrategy: 'xpath'},
        careers: {
            selector: '//a[@href="/pages/our-team"]',
            locateStrategy: 'xpath'},
        press: 'a[data-tracking-name="Press"]',
        team: 'a[data-tracking-name="Our Team"]',
        investor: { 
                selector: '//a[@href="https://investors.blueapron.com"]',
                locateStrategy: 'xpath'},
        help: {
            selector: '//a[@href="https://support.blueapron.com"]',
            locateStrategy: 'xpath'},
        home: {
            selector: '//a[@class="elementor-button-link elementor-button elementor-size-sm"][1]',
            locateStrategy: 'xpath'},
        home2: {
            selector: '//a[@title="Blue Apron Holdings, Inc."]',
            locateStrategy: 'xpath'},
        home3: {
            selector: '//a[@href="https://blueapron.com"][1]',
            locateStrategy: 'xpath' 
        }
        }

    
}