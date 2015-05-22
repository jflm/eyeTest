eyeTest
=======

![eyeTest logo](/SupportingFiles/eyeTest.png?raw=true)

A matchers library for automated tests of iOS applications using the Apple UIAutomation instrument

Installation 
------------

The easiest way to use eyeTest is to clone this repo locally and periodically pull updates. Using Finder, drag and drop `eyeTestMatchers.js` into the `[AppName]Tests/Supporting Files` directory within your Xcode project.

Usage
-----

Create a new `.js` file within `[AppName]Tests`. This will be where you write the tests (in JavaScript). You need to include the matcher set by adding `#import "eyeTestMatchers.js"` at the top of your code, and then you should be good to go!

Tests use the RSpec-style `describe` and `it` blocks. There is currently no support for `context` but this is on the [ToDo list](ToDo.md?raw=true). Every action within the test is a test itself (there are no explicit expectations) meaning that filling in a text field, for example, is a form of expectation in itself.

Contributions
-------------

Contributions to the matcher set are always welcomed - please feel free to submit pull requests.
