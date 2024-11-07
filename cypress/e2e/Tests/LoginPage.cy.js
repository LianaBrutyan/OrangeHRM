import VisitPage from "../Pages/Open";
import LoginPage from "../Pages/Login";
import SuccessfulLogin from "../Actions/loginSuccess";
import MyInfoPage from "../Pages/MyInfoPage";
import MyInfosuccess from "../Actions/infoupdatesuccess"

describe('Test Orangehrmlive page', () =>{

    it ('Verify login functionality and update user info', () => {

        const username='Admin';
        const password='admin123';
        const loginPage= new LoginPage()
        const visitPage= new VisitPage()
        const successfullLogin=new SuccessfulLogin
        const MyinfoPage =new MyInfoPage()
        const myinfosuccess=new MyInfosuccess()

        visitPage.open()
        loginPage.login(username, password)
        successfullLogin.assertsuccessfulLogin()

        MyinfoPage.manu()
        MyinfoPage.Myinfo()
        MyinfoPage.editFirstName()
        MyinfoPage.editMiddleName()
        MyinfoPage.editLastName()
        MyinfoPage.editEmployeeID()
        MyinfoPage.editOtherId()
        MyinfoPage.saveupdateinfo()
        myinfosuccess.success()
        myinfosuccess.Asserteditedvisible()
    })
})
