> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/removetooltip(_:)](https://developer.apple.com/documentation/appkit/nsview/removetooltip(_:))

# removeToolTip(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the tooltip identified by specified tag.

## Declaration

```swift
func removeToolTip(_ tag: NSView.ToolTipTag)
```

## Parameters

- `tag`: An integer tag that is the value returned by a previous [addToolTip(\_:owner:userData:)](addtooltip%28__owner_userdata_%29.md) message.

## See Also

### Providing a Tool Tip

- [toolTip](tooltip.md): The text for the view’s tooltip.
- [addToolTip(\_:owner:userData:)](addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeAllToolTips()](removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [NSView.ToolTipTag](tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.

# removeToolTip: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the tooltip identified by specified tag.

## Declaration

```objectivec
- (void) removeToolTip:(NSToolTipTag) tag;
```

## Parameters

- `tag`: An integer tag that is the value returned by a previous [addToolTipRect:owner:userData:](addtooltip%28__owner_userdata_%29.md) message.

## See Also

### Providing a Tool Tip

- [toolTip](tooltip.md): The text for the view’s tooltip.
- [addToolTipRect:owner:userData:](addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeAllToolTips](removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [NSToolTipTag](tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.
