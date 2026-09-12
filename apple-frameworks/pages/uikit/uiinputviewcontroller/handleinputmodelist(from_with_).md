> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputviewcontroller/handleinputmodelist(from:with:)](https://developer.apple.com/documentation/uikit/uiinputviewcontroller/handleinputmodelist(from:with:))

# handleInputModeList(from:with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Supports interaction with the list of user-enabled keyboards.

## Declaration

```swift
func handleInputModeList(from view: UIView, with event: UIEvent)
```

<a id="Discussion"></a>

## Discussion

Use this method to launch the input mode list from your input view when the user long-presses or swipes up from the view; advance to the next input mode in the list when the user taps the view.

## See Also

### Controlling a custom keyboard

- [advanceToNextInputMode()](advancetonextinputmode%28%29.md): Switches to the next keyboard in the list of user-enabled keyboards.
- [dismissKeyboard()](dismisskeyboard%28%29.md): Dismisses the custom keyboard from the screen.

# handleInputModeListFromView:withEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

Supports interaction with the list of user-enabled keyboards.

## Declaration

```objectivec
- (void) handleInputModeListFromView:(UIView *) view withEvent:(UIEvent *) event;
```

<a id="Discussion"></a>

## Discussion

Use this method to launch the input mode list from your input view when the user long-presses or swipes up from the view; advance to the next input mode in the list when the user taps the view.

## See Also

### Controlling a custom keyboard

- [advanceToNextInputMode](advancetonextinputmode%28%29.md): Switches to the next keyboard in the list of user-enabled keyboards.
- [dismissKeyboard](dismisskeyboard%28%29.md): Dismisses the custom keyboard from the screen.
