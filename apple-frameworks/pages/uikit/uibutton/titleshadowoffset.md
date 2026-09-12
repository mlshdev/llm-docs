> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/titleshadowoffset](https://developer.apple.com/documentation/uikit/uibutton/titleshadowoffset)

# titleShadowOffset

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The offset of the shadow used to display the receiver’s title.

> Use the `shadowOffset` property of the [titleLabel](titlelabel.md) instead.

## Declaration

```objectivec
@property (nonatomic) CGSize titleShadowOffset;
```

<a id="Discussion"></a>

## Discussion

The horizontal and vertical offset values, specified using the `width` and `height` fields of the `CGSize` data type. Positive values always extend up and to the right from the user’s perspective. The default value is [CGSizeZero](../../coregraphics/cgsizezero.md).

## See Also

### Related Documentation

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.

### Title effects

- [font](font.md): Deprecated. The font used to display text on the button.
- [lineBreakMode](linebreakmode.md): Deprecated. The line break mode to use when drawing text.
- [reversesTitleShadowWhenHighlighted](reversestitleshadowwhenhighlighted.md): Deprecated. A Boolean value that determines whether the title shadow changes when the button is highlighted.
