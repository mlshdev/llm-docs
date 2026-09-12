> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfield/maximumnumberoflines](https://developer.apple.com/documentation/appkit/nstextfield/maximumnumberoflines)

# maximumNumberOfLines (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum number of lines a wrapping text field displays before clipping or truncating the text.

## Declaration

```swift
var maximumNumberOfLines: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of `0` indicates no limit to the number of lines, and the text fills the bounds of the text field cell.

If the text field reaches the maximum number of lines, or if the height of the container can’t accommodate the number of lines, the text field clips or truncates the text, depending on the cell’s [truncatesLastVisibleLine](../nscell/truncateslastvisibleline.md) setting.

> **Important**

>  This value also affects [sizeThatFits(\_:)](../nscontrol/sizethatfits%28__%29.md), [fittingSize](../nsview/fittingsize.md), and [intrinsicContentSize](../nsview/intrinsiccontentsize.md). If the value of this property isn’t `1`, the text field may use multiple lines to determine its intrinsic content size.

## See Also

### Configuring line wrapping

- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that controls whether single-line text fields tighten intercharacter spacing before truncating the text.

# maximumNumberOfLines (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The maximum number of lines a wrapping text field displays before clipping or truncating the text.

## Declaration

```objectivec
@property NSInteger maximumNumberOfLines;
```

<a id="Discussion"></a>

## Discussion

The default value of `0` indicates no limit to the number of lines, and the text fills the bounds of the text field cell.

If the text field reaches the maximum number of lines, or if the height of the container can’t accommodate the number of lines, the text field clips or truncates the text, depending on the cell’s [truncatesLastVisibleLine](../nscell/truncateslastvisibleline.md) setting.

> **Important**

>  This value also affects [sizeThatFits:](../nscontrol/sizethatfits%28__%29.md), [fittingSize](../nsview/fittingsize.md), and [intrinsicContentSize](../nsview/intrinsiccontentsize.md). If the value of this property isn’t `1`, the text field may use multiple lines to determine its intrinsic content size.

## See Also

### Configuring line wrapping

- [lineBreakStrategy](linebreakstrategy.md): The strategy that the system uses to break lines when laying out multiple lines of text.
- [allowsDefaultTighteningForTruncation](allowsdefaulttighteningfortruncation.md): A Boolean value that controls whether single-line text fields tighten intercharacter spacing before truncating the text.
