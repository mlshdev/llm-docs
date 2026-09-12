> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/linebreakstrategy](https://developer.apple.com/documentation/appkit/nstextfield/linebreakstrategy)

# lineBreakStrategy (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The strategy that the system uses to break lines when laying out multiple lines of text.

## Declaration

```swift
var lineBreakStrategy: NSParagraphStyle.LineBreakStrategy { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for editable text fields is [NSLineBreakStrategyNone](../nslinebreakstrategy/nslinebreakstrategynone.md) to match the field editor’s behavior. The default value for selectable, uneditable text fields is [standard](../nsparagraphstyle/linebreakstrategy-swift.struct/standard.md).

> **Note**

>  When the text field has an attributed string value, the system ignores the [textColor](textcolor.md), [font](../nscontrol/font.md), [alignment](../nscontrol/alignment.md), [lineBreakMode](../nscontrol/linebreakmode.md), and `lineBreakStrategy` properties. Set the [foregroundColor](https://developer.apple.com/documentation/foundation/nsattributedstring/key/foregroundcolor), [font](https://developer.apple.com/documentation/foundation/nsattributedstring/key/font), [alignment](../nsmutableparagraphstyle/alignment.md), [lineBreakMode](../nsparagraphstyle/linebreakmode.md), and [lineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.property.md) properties in the attributed string instead.

## See Also

### Configuring line wrapping

- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that controls whether single-line text fields tighten intercharacter spacing before truncating the text.
- [maximumNumberOfLines](maximumnumberoflines.md): The maximum number of lines a wrapping text field displays before clipping or truncating the text.

# lineBreakStrategy (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The strategy that the system uses to break lines when laying out multiple lines of text.

## Declaration

```objectivec
@property NSLineBreakStrategy lineBreakStrategy;
```

<a id="Discussion"></a>

## Discussion

The default value for editable text fields is [NSLineBreakStrategyNone](../nslinebreakstrategy/nslinebreakstrategynone.md) to match the field editor’s behavior. The default value for selectable, uneditable text fields is [NSLineBreakStrategyStandard](../nsparagraphstyle/linebreakstrategy-swift.struct/standard.md).

> **Note**

>  When the text field has an attributed string value, the system ignores the [textColor](textcolor.md), [font](../nscontrol/font.md), [alignment](../nscontrol/alignment.md), [lineBreakMode](../nscontrol/linebreakmode.md), and `lineBreakStrategy` properties. Set the [foregroundColor](https://developer.apple.com/documentation/foundation/nsattributedstring/key/foregroundcolor), [font](https://developer.apple.com/documentation/foundation/nsattributedstring/key/font), [alignment](../nsmutableparagraphstyle/alignment.md), [lineBreakMode](../nsparagraphstyle/linebreakmode.md), and [lineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.property.md) properties in the attributed string instead.

## See Also

### Configuring line wrapping

- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that controls whether single-line text fields tighten intercharacter spacing before truncating the text.
- [maximumNumberOfLines](maximumnumberoflines.md): The maximum number of lines a wrapping text field displays before clipping or truncating the text.
