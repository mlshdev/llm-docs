> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/removealltooltips()](https://developer.apple.com/documentation/appkit/nsview/removealltooltips())

# removeAllToolTips() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes all tooltips assigned to the view.

## Declaration

```swift
func removeAllToolTips()
```

<a id="Discussion"></a>

## Discussion

This method operates on tooltips created using either [addToolTip(\_:owner:userData:)](addtooltip%28__owner_userdata_%29.md) or set using the [toolTip](tooltip.md) property.

## See Also

### Providing a Tool Tip

- [toolTip](tooltip.md): The text for the view’s tooltip.
- [addToolTip(\_:owner:userData:)](addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeToolTip(\_:)](removetooltip%28__%29.md): Removes the tooltip identified by specified tag.
- [NSView.ToolTipTag](tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.

# removeAllToolTips (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes all tooltips assigned to the view.

## Declaration

```objectivec
- (void) removeAllToolTips;
```

<a id="Discussion"></a>

## Discussion

This method operates on tooltips created using either [addToolTipRect:owner:userData:](addtooltip%28__owner_userdata_%29.md) or set using the [toolTip](tooltip.md) property.

## See Also

### Providing a Tool Tip

- [toolTip](tooltip.md): The text for the view’s tooltip.
- [addToolTipRect:owner:userData:](addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeToolTip:](removetooltip%28__%29.md): Removes the tooltip identified by specified tag.
- [NSToolTipTag](tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.
