> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextfield/typingattributes](https://developer.apple.com/documentation/uikit/uitextfield/typingattributes)

# typingAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The attributes to apply to new text that the user enters.

## Declaration

```swift
var typingAttributes: [NSAttributedString.Key : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

This dictionary contains the attribute keys (and corresponding values) to apply to newly typed text. When the text field’s selection changes, the contents of the dictionary are cleared automatically.

If the text field is not in editing mode, this property contains the value `nil`. Similarly, you cannot assign a value to this property unless the text field is currently in editing mode.

## See Also

### Related Documentation

- [isEditing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.

### Configuring the text attributes

- [text](text.md): The text that the text field displays.
- [attributedText](attributedtext.md): The styled text that the text field displays.
- [placeholder](placeholder.md): The string that displays when there is no other text in the text field.
- [attributedPlaceholder](attributedplaceholder.md): The styled string that displays when there is no other text in the text field.
- [defaultTextAttributes](defaulttextattributes.md): The default attributes to apply to the text.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [UITextField.BorderStyle](borderstyle-swift.enum.md): The type of border around the text field.

# typingAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The attributes to apply to new text that the user enters.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary<NSString *,id> * typingAttributes;
```

<a id="Discussion"></a>

## Discussion

This dictionary contains the attribute keys (and corresponding values) to apply to newly typed text. When the text field’s selection changes, the contents of the dictionary are cleared automatically.

If the text field is not in editing mode, this property contains the value `nil`. Similarly, you cannot assign a value to this property unless the text field is currently in editing mode.

## See Also

### Related Documentation

- [editing](isediting.md): A Boolean value that indicates whether the text field is currently in edit mode.

### Configuring the text attributes

- [text](text.md): The text that the text field displays.
- [attributedText](attributedtext.md): The styled text that the text field displays.
- [placeholder](placeholder.md): The string that displays when there is no other text in the text field.
- [attributedPlaceholder](attributedplaceholder.md): The styled string that displays when there is no other text in the text field.
- [defaultTextAttributes](defaulttextattributes.md): The default attributes to apply to the text.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [UITextBorderStyle](borderstyle-swift.enum.md): The type of border around the text field.
