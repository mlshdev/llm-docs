> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/text](https://developer.apple.com/documentation/uikit/uitextfield/text)

# text (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text that the text field displays.

## Declaration

```swift
var text: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a new value to this property also replaces the value of the [attributedText](attributedtext.md) property with the same text, albeit without any inherent style attributes. Instead the text view styles the new string using the [font](font.md), [textColor](textcolor.md), and other style-related properties of the class.

This value is `nil` by default.

## See Also

### Configuring the text attributes

- [attributedText](attributedtext.md): The styled text that the text field displays.
- [placeholder](placeholder.md): The string that displays when there is no other text in the text field.
- [attributedPlaceholder](attributedplaceholder.md): The styled string that displays when there is no other text in the text field.
- [defaultTextAttributes](defaulttextattributes.md): The default attributes to apply to the text.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [UITextField.BorderStyle](borderstyle-swift.enum.md): The type of border around the text field.

# text (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text that the text field displays.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * text;
```

<a id="Discussion"></a>

## Discussion

Assigning a new value to this property also replaces the value of the [attributedText](attributedtext.md) property with the same text, albeit without any inherent style attributes. Instead the text view styles the new string using the [font](font.md), [textColor](textcolor.md), and other style-related properties of the class.

This value is `nil` by default.

## See Also

### Configuring the text attributes

- [attributedText](attributedtext.md): The styled text that the text field displays.
- [placeholder](placeholder.md): The string that displays when there is no other text in the text field.
- [attributedPlaceholder](attributedplaceholder.md): The styled string that displays when there is no other text in the text field.
- [defaultTextAttributes](defaulttextattributes.md): The default attributes to apply to the text.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [UITextBorderStyle](borderstyle-swift.enum.md): The type of border around the text field.
