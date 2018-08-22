package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
					
					features = "src/test/java/features",
					glue = "stepDefination",
					monochrome=true, strict=true,
					plugin = {"pretty","html:target/cucumber.html","junit:target/cukes.xml","json:target/cucumber.json"}
		
				)
public class testRunner {

}
