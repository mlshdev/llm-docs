> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiresponder/inputassistantitem](https://developer.apple.com/documentation/uikit/uiresponder/inputassistantitem)

# inputAssistantItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 2.0+

The input assistant to use when configuring the keyboard’s shortcuts bar.

## Declaration

```swift
var inputAssistantItem: UITextInputAssistantItem { get }
```

<a id="Discussion"></a>

## Discussion

On iPad, the shortcuts bar above the keyboard contains typing suggestions and other controls for managing text, such as cut, copy, and paste commands. This property contains the text input assistant item you use to configure the custom bar button items that you want included in the shortcuts bar. The shortcuts bar isn’t available on iPhone or iPod Touch.

This property has special considerations in visionOS:

- In apps built for visionOS, this property isn’t available. Use [bottomOrnament](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/bottomornament) instead.
- In compatible iPad apps running in visionOS, the shortcuts bar behaves similar to iPadOS. It contains the custom bar button items you configure using this property and system items (such as cut, copy, and paste). The shortcuts bar renders at the bottom of the app window, but it doesn’t anchor to the keyboard in visionOS.

## See Also

### Managing the text input mode

- [textInputMode](textinputmode.md): The text input mode for this responder object.
- [textInputContextIdentifier](textinputcontextidentifier.md): An identifier signifying that the responder should preserve its text input mode information.
- [clearTextInputContextIdentifier(\_:)](cleartextinputcontextidentifier%28__%29.md): Clears text input mode information from the app’s user defaults.

# inputAssistantItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 2.0+

The input assistant to use when configuring the keyboard’s shortcuts bar.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nonnull) UITextInputAssistantItem * inputAssistantItem;
```

<a id="Discussion"></a>

## Discussion

On iPad, the shortcuts bar above the keyboard contains typing suggestions and other controls for managing text, such as cut, copy, and paste commands. This property contains the text input assistant item you use to configure the custom bar button items that you want included in the shortcuts bar. The shortcuts bar isn’t available on iPhone or iPod Touch.

This property has special considerations in visionOS:

- In apps built for visionOS, this property isn’t available. Use [bottomOrnament](https://developer.apple.com/documentation/swiftui/toolbaritemplacement/bottomornament) instead.
- In compatible iPad apps running in visionOS, the shortcuts bar behaves similar to iPadOS. It contains the custom bar button items you configure using this property and system items (such as cut, copy, and paste). The shortcuts bar renders at the bottom of the app window, but it doesn’t anchor to the keyboard in visionOS.

## See Also

### Managing the text input mode

- [textInputMode](textinputmode.md): The text input mode for this responder object.
- [textInputContextIdentifier](textinputcontextidentifier.md): An identifier signifying that the responder should preserve its text input mode information.
- [clearTextInputContextIdentifier:](cleartextinputcontextidentifier%28__%29.md): Clears text input mode information from the app’s user defaults.
