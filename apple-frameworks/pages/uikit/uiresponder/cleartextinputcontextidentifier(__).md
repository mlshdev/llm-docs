> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/cleartextinputcontextidentifier(_:)](https://developer.apple.com/documentation/uikit/uiresponder/cleartextinputcontextidentifier(_:))

# clearTextInputContextIdentifier(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Clears text input mode information from the app’s user defaults.

## Declaration

```swift
class func clearTextInputContextIdentifier(_ identifier: String)
```

## Parameters

- `identifier`: An identifier assigned to the [textInputContextIdentifier](textinputcontextidentifier.md) property of one of your responders.

<a id="Discussion"></a>

## Discussion

Calling this method removes any text input mode information associated with the specified identifier from the app’s user defaults. Removing this information causes the responder to use the default text input mode again.

## See Also

### Managing the text input mode

- [textInputMode](textinputmode.md): The text input mode for this responder object.
- [textInputContextIdentifier](textinputcontextidentifier.md): An identifier signifying that the responder should preserve its text input mode information.
- [inputAssistantItem](inputassistantitem.md): The input assistant to use when configuring the keyboard’s shortcuts bar.

# clearTextInputContextIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Clears text input mode information from the app’s user defaults.

## Declaration

```objectivec
+ (void) clearTextInputContextIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: An identifier assigned to the [textInputContextIdentifier](textinputcontextidentifier.md) property of one of your responders.

<a id="Discussion"></a>

## Discussion

Calling this method removes any text input mode information associated with the specified identifier from the app’s user defaults. Removing this information causes the responder to use the default text input mode again.

## See Also

### Managing the text input mode

- [textInputMode](textinputmode.md): The text input mode for this responder object.
- [textInputContextIdentifier](textinputcontextidentifier.md): An identifier signifying that the responder should preserve its text input mode information.
- [inputAssistantItem](inputassistantitem.md): The input assistant to use when configuring the keyboard’s shortcuts bar.
