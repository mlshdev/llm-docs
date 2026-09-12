> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/font](https://developer.apple.com/documentation/uikit/uitextview/font)

# font (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The font of the text.

## Declaration

```swift
var font: UIFont? { get set }
```

<a id="Discussion"></a>

## Discussion

This property applies to the entire text string. The default value of this property is the body style of the system font.

> **Note**

>  You can get information about the fonts available on the system using the methods of the [UIFont](../uifont.md) class.

In iOS 6 and later, assigning a new value to this property causes the new font to be applied to the entire contents of the text view. If you want to apply the font to only a portion of the text, you must create a new attributed string with the desired style information and assign it to the [attributedText](attributedtext.md) property.

## See Also

### Configuring appearance attributes

- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [linkTextAttributes](linktextattributes.md): The attributes to apply to links.
- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [textHighlightAttributes](texthighlightattributes.md)
- [drawTextHighlightBackground(for:origin:)](drawtexthighlightbackground%28for_origin_%29.md)
- [UITextView.BorderStyle](borderstyle-swift.enum.md): The type of border around the text view.

# font (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The font of the text.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIFont * font;
```

<a id="Discussion"></a>

## Discussion

This property applies to the entire text string. The default value of this property is the body style of the system font.

> **Note**

>  You can get information about the fonts available on the system using the methods of the [UIFont](../uifont.md) class.

In iOS 6 and later, assigning a new value to this property causes the new font to be applied to the entire contents of the text view. If you want to apply the font to only a portion of the text, you must create a new attributed string with the desired style information and assign it to the [attributedText](attributedtext.md) property.

## See Also

### Configuring appearance attributes

- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [linkTextAttributes](linktextattributes.md): The attributes to apply to links.
- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [textHighlightAttributes](texthighlightattributes.md)
- [drawTextHighlightBackgroundForTextRange:origin:](drawtexthighlightbackground%28for_origin_%29.md)
- [UITextViewBorderStyle](borderstyle-swift.enum.md): The type of border around the text view.
