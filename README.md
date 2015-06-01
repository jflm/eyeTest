eyeTest
=======

:construction: Note: this tool is under construction but is available for use. Contributions to the matcher set are always welcome :construction:

![eyeTest logo](/SupportingFiles/eyeTest.png?raw=true)

A matchers library for automated tests of iOS applications using the Apple UIAutomation instrument

Installation 
------------

The easiest way to use eyeTest is to clone this repo locally and periodically pull updates. Using Finder, drag and drop `eyeTestMatchers.js` into the `[AppName]Tests/Supporting Files` directory within your Xcode project. Select the 'Copy items if needed' checkbox.

Usage
-----

eyeTest is a feature test framework which is intended to simulate the use of an application by a user. It does not reach inside to any code to manipulate the application, but will read the text on labels and buttons, for example, and can also use Accessibility IDs to look for and manipulate items in the view.

To use eyeTest, create a new `.js` file within `[AppName]Tests`. This will be where you write the tests (in JavaScript). You need to include the matcher set by adding `#import "eyeTestMatchers.js"` at the top of your code, and then you should be good to go! See the [matcher list](MatcherList.md?raw=true) for more information on how to write your tests.

To run your tests from within Xcode, you should first load the app into the simulator with `⌘R`. Once loaded, go back to XCode and stop the simulator running with `⌘.`. Hit `⌘I` to open up the Instruments dialog and select 'Automation'.

Inside the UIAutomation window, import your test code by showing the Display Settings tab (`⌘2`) and selecting 'import' from the drop-down marked 'add'. You can hit `⌘R` to run the tests. The application can sometimes be temperamental, so give it a few goes if necessary. Once you have this set up, you can make changes in Xcode and re-launch as necessary through the sequence `⌘S`, `⌘R`, `⌘.`, `⌘I`.

This is obviously long-winded and there are various solutions under consideration - pull requests or suggestions always welcome.

If you have trouble running the tests please raise an Issue and help will be provided.

Tests use the RSpec-style `describe` and `it` blocks. There is currently no support for `context` but this is on the [ToDo list](https://github.com/james-miller/eyeTest/blob/master/ToDo.md). Every action within the test is a test itself (there are no explicit expectations) meaning that filling in a text field, for example, is a form of expectation that the field exists, that it is enabled, etc.

Contributions
-------------

Contributions to the matcher set are always welcomed - please feel free to submit pull requests. In particular feel free to check out the [ToDo list](https://github.com/james-miller/eyeTest/blob/master/ToDo.md) and see if any projects on there take your fancy. Issues needing some work will be added to the ToDo list.
