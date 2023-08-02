package au.com.carsguide.pages;

import au.com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.List;

public class FindDealersResultPage extends Utility {

    private static final Logger log = LogManager.getLogger(FindDealersResultPage.class.getName());

    public FindDealersResultPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='dealerListing--heading']//p")
    List<WebElement> dealerNames;

    @CacheLookup
    @FindBy(xpath = "//div[@class='pagination']//p[7]")
    WebElement nextButton;

    public boolean isDealerDisplayed(String dealer) {
        boolean myBreak = true;
        boolean isDisplayed = false;
        while (myBreak) {
            for (WebElement e : dealerNames) {
                try{
                    if (e.getText().equalsIgnoreCase(dealer)) {
                        System.out.println(e.getText());
                        isDisplayed = true;
                        myBreak = false;
                        break;
                    }
                }catch (StaleElementReferenceException e1){
                    System.out.println(e1.getMessage());
                }
            }
            if (myBreak) {
                if (!driver.getCurrentUrl().contains("page=154")) {
                    try{
                        Thread.sleep(2000);
                        nextButton.click();
                    }catch (StaleElementReferenceException e1){
                        System.out.println(e1.getMessage());
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                } else {
                    myBreak = false;
                }
                PageFactory.initElements(driver, this);
            }
        }
        driver.navigate().to("https://www.carsguide.com.au/car-dealers");
        return isDisplayed;
    }

    public void verifyCarDealersPage(String url) {
        String actual = driver.getCurrentUrl();
        boolean expected = actual.contains(url);
        Assert.assertTrue(expected);
        log.info("verifying find dealers url: '" + actual + "'");
    }
}
