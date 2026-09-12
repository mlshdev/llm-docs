> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/dividerthickness](https://developer.apple.com/documentation/appkit/nssplitview/dividerthickness)

# dividerThickness (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The thickness of the dividers for the split view.

## Declaration

```swift
var dividerThickness: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

You can subclass [NSSplitView](../nssplitview.md) and override this method to change the thickness of a split view’s dividers.

## See Also

### Configuring and Drawing Dividers

- [dividerStyle](dividerstyle-swift.property.md): The style of divider between views.
- [NSSplitView.DividerStyle](dividerstyle-swift.enum.md): Constants that specify the style of the split view’s dividers.
- [dividerColor](dividercolor.md): The color of the dividers that the split view draws between subviews.
- [drawDivider(in:)](drawdivider%28in_%29.md): Draws a divider between two of the split view’s subviews.

# dividerThickness (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The thickness of the dividers for the split view.

## Declaration

```objectivec
@property (readonly) CGFloat dividerThickness;
```

<a id="Discussion"></a>

## Discussion

You can subclass [NSSplitView](../nssplitview.md) and override this method to change the thickness of a split view’s dividers.

## See Also

### Configuring and Drawing Dividers

- [dividerStyle](dividerstyle-swift.property.md): The style of divider between views.
- [NSSplitViewDividerStyle](dividerstyle-swift.enum.md): Constants that specify the style of the split view’s dividers.
- [dividerColor](dividercolor.md): The color of the dividers that the split view draws between subviews.
- [drawDividerInRect:](drawdivider%28in_%29.md): Draws a divider between two of the split view’s subviews.
