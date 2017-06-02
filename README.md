## README for Family Friday Email

### Four requirements
1. Have dynamic content.
2. Be customized to a specific team member or group of members.
3. Allow for a one-click rating of the completed lunch to be submitted.
4. Contain trackable links for analysis.

#### X. Requirement
- Implementation Notes

#### 1. Have dynamic content
- Set spans with ids or classes
- Could also be done with JQuery 

#### 2. Be customized to a specific team member or group of members.
- customizeEmail function takes in a member
- For finding a group of members, jQuery grep would allow taking in multiple key-value pairs

#### 3. Allow for a one-click rating of the completed lunch to be submitted.
- Each star has a link with a custom parameter like rating=1 
- For custom ratings, could have ratings in a JSON and add elements to the HTML template

#### 4. Contain trackable links for analysis.
- In the customizeEmail function, all links (as identified by class name) have the member's name appended to them
- JQuery has its own append function

### Testing
- I used Mocha Chai for testing.  
- For better testing, payload should be passed to functions rather than be accessible as a global variable
- To test the HTML directly, could write functions that grab the values of certain HTML elements
- (Extension: Litmus looks like a good options for testing emails for different email providers.)

### Other Choices
- I used a [responsive HTML template](https://github.com/leemunroe/responsive-html-email-template/blob/master/email-inlined.html)! to get started 
- I made the table borders visible to see how the table was laid out 

#### Best Practices and Common Terms for Templating HTML emails:
- Use tables for layout
- a[class="btn"] will only select a elements that EXACTLY match
- !important overrides all other rules.  Important for overriding email client presets.
- Outlook & Hotmail emails append style rules with .ExternalClass
- Anti-aliasing: "uses partial opacity to emulate smooth curves".  (Shouldn't use for small font sizes)
- Pixel tracking: get timestamp & source when emailed opened by having imaginary image pinged from server
- All CSS needs to be in-line styles
- Email clients don't recognize head or doctype
- Obviously don't use relative urls for assets or links
- MailChimp recommends: use media query styles in <style> tag



