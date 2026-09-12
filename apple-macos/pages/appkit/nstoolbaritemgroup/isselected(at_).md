> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemgroup/isselected(at:)](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/isselected(at:))

# isSelected(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Indicates whether a specified index is currently selected.

## Declaration

```swift
func isSelected(at index: Int) -> Bool
```

## Parameters

- `index`: The index of the subitems in a grouped toolbar item.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the specified index is currently selected.

<a id="Discussion"></a>

## Discussion

Use this method when you specify the [NSToolbarItemGroup.SelectionMode.selectAny](selectionmode-swift.enum/selectany.md) selection mode for the grouped toolbar item to determine which subitems are currently selected.

## See Also

### Working with subitems

- [subitems](subitems.md): The subitems of the grouped toolbar item.
- [selectedIndex](selectedindex.md): The index value for the most recently selected subitem of a grouped toolbar item.
- [setSelected(\_:at:)](setselected%28__at_%29.md): Sets the selected state of a subitem in a grouped toolbar item.

# isSelectedAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

Indicates whether a specified index is currently selected.

## Declaration

```objectivec
- (BOOL) isSelectedAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the subitems in a grouped toolbar item.

<a id="return-value"></a>

## Return Value

A Boolean value indicating whether the specified index is currently selected.

<a id="Discussion"></a>

## Discussion

Use this method when you specify the [NSToolbarItemGroupSelectionModeSelectAny](selectionmode-swift.enum/selectany.md) selection mode for the grouped toolbar item to determine which subitems are currently selected.

## See Also

### Working with subitems

- [subitems](subitems.md): The subitems of the grouped toolbar item.
- [selectedIndex](selectedindex.md): The index value for the most recently selected subitem of a grouped toolbar item.
- [setSelected:atIndex:](setselected%28__at_%29.md): Sets the selected state of a subitem in a grouped toolbar item.
