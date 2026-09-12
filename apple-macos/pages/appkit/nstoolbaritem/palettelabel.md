> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/palettelabel](https://developer.apple.com/documentation/appkit/nstoolbaritem/palettelabel)

# paletteLabel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The label that appears when the toolbar item is in the customization palette.

## Declaration

```swift
var paletteLabel: String { get set }
```

<a id="Discussion"></a>

## Discussion

If you support toolbar customizations, you must provide palette labels for your items. In most cases, you can apply the same value to this property and the [label](label.md) property. However, you might use this property to offer a more descriptive string, or to provide a label string when the [label](label.md) property contains an empty string.

## See Also

### Describing the item

- [possibleLabels](possiblelabels.md): The set of labels that the item might display.
- [label](label.md): The label that appears for this item in the toolbar.
- [title](title.md): The title of the toolbar item.
- [toolTip](tooltip.md): The tooltip to display when someone hovers over the item in the toolbar.

# paletteLabel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The label that appears when the toolbar item is in the customization palette.

## Declaration

```objectivec
@property (copy) NSString * paletteLabel;
```

<a id="Discussion"></a>

## Discussion

If you support toolbar customizations, you must provide palette labels for your items. In most cases, you can apply the same value to this property and the [label](label.md) property. However, you might use this property to offer a more descriptive string, or to provide a label string when the [label](label.md) property contains an empty string.

## See Also

### Describing the item

- [possibleLabels](possiblelabels.md): The set of labels that the item might display.
- [label](label.md): The label that appears for this item in the toolbar.
- [title](title.md): The title of the toolbar item.
- [toolTip](tooltip.md): The tooltip to display when someone hovers over the item in the toolbar.
