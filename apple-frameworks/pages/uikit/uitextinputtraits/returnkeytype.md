> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitextinputtraits/returnkeytype

# returnKeyType (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The visible indication of what the Return key does.

## Declaration

```swift
optional var returnKeyType: UIReturnKeyType { get set }
```

<a id="Discussion"></a>

## Discussion

Setting this property to a different key type changes the visible title of the Return key and typically results in the system dismissing the keyboard when it is pressed. The default value for this property is [UIReturnKeyType.default](../uireturnkeytype/default.md).

## See Also

### Configuring the keyboard appearance

- [keyboardType](keyboardtype.md): The keyboard type for the text object.
- [UIKeyboardType](../uikeyboardtype.md): Constants that specify the type of keyboard to display for a text-based view.
- [keyboardAppearance](keyboardappearance.md): The appearance style of the keyboard for the text object.
- [UIKeyboardAppearance](../uikeyboardappearance.md): Constants that specify the appearance of the keyboard for a text-based view.
- [UIReturnKeyType](../uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](textcontenttype.md): The semantic meaning for a text input area.
- [UITextContentType](../uitextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.

# returnKeyType (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The visible indication of what the Return key does.

## Declaration

```objectivec
@property (nonatomic) UIReturnKeyType returnKeyType;
```

<a id="Discussion"></a>

## Discussion

Setting this property to a different key type changes the visible title of the Return key and typically results in the system dismissing the keyboard when it is pressed. The default value for this property is [UIReturnKeyDefault](../uireturnkeytype/default.md).

## See Also

### Configuring the keyboard appearance

- [keyboardType](keyboardtype.md): The keyboard type for the text object.
- [UIKeyboardType](../uikeyboardtype.md): Constants that specify the type of keyboard to display for a text-based view.
- [keyboardAppearance](keyboardappearance.md): The appearance style of the keyboard for the text object.
- [UIKeyboardAppearance](../uikeyboardappearance.md): Constants that specify the appearance of the keyboard for a text-based view.
- [UIReturnKeyType](../uireturnkeytype.md): Constants that specify the type of Return key the keyboard displays.
- [textContentType](textcontenttype.md): The semantic meaning for a text input area.
- [UITextContentType](../uitextcontenttype.md): Constants that identify the semantic meaning for a text-entry area.
