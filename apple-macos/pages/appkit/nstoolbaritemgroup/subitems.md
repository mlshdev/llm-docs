> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemgroup/subitems](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/subitems)

# subitems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.5+

The subitems of the grouped toolbar item.

## Declaration

```swift
var subitems: [NSToolbarItem] { get set }
```

<a id="Discussion"></a>

## Discussion

By default, an [NSToolbarItemGroup](../nstoolbaritemgroup.md) instance has an empty array of subitems.

## See Also

### Related Documentation

- [NSToolbarItemGroup](../nstoolbaritemgroup.md): A group of subitems in a toolbar item.

### Working with subitems

- [selectedIndex](selectedindex.md): The index value for the most recently selected subitem of a grouped toolbar item.
- [isSelected(at:)](isselected%28at_%29.md): Indicates whether a specified index is currently selected.
- [setSelected(\_:at:)](setselected%28__at_%29.md): Sets the selected state of a subitem in a grouped toolbar item.

# subitems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

The subitems of the grouped toolbar item.

## Declaration

```objectivec
@property (copy) NSArray<__kindof NSToolbarItem *> * subitems;
```

<a id="Discussion"></a>

## Discussion

By default, an [NSToolbarItemGroup](../nstoolbaritemgroup.md) instance has an empty array of subitems.

## See Also

### Related Documentation

- [NSToolbarItemGroup](../nstoolbaritemgroup.md): A group of subitems in a toolbar item.

### Working with subitems

- [selectedIndex](selectedindex.md): The index value for the most recently selected subitem of a grouped toolbar item.
- [isSelectedAtIndex:](isselected%28at_%29.md): Indicates whether a specified index is currently selected.
- [setSelected:atIndex:](setselected%28__at_%29.md): Sets the selected state of a subitem in a grouped toolbar item.
