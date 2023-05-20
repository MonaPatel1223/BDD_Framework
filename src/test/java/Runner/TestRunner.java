package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/monapatel/IdeaProjects/BDD_Regi/src/test/resources/Features",
        glue = {"StepDefinition"},
        format = {"pretty","html:htmlReport","json:json/cucumber.json","junit:junit/cucumber.xml"},
        dryRun = false


)


public class TestRunner {
}
