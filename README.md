# CYOA Generator
An AngularJS based web framework for making interactive CYOAs  
Preview here: https://maxtepafray.github.io/cyoa-generator/

### Current Features
* (Hopefully) straightfoward means of creating interactive CYOA's with needing to know JS
* Collapsible list of chosen options
* Automatic point counter
* Automatic indication of unpickable options
* Conflicting and required options
* Limit for number of options picked in a section
* Supports custom CSS styling

### Requirements
+ A Web Browser (See Note Below)
+ A text editor
+ Basic knowledge of CSS (for styling)

#### Fixing Fetch Errors on locally running copies
You may run into CORs issues when attempting to run locally, these are the workarounds.  
These are not ideal to be running full time. If I find a better solution, will be adding.

- Chrome-based: Add --allow-file-access-from-files
- Firefox-baed: about:config -> security.fileuri.strict_origin_policy -> false

### Included Libraries
* AngularJS v1.6.9
* Bootstrap v4.4.1

###  Files
Dependencies aside, there are 4 files and 1 folder of note within the repo  
- **data.json** is the lifeblood of the system and supplies all the text, point values, and other rules the system will follow  
- **main.css** is your style file, you will alter this to change the look of your CYOA.  
- **index.html** and **macros.js** by default should not be tampered with unless you know what you're doing.
- **images/** is where any images to be used should go

## Making a CYOA
This section will mainly cover editing data.json. For information related to editing the other files, please seek an actual tutorial. 

### Structure of data.json

#### Header
    {
    	"author": "Tepafray",
    	"version": "v0.8",
    	"title": "Interactive CYOA Template",
    	"logo_image": "",
    	"points": 10,
    	"allow_negative": false,
    	"point_name_top": "Points",
    	"point_name_single": "Point",
    	"point_name_prefix": "",
    	"point_name_plural": "Points",
    	"point_cost_text": "Costs",
    	"point_gain_text": "Gain",
    	"parts": [{...
    	}]
The header is where any universal parts of your CYOA are set. This includes things like the author's name, initial point counts, and wording for things like what "Points" will be called.

 - **author:**  (string) Your name, Displayed under the logo and on the page title
 - **version:**  (string) Version number for the CYOA. Displayed under the logo and the page title
 - **title:**  (string) Name of your CYOA , displayed in the page title, and as text at the top if **logo_image** is not specified 
 - **points:**  (Number) Starting point count.
 - **allow_negative:**  (true/false) Disable options if players does not have sufficient points
 - **point_name_top:** (String) What the Points are called in the floating header
 - **point_name_single:** (String) What a single Point is called within an option
 - **point_name_plural:** (String) What a multiple Points are called within an option
 - **point_name_prefix:** (String) What gets appended to the beginning of a point number (For things like **$** 1.00)
 - **point_cost_text:** (String) What the "Cost" of an option is refereed to (Cost, Lose, Spend, etc.)
 - **point_gain_text:** (String) What the "Gain" of an option is refereed to (Gain, Get, Receive, Find, etc.)
 - **parts:** (String) Array of pieces that make up your CYOA (See next section)
#### Parts
	"parts": [{
			"option_class": "bubble",
			"group_class":"pad-options",
			"size":1,
			"limit": 1,
			"group":"Choice Limited Options",
			"entries": [{...
			}]
		},

 - **option_class:**  (string) Class applied to each object/option within the part
 - **group_class:**  (string) Class applied entire group as one object
 - **size:**  (number) Number of options/objects in each row of group
 - **limit:**  (Number) Maximum number of options pick-able in the group*
 - **group:**  (String) Name of the group, will be displayed in selected object list*
 - **entries:** (String) Array of objects/options that make up the group (See next section)
#### Entries

			"entries": [{
					"title": "Size 4a",
					"id": "A1",
					"require":["A1","A2"],
					"conflict": ["B1","B2","B3"],
					"picture":"placeholder.gif",
					"class": "picture-left",
					"text": "This is a Size 4 Element",
					"points": 1,
					"point_text":"Just 1 Point"
				}
 - **title:**  (string) Name of an option. Appears at the top of the object
 - **id:**  (string) ID used currently just for conflict and requirement calculation
 - **require:**  (Array of strings) Array of *ALL* IDs required be selected before this option can be selected
 - **conflict:**  (Array of strings) Array of all ID, disables option if *ANY* are selected
 - **picture:**  (String) Filename of picture within /images/ to show. Appears below title. If not present, a picture box will not be made
 - **text:** (String) Main descriptive text, placed below title, and picture (if specified)
 - **class:** (String) Additional class to apply to object
 - **points:** (Number) Cost an option. Use negative numbers to add points. Use 0 to make it free. Remove to make object unselectable. If 0 or not specified, a point indicator will not show up. Otherwise, it will appear at the bottom of an object.
 - **point_text:** (String) Override text for point indicator. Will always appear regardless of what **points** is.

### Classes
A few classes have been presupplied to help you make your CYOA. Use and modify as needed.

#### Automatic Classes
These classes are automatically applied and do not need to be specified in data.json
- size-x: Controls the sizing of elements, the x is populated with the size number provided in the part section
- image: How the pictures are formatted by default
- h1 : Used by the text page title if a logo is not used
- h2 : Used by the text in the floating header
- h3 : Used by the Title of each object
- point-counter: styles the points cost for an object
- logo: used in formatting an image logo, no effect on text page title
- body: used mostly in adding a background
- main-text: Used by the text below the logo

#### Applied Classes
 - bubble: A basic rounded box. Has additional classes for being checked, disabled, and both
 - main-text: A basic text formatting with outline
 - seperator: Takes up space, perfect if you need a trim line for screenshots
 - hidden-entry: Hides anything in a < hidden > tag until the option is selected 
 - picture-right/left :A different style of object, moves the image and text to opposite horizontal sides
 - pointcounter-float: Moves the point cost to a box inside the image. Super finicky.


## Other notes

### Plans going forward
- Add support for multiple tracked currencies/stats/etc.
- More complicated conditionals
- Clean everything up
- Choosing an option multiple times
- Having an option with multiple "intensities", with a description for each
- Live description search and replace (Use entered name, change pronouns based on choices, etc)
- Auto generating "Results" based on decisions.
- Section/Option lockout (You made your choice, now stick with it)
- Photo mode (Clean up page for easy screen capture, external page rendering)
