> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemgroup/setselected(_:at:)](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/setselected(_:at:))

# setSelected(\_:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

Sets the selected state of a subitem in a grouped toolbar item.

## Declaration

```swift
func setSelected(_ selected: Bool, at index: Int)
```

## Parameters

- `selected`: If `true`, indicates whether to select a subitem, `false` otherwise.
- `index`: The index location of the subitem.

## See Also

### Working with subitems

- [subitems](subitems.md): The subitems of the grouped toolbar item.
- [selectedIndex](selectedindex.md): The index value for the most recently selected subitem of a grouped toolbar item.
- [isSelected(at:)](isselected%28at_%29.md): Indicates whether a specified index is currently selected.

# setSelected:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

Sets the selected state of a subitem in a grouped toolbar item.

## Declaration

```objectivec
- (void) setSelected:(BOOL) selected atIndex:(NSInteger) index;
```

## Parameters

- `selected`: If `true`, indicates whether to select a subitem, `false` otherwise.
- `index`: The index location of the subitem.

## See Also

### Working with subitems

- [subitems](subitems.md): The subitems of the grouped toolbar item.
- [selectedIndex](selectedindex.md): The index value for the most recently selected subitem of a grouped toolbar item.
- [isSelectedAtIndex:](isselected%28at_%29.md): Indicates whether a specified index is currently selected.
