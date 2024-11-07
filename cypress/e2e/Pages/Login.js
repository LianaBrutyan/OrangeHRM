import LoginPageElements from "../../Locators/LoginPageelements";

class LoginPage {
 login(username, password) {

  this.type(LoginPageElements.usernameField, username)
  this.type(LoginPageElements.passwordField, password)
  this.button(LoginPageElements.loginButton)
  this.button(LoginPageElements.useraccount)
 }
 button(selector){
  cy.get(selector).click()
 }
 type(selector,text) {
  cy.get(selector).type(text)
 }
}
export default LoginPage
