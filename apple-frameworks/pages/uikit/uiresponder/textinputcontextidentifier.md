> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/textinputcontextidentifier](https://developer.apple.com/documentation/uikit/uiresponder/textinputcontextidentifier)

# textInputContextIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An identifier signifying that the responder should preserve its text input mode information.

## Declaration

```swift
var textInputContextIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

If you redefine this property and return a string value, UIKit tracks the current text input mode for the responder. While in tracking mode, any programmatic changes you make to the text input mode are remembered and restored whenever the responder becomes active.

## See Also

### Managing the text input mode

- [textInputMode](textinputmode.md): The text input mode for this responder object.
- [clearTextInputContextIdentifier(\_:)](cleartextinputcontextidentifier%28__%29.md): Clears text input mode information from the app’s user defaults.
- [inputAssistantItem](inputassistantitem.md): The input assistant to use when configuring the keyboard’s shortcuts bar.

# textInputContextIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An identifier signifying that the responder should preserve its text input mode information.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * textInputContextIdentifier;
```

<a id="Discussion"></a>

## Discussion

If you redefine this property and return a string value, UIKit tracks the current text input mode for the responder. While in tracking mode, any programmatic changes you make to the text input mode are remembered and restored whenever the responder becomes active.

## See Also

### Managing the text input mode

- [textInputMode](textinputmode.md): The text input mode for this responder object.
- [clearTextInputContextIdentifier:](cleartextinputcontextidentifier%28__%29.md): Clears text input mode information from the app’s user defaults.
- [inputAssistantItem](inputassistantitem.md): The input assistant to use when configuring the keyboard’s shortcuts bar.
