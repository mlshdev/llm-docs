> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfacecontroller/dismisstextinputcontroller()](https://developer.apple.com/documentation/watchkit/wkinterfacecontroller/dismisstextinputcontroller())

# dismissTextInputController() (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the text input controller without returning any text.

## Declaration

```swift
func dismissTextInputController()
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel a text input operation without accepting any input from the user. Dismissing the interface controller animates it off the screen and does not call the associated completion block.

## See Also

### Handling text input

- [presentTextInputController(withSuggestions:allowedInputMode:completion:)](presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md): Displays a modal interface for gathering text input from the user.
- [presentTextInputControllerWithSuggestions(forLanguage:allowedInputMode:completion:)](presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md): Displays a modal interface for gathering language-specific text input from the user.
- [WKTextInputMode](../wktextinputmode.md): The input modes supported by the text input controller.

# dismissTextInputController (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Dismisses the text input controller without returning any text.

## Declaration

```objectivec
- (void) dismissTextInputController;
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel a text input operation without accepting any input from the user. Dismissing the interface controller animates it off the screen and does not call the associated completion block.

## See Also

### Handling text input

- [presentTextInputControllerWithSuggestions:allowedInputMode:completion:](presenttextinputcontroller%28withsuggestions_allowedinputmode_completion_%29.md): Displays a modal interface for gathering text input from the user.
- [presentTextInputControllerWithSuggestionsForLanguage:allowedInputMode:completion:](presenttextinputcontrollerwithsuggestions%28forlanguage_allowedinputmode_completion_%29.md): Displays a modal interface for gathering language-specific text input from the user.
- [WKTextInputMode](../wktextinputmode.md): The input modes supported by the text input controller.
