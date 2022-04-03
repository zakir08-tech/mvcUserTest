package stepDefinition;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import userDefine.common;

import objectRepository.*;

public class glueCode {
	public static WebElement getElement;
	
	@Given("^to do list \"([^\"]*)\" is open$")
	public void to_do_list_is_open(String getURL) throws Throwable {
		boolean todoListPage =false;
		
		if(common.xDriver.getTitle().contentEquals("Vue.js • TodoMVC"))
			todoListPage =true;
		
		assertTrue("required to do list page not found!", todoListPage);
	}
	
	@And("^to do list text box is present on the screen$")
	public void to_do_list_text_box_is_present_on_the_screen() throws Throwable {
	   boolean getStatus =common.waitForElmToBeVisible(objectRepo.whatNeedToBeDoneTxtBox);
	   assertTrue("required text box not found!", getStatus);
	}

	@Then("^add task \"([^\"]*)\" to the list$")
	public void add_task_to_the_list(String task) {
		getElement =common.getElement(objectRepo.whatNeedToBeDoneTxtBox);
		if(getElement ==null)
			Assert.assertNotNull("required object not found!", getElement);
		else {
			getElement.sendKeys(task);
			getElement.sendKeys(Keys.ENTER);
		}
	}
	
	@Then("^verify task \"([^\"]*)\" added to the list or not$")
	public void verify_task_added_to_the_list_or_not(String task) throws Throwable {
	    String getItem = "xpath|"+"//input/following-sibling::label[text()='"+task+"']";
	    
	    getElement =common.getElement(getItem);
		if(getElement ==null)
			Assert.assertNotNull("required task not added to the to do list!", getElement);
		else
			Assert.assertNotNull("task added to the to do list", getElement);
	}
	
	@Then("^mark the task \"([^\"]*)\" as completed$")
	public void mark_the_task_as_completed(String task) throws Throwable {
		String getItem = "xpath|"+"//label[text()='"+task+"']//preceding-sibling::input";
		
		getElement =common.getElement(getItem);
		if(getElement ==null) {
			Assert.assertNotNull("required task not found in the to do list", getElement);
		}	
		else {
			getElement.click();
			Assert.assertNotNull("required task marked completed!", getElement);
		}	
	}
	
	@Then("^verify task \"([^\"]*)\" marked completed or not$")
	public void verify_task_marked_completed_or_not(String task) throws Throwable {
		String getItem = "xpath|"+"//label[text()='"+task+"']//parent::div//parent::li";
		
		getElement =common.getElement(getItem);
		if(getElement ==null) {
			Assert.assertNotNull("required task not found in the to do list", getElement);
		}	
		else {
			String getStatus = getElement.getAttribute("class");
			Assert.assertEquals("required task marked completed verified", "todo completed", getStatus.toString());
		}
	}
	
	@Then("^open Completed list$")
	public void open_Completed_list() throws Throwable {
		getElement =common.getElement(objectRepo.tasksCompleted);
		if(getElement ==null)
			Assert.assertNotNull("required button completed not found!", getElement);
		else
			getElement.click();
	}
	
	@Then("^verify task \"([^\"]*)\" visible under completed list$")
	public void verify_task_visible_under_completed_list(String task) throws Throwable {
		String getItem = "xpath|"+"//input/following-sibling::label[text()='"+task+"']";
	    
	    getElement =common.getElement(getItem);
		if(getElement ==null)
			Assert.assertNotNull("required task not added to the to do completed list!", getElement);
		else
			Assert.assertNotNull("task added to the to do completed list", getElement);
	}
	
	@Then("^open Active list$")
	public void open_Active_list() throws Throwable {
		getElement =common.getElement(objectRepo.tasksActive);
		if(getElement ==null)
			Assert.assertNotNull("required button completed not found!", getElement);
		else
			getElement.click();
	}
	
	@Then("^verify task \"([^\"]*)\" not visible under active list$")
	public void verify_task_not_visible_under_active_list(String task) throws Throwable {
		String getItem = "xpath|"+"//input/following-sibling::label[text()='"+task+"']";
		boolean getStatus =common.waitForElmToBeInVisible(getItem);
		
		if(getStatus ==false)
			assertFalse("required task not found in the active list!", getStatus);
		else if(getStatus ==true)
			assertFalse("required task found in the active list!", getStatus);
	}
	
}
