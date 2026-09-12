> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibutton/font](https://developer.apple.com/documentation/uikit/uibutton/font)

# font

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The font used to display text on the button.

> Use the `font` property of the [titleLabel](titlelabel.md) instead.

## Declaration

```objectivec
@property (nonatomic, strong) UIFont * font;
```

<a id="Discussion"></a>

## Discussion

If `nil`, a system font is used. The default value is `nil`.

## See Also

### Related Documentation

- [titleLabel](titlelabel.md): A view that displays the value of the `currentTitle` property for a button.

### Title effects

- [lineBreakMode](linebreakmode.md): Deprecated. The line break mode to use when drawing text.
- [titleShadowOffset](titleshadowoffset.md): Deprecated. The offset of the shadow used to display the receiver’s title.
- [reversesTitleShadowWhenHighlighted](reversestitleshadowwhenhighlighted.md): Deprecated. A Boolean value that determines whether the title shadow changes when the button is highlighted.
