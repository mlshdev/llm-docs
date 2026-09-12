> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemgroup/selectedindex](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/selectedindex)

# selectedIndex (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

The index value for the most recently selected subitem of a grouped toolbar item.

## Declaration

```swift
var selectedIndex: Int { get set }
```

<a id="Discussion"></a>

## Discussion

When using the [NSToolbarItemGroup.SelectionMode.selectAny](selectionmode-swift.enum/selectany.md) or [NSToolbarItemGroup.SelectionMode.momentary](selectionmode-swift.enum/momentary.md) selection mode, don’t assume that this value represents the selected subitem. This method returns the index of the most recently selected subitem.

To determine if a specific subitem of a grouped toolbar item is selected, use the [isSelected(at:)](isselected%28at_%29.md) method.

## See Also

### Working with subitems

- [subitems](subitems.md): The subitems of the grouped toolbar item.
- [isSelected(at:)](isselected%28at_%29.md): Indicates whether a specified index is currently selected.
- [setSelected(\_:at:)](setselected%28__at_%29.md): Sets the selected state of a subitem in a grouped toolbar item.

# selectedIndex (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

The index value for the most recently selected subitem of a grouped toolbar item.

## Declaration

```objectivec
@property NSInteger selectedIndex;
```

<a id="Discussion"></a>

## Discussion

When using the [NSToolbarItemGroupSelectionModeSelectAny](selectionmode-swift.enum/selectany.md) or [NSToolbarItemGroupSelectionModeMomentary](selectionmode-swift.enum/momentary.md) selection mode, don’t assume that this value represents the selected subitem. This method returns the index of the most recently selected subitem.

To determine if a specific subitem of a grouped toolbar item is selected, use the [isSelectedAtIndex:](isselected%28at_%29.md) method.

## See Also

### Working with subitems

- [subitems](subitems.md): The subitems of the grouped toolbar item.
- [isSelectedAtIndex:](isselected%28at_%29.md): Indicates whether a specified index is currently selected.
- [setSelected:atIndex:](setselected%28__at_%29.md): Sets the selected state of a subitem in a grouped toolbar item.
