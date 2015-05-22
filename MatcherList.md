eyeTest matcher list
====================

The following describes the functions provided by eyeTest and how to use them.

In eyeTest, every action is an expectation and will individually pass or fail (the corresponding `it` or `describe` block will also fail if any one individual action fails). Therefore there are no `expect` statements - the idea is to replicate the end user's experience; any lapse in the user's ability to work their way through the app is considered a test failure.

Basic functionality
-------------------

`readText(text: String)`
Checks the view for `text` as static text (i.e. a text label).
The entire string must match the entire text label ("Hello" will not be detected if the label reads "Hello World").

`fillInTextField(field: String, text; String)`
Fills in `field` with `text`. `field` must be specified using an *accessibility label*.

`tapButton(button: String)`
Taps on `button`. `button` can either be the text shown on the button, or the accessibility label.

`swipe(direction: String, on: String)`
Swipes in the given direction (`"left"`, `"right"`, `"up"` or `"down"`).
Swipe target defaults to the entire view; you can specify a specific target by including an identifier (visible text or accessibility label as appropriate).