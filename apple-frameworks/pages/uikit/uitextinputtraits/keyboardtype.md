> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtraits/keyboardtype](https://developer.apple.com/documentation/uikit/uitextinputtraits/keyboardtype)

# keyboardType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The keyboard type for the text object.

## Declaration

```swift
optional var keyboardType: UIKeyboardType { get set }
```

## Mentioned In

- [Configuring a custom keyboard interface](../configuring-a-custom-keyboard-interface.md)

<a id="Discussion"></a>

## Discussion

Text objects can be targeted for specific types of input, such as plain text, email, numeric entry, and so on. The keyboard style identifies what keys are available on the keyboard and which ones appear by default. The default value for this property is [UIKeyboardType.default](../uikeyboardtype/default.md).

## See Also

### Configuring the keyboard appearance

- [UIKeyboardType](../uikeyboardtype.md): Constants that specify the type of keyboard to display for a text-based view.
- [keyboardAppearance](keyboardappearance.md): The appearance style of the keyboard for the text object.
- [UIKeyboardAppearance](../uikeyboardappearance.md): Constants that specify the appearance of the keyboard for a text-based view.
- [returnKeyType](returnkeytype.md): The visible indication of what the Return key does.
- [UIReturnKeyType](../uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](textcontenttype.md): The semantic meaning for a text input area.
- [UITextContentType](../uitextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.

# keyboardType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The keyboard type for the text object.

## Declaration

```objectivec
@property (nonatomic) UIKeyboardType keyboardType;
```

## Mentioned In

- [Configuring a custom keyboard interface](../configuring-a-custom-keyboard-interface.md)

<a id="Discussion"></a>

## Discussion

Text objects can be targeted for specific types of input, such as plain text, email, numeric entry, and so on. The keyboard style identifies what keys are available on the keyboard and which ones appear by default. The default value for this property is [UIKeyboardTypeDefault](../uikeyboardtype/default.md).

## See Also

### Configuring the keyboard appearance

- [UIKeyboardType](../uikeyboardtype.md): Constants that specify the type of keyboard to display for a text-based view.
- [keyboardAppearance](keyboardappearance.md): The appearance style of the keyboard for the text object.
- [UIKeyboardAppearance](../uikeyboardappearance.md): Constants that specify the appearance of the keyboard for a text-based view.
- [returnKeyType](returnkeytype.md): The visible indication of what the Return key does.
- [UIReturnKeyType](../uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](textcontenttype.md): The semantic meaning for a text input area.
- [UITextContentType](../uitextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.
