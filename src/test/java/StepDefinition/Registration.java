package StepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class Registration {
    WebDriver driver;
    @Given("^User able to open Browser$")
    public void user_able_to_open_Browser() {
        WebDriverManager.chromedriver().setup();
        driver =new ChromeDriver();
        driver.manage().window().maximize();


    }

    @Given("^Enter Url$")
    public void enter_Url()  {
        driver.get("https://demo.nopcommerce.com/");

    }

    @Then("^User click on Register Link$")
    public void user_click_on_Register_Link()  {
        driver.findElement(By.xpath("/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a")).click();

    }

    @Then("^User Select \"([^\"]*)\"$")
    public void user_Select(String Gender)  {
        driver.findElement(By.xpath("//*[@id=\"gender\"]/span[2]/label")).click();


    }

    @When("^User enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enter_and(String  FirstName, String LastName)  {
        driver.findElement(By.name("FirstName")).sendKeys(FirstName);
        driver.findElement(By.name("LastName")).sendKeys(LastName);


    }
    @When("^User click on DataOfBirth and Enter \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void user_click_on_DataOfBirth_and_Enter(String Day, String Month, String Year)  {
        driver.findElement(By.name("DateOfBirthDay")).sendKeys(Day);
        driver.findElement(By.name("DateOfBirthMonth")).sendKeys(Month);
        driver.findElement(By.name("DateOfBirthYear")).sendKeys(Year);

    }

    @When("^User Enter a \"([^\"]*)\"$")
    public void user_Enter_a(String Email)  {
        driver.findElement(By.id("Email")).sendKeys(Email);

    }

    @When("^User Enter \"([^\"]*)\"$")
    public void user_Enter(String CompanyName) throws InterruptedException {
        driver.findElement(By.cssSelector("input[id='Company']")).sendKeys(CompanyName);
        Thread.sleep(1000);

    }
    @When("^User able to Enter\"([^\"]*)\"$")
    public void user_able_to_Enter(String Password) {
        driver.findElement(By.id("Password")).sendKeys(Password);

    }

    @When("^User enter a\"([^\"]*)\"$")
    public void user_enter_a(String ConfrimPassword) {
        driver.findElement(By.id("ConfirmPassword")).sendKeys(ConfrimPassword);

    }

    @When("^click on Register Button$")
    public void click_on_Register_Button()  {
        driver.findElement(By.id("register-button")).click();

    }

    @Then("^User close the browser$")
    public void user_close_the_browser()  {
        driver.close();

    }
}
