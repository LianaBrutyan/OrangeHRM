import LoginPageElements from "../../Locators/LoginPageelements";

class SuccessfulLogin {
    assertsuccessfulLogin ()
   {
       cy.get(LoginPageElements.useraccount).should('be.visible')
       cy.get(LoginPageElements.dashboard).should('be.visible')
    }
}
 export default SuccessfulLogin
