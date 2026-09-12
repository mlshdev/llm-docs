> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilabel/linebreakstrategy](https://developer.apple.com/documentation/uikit/uilabel/linebreakstrategy)

# lineBreakStrategy (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The strategy that the system uses to break lines when laying out multiple lines of text.

## Declaration

```swift
var lineBreakStrategy: NSParagraphStyle.LineBreakStrategy { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [standard](../nsparagraphstyle/linebreakstrategy-swift.struct/standard.md).

> **Note**

>  When the label has an attributed string value, the system ignores the [textColor](textcolor.md), [font](font.md), [textAlignment](textalignment.md), [lineBreakMode](linebreakmode.md), and [lineBreakStrategy](linebreakstrategy.md) properties. Set the [NSForegroundColorAttributeName](../nsforegroundcolorattributename.md), [NSFontAttributeName](../nsfontattributename.md), [alignment](../nsmutableparagraphstyle/alignment.md), [lineBreakMode](../nsparagraphstyle/linebreakmode.md), and [lineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.property.md) properties in the attributed string instead.

## See Also

### Accessing the text attributes

- [text](text.md): The text that the label displays.
- [attributedText](attributedtext.md): The styled text that the label displays.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [lineBreakMode](linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [isEnabled](isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.

# lineBreakStrategy (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The strategy that the system uses to break lines when laying out multiple lines of text.

## Declaration

```objectivec
@property (nonatomic) NSLineBreakStrategy lineBreakStrategy;
```

<a id="Discussion"></a>

## Discussion

The default value is [NSLineBreakStrategyStandard](../nsparagraphstyle/linebreakstrategy-swift.struct/standard.md).

> **Note**

>  When the label has an attributed string value, the system ignores the [textColor](textcolor.md), [font](font.md), [textAlignment](textalignment.md), [lineBreakMode](linebreakmode.md), and [lineBreakStrategy](linebreakstrategy.md) properties. Set the [NSForegroundColorAttributeName](../nsforegroundcolorattributename.md), [NSFontAttributeName](../nsfontattributename.md), [alignment](../nsmutableparagraphstyle/alignment.md), [lineBreakMode](../nsparagraphstyle/linebreakmode.md), and [lineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.property.md) properties in the attributed string instead.

## See Also

### Accessing the text attributes

- [text](text.md): The text that the label displays.
- [attributedText](attributedtext.md): The styled text that the label displays.
- [font](font.md): The font of the text.
- [textColor](textcolor.md): The color of the text.
- [textAlignment](textalignment.md): The technique for aligning the text.
- [lineBreakMode](linebreakmode.md): The technique for wrapping and truncating the label’s text.
- [enabled](isenabled.md): A Boolean value that determines whether the label draws its text in an enabled state.
- [enablesMarqueeWhenAncestorFocused](enablesmarqueewhenancestorfocused.md): A Boolean value that determines whether the label scrolls its text while one of its containing views has focus.
- [showsExpansionTextWhenTruncated](showsexpansiontextwhentruncated.md): A Boolean value that determines whether the full text of the label displays when the pointer hovers over the truncated text.
