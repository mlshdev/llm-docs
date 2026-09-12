> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiinputviewcontroller/advancetonextinputmode()](https://developer.apple.com/documentation/uikit/uiinputviewcontroller/advancetonextinputmode())

# advanceToNextInputMode() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Switches to the next keyboard in the list of user-enabled keyboards.

## Declaration

```swift
func advanceToNextInputMode()
```

<a id="Discussion"></a>

## Discussion

When the user taps the Globe or a custom “next keyboard” key, the system picks the appropriate “next” keyboard from the list of user-enabled keyboards. To determine whether your custom keyboard needs to display a “next keyboard” key, check the [needsInputModeSwitchKey](needsinputmodeswitchkey.md) property. If the value of the property is [true](https://developer.apple.com/documentation/swift/true), your keyboard should include this key.

## See Also

### Controlling a custom keyboard

- [dismissKeyboard()](dismisskeyboard%28%29.md): Dismisses the custom keyboard from the screen.
- [handleInputModeList(from:with:)](handleinputmodelist%28from_with_%29.md): Supports interaction with the list of user-enabled keyboards.

# advanceToNextInputMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Switches to the next keyboard in the list of user-enabled keyboards.

## Declaration

```objectivec
- (void) advanceToNextInputMode;
```

<a id="Discussion"></a>

## Discussion

When the user taps the Globe or a custom “next keyboard” key, the system picks the appropriate “next” keyboard from the list of user-enabled keyboards. To determine whether your custom keyboard needs to display a “next keyboard” key, check the [needsInputModeSwitchKey](needsinputmodeswitchkey.md) property. If the value of the property is [true](https://developer.apple.com/documentation/swift/true), your keyboard should include this key.

## See Also

### Controlling a custom keyboard

- [dismissKeyboard](dismisskeyboard%28%29.md): Dismisses the custom keyboard from the screen.
- [handleInputModeListFromView:withEvent:](handleinputmodelist%28from_with_%29.md): Supports interaction with the list of user-enabled keyboards.
