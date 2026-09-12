> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputviewcontroller/dismisskeyboard()](https://developer.apple.com/documentation/uikit/uiinputviewcontroller/dismisskeyboard())

# dismissKeyboard() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dismisses the custom keyboard from the screen.

## Declaration

```swift
func dismissKeyboard()
```

## Mentioned In

- [Configuring a custom keyboard interface](../configuring-a-custom-keyboard-interface.md)

<a id="Discussion"></a>

## Discussion

Because a custom keyboard does not have access to the current text input object, you cannot send it a [resignFirstResponder()](../uiresponder/resignfirstresponder%28%29.md) message (as you would to dismiss the system keyboard when you are developing an app with text entry). To dismiss the custom keyboard, call [dismissKeyboard()](dismisskeyboard%28%29.md) instead.

## See Also

### Controlling a custom keyboard

- [advanceToNextInputMode()](advancetonextinputmode%28%29.md): Switches to the next keyboard in the list of user-enabled keyboards.
- [handleInputModeList(from:with:)](handleinputmodelist%28from_with_%29.md): Supports interaction with the list of user-enabled keyboards.

# dismissKeyboard (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dismisses the custom keyboard from the screen.

## Declaration

```objectivec
- (void) dismissKeyboard;
```

## Mentioned In

- [Configuring a custom keyboard interface](../configuring-a-custom-keyboard-interface.md)

<a id="Discussion"></a>

## Discussion

Because a custom keyboard does not have access to the current text input object, you cannot send it a [resignFirstResponder](../uiresponder/resignfirstresponder%28%29.md) message (as you would to dismiss the system keyboard when you are developing an app with text entry). To dismiss the custom keyboard, call [dismissKeyboard](dismisskeyboard%28%29.md) instead.

## See Also

### Controlling a custom keyboard

- [advanceToNextInputMode](advancetonextinputmode%28%29.md): Switches to the next keyboard in the list of user-enabled keyboards.
- [handleInputModeListFromView:withEvent:](handleinputmodelist%28from_with_%29.md): Supports interaction with the list of user-enabled keyboards.
