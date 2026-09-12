> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextview/linktextattributes](https://developer.apple.com/documentation/uikit/uitextview/linktextattributes)

# linkTextAttributes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The attributes to apply to links.

## Declaration

```swift
var linkTextAttributes: [NSAttributedString.Key : Any]! { get set }
```

<a id="Discussion"></a>

## Discussion

The default attributes specify blue text with a single underline and the pointing hand cursor.

## See Also

### Configuring appearance attributes

- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [textHighlightAttributes](texthighlightattributes.md)
- [drawTextHighlightBackground(for:origin:)](drawtexthighlightbackground%28for_origin_%29.md)
- [UITextView.BorderStyle](borderstyle-swift.enum.md): The type of border around the text view.

# linkTextAttributes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The attributes to apply to links.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSDictionary<NSString *,id> * linkTextAttributes;
```

<a id="Discussion"></a>

## Discussion

The default attributes specify blue text with a single underline and the pointing hand cursor.

## See Also

### Configuring appearance attributes

- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [typingAttributes](typingattributes.md): The attributes to apply to new text that the user enters.
- [borderStyle](borderstyle-swift.property.md): The border style for the text field.
- [textHighlightAttributes](texthighlightattributes.md)
- [drawTextHighlightBackgroundForTextRange:origin:](drawtexthighlightbackground%28for_origin_%29.md)
- [UITextViewBorderStyle](borderstyle-swift.enum.md): The type of border around the text view.
