> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/linebreakmode](https://developer.apple.com/documentation/uikit/uibutton/linebreakmode)

# lineBreakMode

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The line break mode to use when drawing text.

> Use the `lineBreakMode` property of the [titleLabel](titlelabel.md) instead.

## Declaration

```objectivec
@property (nonatomic) NSLineBreakMode lineBreakMode;
```

<a id="Discussion"></a>

## Discussion

This property is one of the constants described in the [UILineBreakMode](../uilinebreakmode.md) enumeration in NSString UIKit Additions Reference. The default value is [UILineBreakModeMiddleTruncation](../uilinebreakmode/uilinebreakmodemiddletruncation.md).

## See Also

### Title effects

- [font](font.md): Deprecated. The font used to display text on the button.
- [titleShadowOffset](titleshadowoffset.md): Deprecated. The offset of the shadow used to display the receiver’s title.
- [reversesTitleShadowWhenHighlighted](reversestitleshadowwhenhighlighted.md): Deprecated. A Boolean value that determines whether the title shadow changes when the button is highlighted.
