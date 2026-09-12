> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/textcolor](https://developer.apple.com/documentation/appkit/nstextfield/textcolor)

# textColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The color of the text field’s content.

## Declaration

```swift
@NSCopying var textColor: NSColor? { get set }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  When the text field has an attributed string value, the system ignores the [textColor](textcolor.md), [font](../nscontrol/font.md), [alignment](../nscontrol/alignment.md), [lineBreakMode](../nscontrol/linebreakmode.md), and `lineBreakStrategy` properties. Set the [foregroundColor](https://developer.apple.com/documentation/foundation/nsattributedstring/key/foregroundcolor), [font](https://developer.apple.com/documentation/foundation/nsattributedstring/key/font), [alignment](../nsmutableparagraphstyle/alignment.md), [lineBreakMode](../nsparagraphstyle/linebreakmode.md), and [lineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.property.md) properties in the attributed string instead.

## See Also

### Related Documentation

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [textColor](../nstextfieldcell/textcolor.md): The color to use to draw the cell’s text.

# textColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The color of the text field’s content.

## Declaration

```objectivec
@property (copy, nullable) NSColor * textColor;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  When the text field has an attributed string value, the system ignores the [textColor](textcolor.md), [font](../nscontrol/font.md), [alignment](../nscontrol/alignment.md), [lineBreakMode](../nscontrol/linebreakmode.md), and `lineBreakStrategy` properties. Set the [foregroundColor](https://developer.apple.com/documentation/foundation/nsattributedstring/key/foregroundcolor), [font](https://developer.apple.com/documentation/foundation/nsattributedstring/key/font), [alignment](../nsmutableparagraphstyle/alignment.md), [lineBreakMode](../nsparagraphstyle/linebreakmode.md), and [lineBreakStrategy](../nsparagraphstyle/linebreakstrategy-swift.property.md) properties in the attributed string instead.

## See Also

### Related Documentation

- [backgroundColor](backgroundcolor.md): The color of the background the text field’s cell draws behind the text.
- [textColor](../nstextfieldcell/textcolor.md): The color to use to draw the cell’s text.
