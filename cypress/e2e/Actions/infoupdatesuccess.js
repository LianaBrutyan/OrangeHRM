import {MyInfoelements} from "../../Locators/MyInfoelements";

class MyInfosuccess {

    success() {
        cy.on('window:alert', (text) => {
            expect(text).to.equal('Successfully updated')
        })
    }

    Asserteditedvisible(){
        cy.get(MyInfoelements.visibleuser).should('be.visible')
    }
}

export default MyInfosuccess
