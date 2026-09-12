> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/textcolor](https://developer.apple.com/documentation/uikit/uitextview/textcolor)

# textColor (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The color of the text.

## Declaration

```swift
var textColor: UIColor? { get set }
```

<a id="Discussion"></a>

## Discussion

This property applies to the entire text string. The default text color is black.

In iOS 6 and later, assigning a new value to this property causes the new text color to be applied to the entire contents of the text view. If you want to apply the color to only a portion of the text, you must create a new attributed string with the desired style information and assign it to the [attributedText](attributedtext.md) property.

## See Also

### Related Documentation

- [backgroundColor](../uiview/backgroundcolor.md): The view’s background color.

### Configuring appearance attributes

- [font](font.md): The font of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [linkTextAttributes](linktextattributes.md): The attributes to apply to links.
- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [textHighlightAttributes](texthighlightattributes.md)
- [drawTextHighlightBackground(for:origin:)](drawtexthighlightbackground%28for_origin_%29.md)
- [UITextView.BorderStyle](borderstyle-swift.enum.md): The type of border around the text view.

# textColor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The color of the text.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * textColor;
```

<a id="Discussion"></a>

## Discussion

This property applies to the entire text string. The default text color is black.

In iOS 6 and later, assigning a new value to this property causes the new text color to be applied to the entire contents of the text view. If you want to apply the color to only a portion of the text, you must create a new attributed string with the desired style information and assign it to the [attributedText](attributedtext.md) property.

## See Also

### Related Documentation

- [backgroundColor](../uiview/backgroundcolor.md): The view’s background color.

### Configuring appearance attributes

- [font](font.md): The font of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [linkTextAttributes](linktextattributes.md): The attributes to apply to links.
- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [textHighlightAttributes](texthighlightattributes.md)
- [drawTextHighlightBackgroundForTextRange:origin:](drawtexthighlightbackground%28for_origin_%29.md)
- [UITextViewBorderStyle](borderstyle-swift.enum.md): The type of border around the text view.
