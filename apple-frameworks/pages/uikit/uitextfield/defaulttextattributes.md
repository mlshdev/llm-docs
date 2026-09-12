> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/defaulttextattributes](https://developer.apple.com/documentation/uikit/uitextfield/defaulttextattributes)

# defaultTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The default attributes to apply to the text.

## Declaration

```swift
var defaultTextAttributes: [NSAttributedString.Key : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property returns a dictionary of text attributes with default values.

Setting this property applies the specified attributes to the entire text of the text field. Unset attributes maintain their default values.

Getting this property returns the previously set attributes, which may have been modified by setting properties such as [font](font.md) and [textColor](textcolor.md).

## See Also

### Configuring the text attributes

- [text](text.md): The text that the text field displays.
- [attributedText](attributedtext.md): The styled text that the text field displays.
- [placeholder](placeholder.md): The string that displays when there is no other text in the text field.
- [attributedPlaceholder](attributedplaceholder.md): The styled string that displays when there is no other text in the text field.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [UITextField.BorderStyle](borderstyle-swift.enum.md): The type of border around the text field.

# defaultTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The default attributes to apply to the text.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSString *,id> * defaultTextAttributes;
```

<a id="Discussion"></a>

## Discussion

By default, this property returns a dictionary of text attributes with default values.

Setting this property applies the specified attributes to the entire text of the text field. Unset attributes maintain their default values.

Getting this property returns the previously set attributes, which may have been modified by setting properties such as [font](font.md) and [textColor](textcolor.md).

## See Also

### Configuring the text attributes

- [text](text.md): The text that the text field displays.
- [attributedText](attributedtext.md): The styled text that the text field displays.
- [placeholder](placeholder.md): The string that displays when there is no other text in the text field.
- [attributedPlaceholder](attributedplaceholder.md): The styled string that displays when there is no other text in the text field.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [UITextBorderStyle](borderstyle-swift.enum.md): The type of border around the text field.
