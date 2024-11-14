/// <reference types="cypress" />

describe('Agenda de Contatos - Testes de Funcionalidade', () => {
    const baseUrl = 'https://agenda-contatos-react.vercel.app/';
    
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('Deve adicionar um novo contato', () => {
      cy.get('input').should('have.length', 3);
      
      cy.get('input[placeholder="Nome"]').type('Wilfredo');
      cy.get('input[placeholder="Telefone"]').type('24257875');
      cy.get('input[placeholder="E-mail"]').type('wilfredo@example.com');
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Wilfredo').should('exist');
      cy.contains('24257875').should('exist');
      cy.contains('wilfredo@example.com').should('exist');
      
      cy.screenshot('adicionar-contato-wilfredo');
    });
  
    it('Deve adicionar um novo contato', () => {
      cy.get('input').should('have.length', 3); 
      
      cy.get('input[placeholder="Nome"]').type('Angelica');
      cy.get('input[placeholder="Telefone"]').type('24789633');
      cy.get('input[placeholder="E-mail"]').type('Angelica@example.com');
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Angelica').should('exist');
      cy.contains('24789633').should('exist');
      cy.contains('Angelica@example.com').should('exist');
      
      cy.screenshot('adicionar-contato-Angelica');
    });
  
    it('Deve adicionar um novo contato', () => {
      cy.get('input').should('have.length', 3); 
      
      cy.get('input[placeholder="Nome"]').type('Wilmer');
      cy.get('input[placeholder="Telefone"]').type('28782521');
      cy.get('input[placeholder="E-mail"]').type('Wilmer@example.com');
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Wilmer').should('exist');
      cy.contains('28782521').should('exist');
      cy.contains('Wilmer@example.com').should('exist');
      
      cy.screenshot('adicionar-contato-Wilmer');
    });
  
    it('Deve adicionar um novo contato', () => {
      cy.get('input').should('have.length', 3); 
      
      cy.get('input[placeholder="Nome"]').type('Andres');
      cy.get('input[placeholder="Telefone"]').type('123456789');
      cy.get('input[placeholder="E-mail"]').type('Andres@example.com');
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Andres').should('exist');
      cy.contains('123456789').should('exist');
      cy.contains('Andres@example.com').should('exist');
      
      cy.screenshot('adicionar-contato-Andres');
    });
  
    it('Deve editar o terceiro contato na lista', () => {
      cy.get('input').should('have.length', 3); 
      
      cy.get(':nth-child(3) > .sc-gueYoa > .edit').click();
      cy.get('input[placeholder="Nome"]').clear().type('Alfredo');
      cy.get('input[placeholder="E-mail"]').clear().type('Alfredo@example.com');
      cy.get('input[placeholder="Telefone"]').clear().type('479852854');
      cy.contains('button', 'Salvar').click();
      
      cy.contains('Alfredo').should('exist');
      cy.contains('Alfredo@example.com').should('exist');
      cy.contains('479852854').should('exist');
      
      cy.screenshot('editar-contato-cruzeiro');
    });
  
    it('Deve remover o quinto contato na lista', () => {

      cy.get('input').should('have.length', 3); 
      
      cy.on('window:confirm', () => true);
      cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();
      cy.wait(1000);
      cy.contains('Nome do Contato').should('not.exist');
      
      cy.screenshot('remover-contato');
    });
  });