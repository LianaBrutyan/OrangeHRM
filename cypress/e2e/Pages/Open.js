import {constants} from "../../Locators/OpenPageelements";

class VisitPage {
    open() {
        cy.visit(constants.URL)
    }
}
export default VisitPage
