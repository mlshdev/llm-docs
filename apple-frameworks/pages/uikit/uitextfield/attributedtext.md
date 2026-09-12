> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/attributedtext](https://developer.apple.com/documentation/uikit/uitextfield/attributedtext)

# attributedText (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The styled text that the text field displays.

## Declaration

```swift
@NSCopying var attributedText: NSAttributedString? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` by default. Assigning a new value to this property also replaces the value of the [text](text.md) property with the same string data, albeit without any formatting information. In addition, assigning a new value updates the values in the [font](font.md), [textColor](textcolor.md), and other style-related properties so that they reflect the style information starting at location `0` in the attributed string.

## See Also

### Configuring the text attributes

- [text](text.md): The text that the text field displays.
- [placeholder](placeholder.md): The string that displays when there is no other text in the text field.
- [attributedPlaceholder](attributedplaceholder.md): The styled string that displays when there is no other text in the text field.
- [defaultTextAttributes](defaulttextattributes.md): The default attributes to apply to the text.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [UITextField.BorderStyle](borderstyle-swift.enum.md): The type of border around the text field.

# attributedText (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The styled text that the text field displays.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSAttributedString * attributedText;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` by default. Assigning a new value to this property also replaces the value of the [text](text.md) property with the same string data, albeit without any formatting information. In addition, assigning a new value updates the values in the [font](font.md), [textColor](textcolor.md), and other style-related properties so that they reflect the style information starting at location `0` in the attributed string.

## See Also

### Configuring the text attributes

- [text](text.md): The text that the text field displays.
- [placeholder](placeholder.md): The string that displays when there is no other text in the text field.
- [attributedPlaceholder](attributedplaceholder.md): The styled string that displays when there is no other text in the text field.
- [defaultTextAttributes](defaulttextattributes.md): The default attributes to apply to the text.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [UITextBorderStyle](borderstyle-swift.enum.md): The type of border around the text field.
