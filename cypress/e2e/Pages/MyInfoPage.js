import {MyInfoelements} from "../../Locators/MyInfoelements";

class MyInfoPage {
    manu() {
        this.button(MyInfoelements.manubar)
    }
    button(selector){
        cy.get(selector).click()
    }
    type(selector,text){
        cy.get(selector).clear().type(text)
    }
    Myinfo(){
      cy.get(MyInfoelements.myinfo).contains(MyInfoelements.menubarname).click()
    }
    editFirstName(){
      this.type(MyInfoelements.firstname,MyInfoelements.newfirstname)
    }
    editMiddleName(){
        this.type(MyInfoelements.middlename,MyInfoelements.newmiddlename)
    }
    editLastName(){
        this.type(MyInfoelements.lastname,MyInfoelements.newlastname)
    }
    editEmployeeID(){
        cy.get(MyInfoelements.employeeId)
            .parent()
            .siblings('div')
            .find("input")
            .clear().type('7777')
    }
    editOtherId(){
        cy.get(MyInfoelements.otherId)
            .parent()
            .siblings('div')
            .find("input")
            .clear().type('8888')
    }
    saveupdateinfo(){
    cy.get(MyInfoelements.savemyinfo).parent().find('button').click()

    }

}

export default MyInfoPage
