#import "eyeTestMatchers.js"

describe("a basic eyeTest test", function() {

    it("can check if a view contains text", function() {
        readText("Welcome to eyeTest");
    });

    it("allows you to fill in a text input field", function() {
        fillInTextField("nameField", "Hello");
        readText("Hello");
    });

    it("allows you to tap buttons", function() {
        tapButton("Tap me");
        readText("You tapped the button");
    });

    it("allows you to swipe in each direction", function() {
        swipe("left");
        swipe("right");
        swipe("up");
        swipe("down");
        readText("This is a new page");
    });

});

describe("a test with verbose output to the log", function() {

    it("will provide feedback on all actions if set to verbose", function() {
        fillInTextField("field", "text");
    });

}, "verbose");