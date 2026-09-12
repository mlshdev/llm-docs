> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/tooltip](https://developer.apple.com/documentation/appkit/nsview/tooltip)

# toolTip (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text for the view’s tooltip.

## Declaration

```swift
var toolTip: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the view does not currently display tooltip text. Assigning a value to this property causes the tooltip to be displayed for the view. Setting the property to nil cancels the display of the tooltip for the view.

## See Also

### Providing a Tool Tip

- [addToolTip(\_:owner:userData:)](addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeAllToolTips()](removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [removeToolTip(\_:)](removetooltip%28__%29.md): Removes the tooltip identified by specified tag.
- [NSView.ToolTipTag](tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.

# toolTip (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The text for the view’s tooltip.

## Declaration

```objectivec
@property (copy, nullable) NSString * toolTip;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the view does not currently display tooltip text. Assigning a value to this property causes the tooltip to be displayed for the view. Setting the property to nil cancels the display of the tooltip for the view.

## See Also

### Providing a Tool Tip

- [addToolTipRect:owner:userData:](addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeAllToolTips](removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [removeToolTip:](removetooltip%28__%29.md): Removes the tooltip identified by specified tag.
- [NSToolTipTag](tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.
