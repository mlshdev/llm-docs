> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/typingattributes](https://developer.apple.com/documentation/uikit/uitextview/typingattributes)

# typingAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The attributes to apply to new text that the user enters.

## Declaration

```swift
var typingAttributes: [NSAttributedString.Key : Any] { get set }
```

<a id="Discussion"></a>

## Discussion

This dictionary contains the attribute keys (and corresponding values) to apply to newly typed text. When the text view’s selection changes, the contents of the dictionary are cleared automatically.

## See Also

### Related Documentation

- [isEditable](iseditable.md): A Boolean value that indicates whether the text view is editable.

### Configuring appearance attributes

- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [linkTextAttributes](linktextattributes.md): The attributes to apply to links.
- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [textHighlightAttributes](texthighlightattributes.md)
- [drawTextHighlightBackground(for:origin:)](drawtexthighlightbackground%28for_origin_%29.md)
- [UITextView.BorderStyle](borderstyle-swift.enum.md): The type of border around the text view.

# typingAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The attributes to apply to new text that the user enters.

## Declaration

```objectivec
@property (nonatomic, copy) NSDictionary<NSString *,id> * typingAttributes;
```

<a id="Discussion"></a>

## Discussion

This dictionary contains the attribute keys (and corresponding values) to apply to newly typed text. When the text view’s selection changes, the contents of the dictionary are cleared automatically.

## See Also

### Related Documentation

- [editable](iseditable.md): A Boolean value that indicates whether the text view is editable.

### Configuring appearance attributes

- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [linkTextAttributes](linktextattributes.md): The attributes to apply to links.
- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [textHighlightAttributes](texthighlightattributes.md)
- [drawTextHighlightBackgroundForTextRange:origin:](drawtexthighlightbackground%28for_origin_%29.md)
- [UITextViewBorderStyle](borderstyle-swift.enum.md): The type of border around the text view.
