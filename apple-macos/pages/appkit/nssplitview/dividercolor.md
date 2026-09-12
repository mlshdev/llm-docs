> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssplitview/dividercolor](https://developer.apple.com/documentation/appkit/nssplitview/dividercolor)

# dividerColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The color of the dividers that the split view draws between subviews.

## Declaration

```swift
@NSCopying var dividerColor: NSColor { get }
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [clear](../nscolor/clear.md) when the split view’s [dividerStyle](dividerstyle-swift.property.md) is [NSSplitView.DividerStyle.thick](dividerstyle-swift.enum/thick.md), or when [dividerStyle](dividerstyle-swift.property.md) is [NSSplitView.DividerStyle.paneSplitter](dividerstyle-swift.enum/panesplitter.md) and the split view is in a textured window. The system draws all other thin dividers with a color that provides appropriate contrast between two white panes.

You can subclass [NSSplitView](../nssplitview.md) and override this method to change the color of dividers.

## See Also

### Configuring and Drawing Dividers

- [dividerStyle](dividerstyle-swift.property.md): The style of divider between views.
- [NSSplitView.DividerStyle](dividerstyle-swift.enum.md): Constants that specify the style of the split view’s dividers.
- [dividerThickness](dividerthickness.md): The thickness of the dividers for the split view.
- [drawDivider(in:)](drawdivider%28in_%29.md): Draws a divider between two of the split view’s subviews.

# dividerColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The color of the dividers that the split view draws between subviews.

## Declaration

```objectivec
@property (copy, readonly) NSColor * dividerColor;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns [clearColor](../nscolor/clear.md) when the split view’s [dividerStyle](dividerstyle-swift.property.md) is [NSSplitViewDividerStyleThick](dividerstyle-swift.enum/thick.md), or when [dividerStyle](dividerstyle-swift.property.md) is [NSSplitViewDividerStylePaneSplitter](dividerstyle-swift.enum/panesplitter.md) and the split view is in a textured window. The system draws all other thin dividers with a color that provides appropriate contrast between two white panes.

You can subclass [NSSplitView](../nssplitview.md) and override this method to change the color of dividers.

## See Also

### Configuring and Drawing Dividers

- [dividerStyle](dividerstyle-swift.property.md): The style of divider between views.
- [NSSplitViewDividerStyle](dividerstyle-swift.enum.md): Constants that specify the style of the split view’s dividers.
- [dividerThickness](dividerthickness.md): The thickness of the dividers for the split view.
- [drawDividerInRect:](drawdivider%28in_%29.md): Draws a divider between two of the split view’s subviews.
