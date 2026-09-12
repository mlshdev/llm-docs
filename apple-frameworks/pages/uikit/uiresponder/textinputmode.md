> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/textinputmode](https://developer.apple.com/documentation/uikit/uiresponder/textinputmode)

# textInputMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text input mode for this responder object.

## Declaration

```swift
var textInputMode: UITextInputMode? { get }
```

<a id="Discussion"></a>

## Discussion

The text input mode identifies the language and keyboard displayed when this responder is active.

For responders, the system normally displays a keyboard that’s based on the user’s language preferences. You can redefine this property and use it to return a different text input mode in cases where you want a responder to use a specific keyboard. The user can still change the keyboard while the responder is active, but switching away to another responder and then back restores the keyboard you specified.

## See Also

### Managing the text input mode

- [textInputContextIdentifier](textinputcontextidentifier.md): An identifier signifying that the responder should preserve its text input mode information.
- [clearTextInputContextIdentifier(\_:)](cleartextinputcontextidentifier%28__%29.md): Clears text input mode information from the app’s user defaults.
- [inputAssistantItem](inputassistantitem.md): The input assistant to use when configuring the keyboard’s shortcuts bar.

# textInputMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The text input mode for this responder object.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) UITextInputMode * textInputMode;
```

<a id="Discussion"></a>

## Discussion

The text input mode identifies the language and keyboard displayed when this responder is active.

For responders, the system normally displays a keyboard that’s based on the user’s language preferences. You can redefine this property and use it to return a different text input mode in cases where you want a responder to use a specific keyboard. The user can still change the keyboard while the responder is active, but switching away to another responder and then back restores the keyboard you specified.

## See Also

### Managing the text input mode

- [textInputContextIdentifier](textinputcontextidentifier.md): An identifier signifying that the responder should preserve its text input mode information.
- [clearTextInputContextIdentifier:](cleartextinputcontextidentifier%28__%29.md): Clears text input mode information from the app’s user defaults.
- [inputAssistantItem](inputassistantitem.md): The input assistant to use when configuring the keyboard’s shortcuts bar.
