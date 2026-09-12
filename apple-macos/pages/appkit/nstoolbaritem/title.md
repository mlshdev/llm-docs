> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/title](https://developer.apple.com/documentation/appkit/nstoolbaritem/title)

# title (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The title of the toolbar item.

## Declaration

```swift
var title: String { get set }
```

<a id="Discussion"></a>

## Discussion

If you assign a custom view to the toolbar item, modifying this property updates the [title](title.md) property of the view if one exists. If the toolbar item contains a button, modifying this property updates the button title. If the item doesn’t contain a custom view, the toolbar item manages the content directly.

> **Note**

>  In macOS 12 and earlier, [NSToolbarItem](../nstoolbaritem.md) doesn’t support custom views in Mac apps built with Mac Catalyst.

## See Also

### Describing the item

- [possibleLabels](possiblelabels.md): The set of labels that the item might display.
- [label](label.md): The label that appears for this item in the toolbar.
- [paletteLabel](palettelabel.md): The label that appears when the toolbar item is in the customization palette.
- [toolTip](tooltip.md): The tooltip to display when someone hovers over the item in the toolbar.

# title (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

The title of the toolbar item.

## Declaration

```objectivec
@property (copy) NSString * title;
```

<a id="Discussion"></a>

## Discussion

If you assign a custom view to the toolbar item, modifying this property updates the [title](title.md) property of the view if one exists. If the toolbar item contains a button, modifying this property updates the button title. If the item doesn’t contain a custom view, the toolbar item manages the content directly.

> **Note**

>  In macOS 12 and earlier, [NSToolbarItem](../nstoolbaritem.md) doesn’t support custom views in Mac apps built with Mac Catalyst.

## See Also

### Describing the item

- [possibleLabels](possiblelabels.md): The set of labels that the item might display.
- [label](label.md): The label that appears for this item in the toolbar.
- [paletteLabel](palettelabel.md): The label that appears when the toolbar item is in the customization palette.
- [toolTip](tooltip.md): The tooltip to display when someone hovers over the item in the toolbar.
