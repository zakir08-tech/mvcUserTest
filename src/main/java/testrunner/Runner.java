package testrunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import userDefine.common;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/main/resources/features/mvcUser.feature", 
        glue = {"stepDefinition"},
        plugin = {"pretty","html:target/cucumber-reports"})
public class Runner {
	
	@BeforeClass
     public static void launchBrowser() {
		common.getWebDriver();
		common.xDriver.get("https://todomvc.com/examples/vue/");
    }
	
	@AfterClass
    public static void closeBrowser() {       
		//common.xDriver.close();
    }
}