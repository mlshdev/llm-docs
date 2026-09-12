> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritem/possiblelabels](https://developer.apple.com/documentation/appkit/nstoolbaritem/possiblelabels)

# possibleLabels (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 16.1+ · macOS 13.0+

The set of labels that the item might display.

## Declaration

```swift
var possibleLabels: Set<String> { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify all of the labels you might possibly use for the toolbar item. Specify all strings in the current locale. To ensure there’s space for the longest label, the item sizes itself using the strings you provide.

## See Also

### Describing the item

- [label](label.md): The label that appears for this item in the toolbar.
- [paletteLabel](palettelabel.md): The label that appears when the toolbar item is in the customization palette.
- [title](title.md): The title of the toolbar item.
- [toolTip](tooltip.md): The tooltip to display when someone hovers over the item in the toolbar.

# possibleLabels (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.1+ · macOS 13.0+

The set of labels that the item might display.

## Declaration

```objectivec
@property (copy) NSSet<NSString *> * possibleLabels;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify all of the labels you might possibly use for the toolbar item. Specify all strings in the current locale. To ensure there’s space for the longest label, the item sizes itself using the strings you provide.

## See Also

### Describing the item

- [label](label.md): The label that appears for this item in the toolbar.
- [paletteLabel](palettelabel.md): The label that appears when the toolbar item is in the customization palette.
- [title](title.md): The title of the toolbar item.
- [toolTip](tooltip.md): The tooltip to display when someone hovers over the item in the toolbar.
