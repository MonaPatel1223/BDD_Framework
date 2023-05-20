package StepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Login {
    WebDriver driver;
    @Given("^User able to Open Browser$")
    public void user_able_to_Open_Browser()  {
        WebDriverManager.chromedriver().setup();
        driver =new ChromeDriver();
        driver.manage().window().maximize();

    }
    @Given("^Enter url$")
    public void enter_url()  {
        driver.get("https://demo.nopcommerce.com/");

    }
    @When("^User click on Login Link$")
    public void user_click_on_Login_Link() {
        driver.findElement(By.className("ico-login")).click();

    }

    @Then("^User on Login Page and Verify Login page Title$")
    public void user_on_Login_Page_and_Verify_Login_page_Title()  {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("nopCommerce demo store. Login",title);

    }

    @Then("^user enter \"([^\"]*)\" and \"([^\"]*)\" and click on login button$")
    public void user_enter_and_and_click_on_login_button(String UserName, String PassWord)  {
        driver.findElement(By.id("Email")).sendKeys(UserName);
        driver.findElement(By.id("Password")).sendKeys(PassWord);
        driver.findElement(By.className("login-button")).click();


    }


    @Then("^User is on Home Page$")
    public void user_is_on_Home_Page() {
    }


    @Then("^User close the Browser$")
    public void user_close_the_Browser()  {
        driver.close();

    }

}
