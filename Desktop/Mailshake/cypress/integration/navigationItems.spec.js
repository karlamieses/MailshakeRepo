/// <reference types="cypress" />

describe('Side navigation items', () => {
    beforeEach(() => {
        cy.visit('https://app.mailshake.com/49761/dashboard')
        cy.fixture('credentials.json').then((credentials) => {
            cy.clickOnElement(0).type(credentials.email)
            cy.clickOnElement(1).type(credentials.password)
            cy.contains('Log In').click()
        })
    })

    it('Validates user is taken to Dashboard upon login', () => {
        cy.checkURL('/dashboard')
    })
    it('Validates navigation items from the Prospects segment', () => {
        //Click on Prospects Main item
        cy.getNavItem(1)
        cy.checkURL('/prospects/all')
        //Click on Prospects second item
        cy.getNavItem(2)
        cy.checkURL('/prospects/all')
        //Click on Unsubscribes        
        cy.getNavItem(3)
        cy.checkURL('/prospects/unsubscribes')
    })
    it('Validates navigation items from the Campaigns segment', () => {
        //Click on Campaigns Main item
        cy.getNavItem(2)
        cy.checkURL('/campaigns/all')
        //Click on Campaigns second item
        cy.getNavItem(3)
        cy.checkURL('/campaigns/all')
        //Click on Lead-Catcher      
        cy.getNavItem(4)
        cy.checkURL('/campaigns/lead-catcher')
        //Click on Templates     
        cy.getNavItem(5)
        cy.checkURL('/campaigns/templates')
    })
    it('Validates navigation items from the Mail accounts segment', () => {
        //Click on Mail Account Main item
        cy.getNavItem(3)
        cy.checkURL('/mail-accounts/all')
        //Click on Mail Account second item
        cy.getNavItem(4)
        cy.checkURL('mail-accounts/all')
        //Click on Sending Calendar    
        cy.getNavItem(5)
        cy.checkURL('/mail-accounts/90936/sending-calendar')
    })
    it('Validates navigation items from the Reports segment', () => {
        //Click on Reports item
        cy.getNavItem(4)
        cy.checkURL('/reports/all')
        //Click on Reports item
        cy.getNavItem(5)
        cy.checkURL('/reports/all')
        //Click on Productivity 
        cy.getNavItem(6)
        cy.checkURL('/reports/productivity')
        //Click on Engagements
        cy.get('[class="side-brand ng-star-inserted"]').click()
        cy.getNavItem(4)
        cy.getNavItem(7)
        cy.checkURL('/reports/engagements')
        //Reload Dashboard to get dead elements
        cy.get('[class="side-brand ng-star-inserted"]').click()
        // //Click on Lead Catcher
        cy.getNavItem(4)
        cy.getNavItem(8)
        cy.checkURL('/reports/lead-catcher')
        //Reload Dashboard to get dead elements
        cy.get('[class="side-brand ng-star-inserted"]').click()
        // //Click on Lead Drivers
        cy.getNavItem(4)
        cy.getNavItem(9)
        cy.checkURL('/reports/lead-drivers')
    })
    it('Validates navigation items from the Integration segment', () => {
        //Click on Integrations item
        cy.getNavItem(5)
        cy.checkURL('/integrations/all')
        //Click on Reports item
        cy.getNavItem(6)
        cy.checkURL('/integrations/all')
        //Click on Conversion Tracking 
        cy.getNavItem(7)
        cy.checkURL('integrations/mailshake-js')
    })
    it('Validates navigation items from the Settings segment', () => {
        //Click on Settings item
        cy.getNavItem(6)
        cy.checkURL('/settings/me')
        //Click on My Settings item
        cy.getNavItem(7)
        cy.checkURL('/settings/me')
    })
    it('Validates Tools navigation item', () => {
        //Click on Tools item
        cy.getNavItem(7)
        cy.checkURL('/tools')
    })
    it('Validates + icon item', () => {
        //Click on the + icon
        cy.get('[class="mat-focus-indicator mat-fab mat-button-base mat-accent"]').click()
        //Click on New Campaign button     
        cy.get('[class="mat-button-wrapper"]').last().click()
        cy.checkURL('/campaigns/wizard/')
    })
})
