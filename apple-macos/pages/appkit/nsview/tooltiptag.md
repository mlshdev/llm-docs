> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/tooltiptag](https://developer.apple.com/documentation/appkit/nsview/tooltiptag)

# NSView.ToolTipTag (Swift)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

This type describes the rectangle used to identify a tooltip rectangle.

## Declaration

```swift
typealias ToolTipTag = Int
```

<a id="Discussion"></a>

## Discussion

If the value of this type is 0, it is invalid. See the methods [addToolTip(\_:owner:userData:)](addtooltip%28__owner_userdata_%29.md) and[removeToolTip(\_:)](removetooltip%28__%29.md).

## See Also

### Providing a Tool Tip

- [toolTip](tooltip.md): The text for the view’s tooltip.
- [addToolTip(\_:owner:userData:)](addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeAllToolTips()](removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [removeToolTip(\_:)](removetooltip%28__%29.md): Removes the tooltip identified by specified tag.

# NSToolTipTag (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

This type describes the rectangle used to identify a tooltip rectangle.

## Declaration

```objectivec
typedef NSInteger NSToolTipTag;
```

<a id="Discussion"></a>

## Discussion

If the value of this type is 0, it is invalid. See the methods [addToolTipRect:owner:userData:](addtooltip%28__owner_userdata_%29.md) and[removeToolTip:](removetooltip%28__%29.md).

## See Also

### Providing a Tool Tip

- [toolTip](tooltip.md): The text for the view’s tooltip.
- [addToolTipRect:owner:userData:](addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeAllToolTips](removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [removeToolTip:](removetooltip%28__%29.md): Removes the tooltip identified by specified tag.
