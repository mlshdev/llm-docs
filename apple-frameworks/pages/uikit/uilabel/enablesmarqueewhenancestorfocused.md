> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/enablesmarqueewhenancestorfocused](https://developer.apple.com/documentation/uikit/uilabel/enablesmarqueewhenancestorfocused)

# enablesMarqueeWhenAncestorFocused (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.

## Declaration

```swift
var enablesMarqueeWhenAncestorFocused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), then the label ignores [lineBreakMode](linebreakmode.md), [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md), and [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md). The label scrolls its text when any ancestor in its view hierarchy has focus.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the text attributes

- [text](text.md): The text that the label displays.
- [attributedText](attributedtext.md): The styled text that the label displays.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [lineBreakMode](linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [isEnabled](isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.

# enablesMarqueeWhenAncestorFocused (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** tvOS 12.0+

A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.

## Declaration

```objectivec
@property (nonatomic) BOOL enablesMarqueeWhenAncestorFocused;
```

<a id="Discussion"></a>

## Discussion

If this value is [true](https://developer.apple.com/documentation/swift/true), then the label ignores [lineBreakMode](linebreakmode.md), [adjustsFontSizeToFitWidth](adjustsfontsizetofitwidth.md), and [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md). The label scrolls its text when any ancestor in its view hierarchy has focus.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the text attributes

- [text](text.md): The text that the label displays.
- [attributedText](attributedtext.md): The styled text that the label displays.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [lineBreakMode](linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [enabled](isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.
