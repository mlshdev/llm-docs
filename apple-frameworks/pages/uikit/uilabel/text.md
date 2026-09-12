> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/text](https://developer.apple.com/documentation/uikit/uilabel/text)

# text (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text that the label displays.

## Declaration

```swift
var text: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` by default. Assigning a new value to this property also replaces the value of the [attributedText](attributedtext.md) property with the same text, although without any inherent style attributes. Instead the label styles the new string using [shadowColor](shadowcolor.md), [textAlignment](textalignment.md), and other style-related properties of the class.

## See Also

### Accessing the text attributes

- [attributedText](attributedtext.md): The styled text that the label displays.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [lineBreakMode](linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [isEnabled](isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.

# text (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The text that the label displays.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * text;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` by default. Assigning a new value to this property also replaces the value of the [attributedText](attributedtext.md) property with the same text, although without any inherent style attributes. Instead the label styles the new string using [shadowColor](shadowcolor.md), [textAlignment](textalignment.md), and other style-related properties of the class.

## See Also

### Accessing the text attributes

- [attributedText](attributedtext.md): The styled text that the label displays.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [lineBreakMode](linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [enabled](isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.
