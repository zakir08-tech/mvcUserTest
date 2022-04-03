package userDefine;

import java.util.concurrent.TimeUnit;
import java.lang.reflect.Field;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class common {
	public static WebDriver xDriver;
    public static int waitTimeInSeconds;
    public static WebDriverWait wait;
        
    public static void getWebDriver() {
        waitTimeInSeconds = constants.waitTimeInSec;
        
		System.setProperty("webdriver.chrome.driver", constants.userDir+"\\driver\\chromedriver.exe");
		ChromeOptions co = new ChromeOptions();
		co.addArguments("--start-maximized");
		
		xDriver = new ChromeDriver(co);
		xDriver.manage().timeouts().pageLoadTimeout(waitTimeInSeconds, TimeUnit.SECONDS);
		xDriver.manage().timeouts().implicitlyWait(waitTimeInSeconds, TimeUnit.SECONDS);
    }
    
    public static <aClass> WebElement getElementFromClass(String className, String ElementName, WebDriver xDriver) {
    	WebElement getElement =null;
    	Class<?> aClass;
    	
    	try {
    		ClassLoader classLoader =common.class.getClassLoader();
    		aClass =classLoader.loadClass("userDefine." +className);
    		Field field =aClass.getDeclaredField(ElementName);
    		field.setAccessible(true);
    		aClass aClassObj =(aClass) PageFactory.initElements(xDriver, aClass);
    		getElement = (WebElement) field.get(aClassObj);
    	}catch (ClassNotFoundException | NoSuchFieldException | SecurityException | IllegalArgumentException | IllegalAccessException exp) {
    		System.out.println(exp.getMessage());
    		getElement =null;
    	}
    	return getElement;
    }
    
    public static boolean waitForElmToBeVisible(String elm) {
    	boolean elmFnd =true;
    	
    	String getElmSearchType =elm.split("[|]")[0];
    	String getElmSearchTypeVal =elm.split("[|]")[1];
    	
    	try {
    		WebDriverWait wait = new WebDriverWait(xDriver, waitTimeInSeconds);
    		if(getElmSearchType.contentEquals("xpath"))
    			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(getElmSearchTypeVal)));
    	}catch (NoSuchElementException | TimeoutException exp) {
    		elmFnd =false;
    	}
		return elmFnd;
    }
    
    public static boolean waitForElmToBeInVisible(String elm) {
    	boolean elmFnd =true;
    	
    	String getElmSearchType =elm.split("[|]")[0];
    	String getElmSearchTypeVal =elm.split("[|]")[1];
    	
    	try {
    		WebDriverWait wait = new WebDriverWait(xDriver, 5);
    		if(getElmSearchType.contentEquals("xpath"))
    			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(getElmSearchTypeVal)));
    	}catch (NoSuchElementException | TimeoutException exp) {
    		elmFnd =false;
    	}
		return elmFnd;
    }
    
    public static WebElement getElement(String elm) {
    	String getElmSearchType =elm.split("[|]")[0];
    	String getElmSearchTypeVal =elm.split("[|]")[1];
    	WebElement getElement =null;
    	
    	try {
    		if(getElmSearchType.contentEquals("xpath"))
    			getElement =common.xDriver.findElement(By.xpath(getElmSearchTypeVal));
    	}catch (NoSuchElementException | TimeoutException exp) {
    		getElement =null;
    	}
    	return getElement;
    }
}
