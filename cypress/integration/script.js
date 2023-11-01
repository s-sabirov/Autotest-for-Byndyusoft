it('should find web site', ()=>{   
    cy.visit('https://www.google.com/'); //переход на страницу Google
    cy.get('#APjFqb').type('Byndyusoft').type('{enter}'); //ввод текста и клик на кнопку Enter
    cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > div > span > a')
        .should('have.attr', 'href', 'https://byndyusoft.com/'); //проверка ссылки на сайт
    cy.get('#rso > div:nth-child(1) > div > div > div > div > div > div > div > div.yuRUbf > div > span > a').then((link) => {
        cy.request(link.prop('href')).its('status').should('eq',  200); //проверка кода ответа страницы
    });
});
it('should open web site', ()=>{   
    cy.visit('https://byndyusoft.com/'); //переход на страницу Byndyusoft
    cy.get('.knowMore__container > .btn').click(); //клик по кнопке заказать презентацию    
    cy.get('.popup-callback__contacts-tg')
        .should('have.attr', 'href', 'http://t.me/alexanderbyndyu'); //проверка ссылки на телеграм
});


