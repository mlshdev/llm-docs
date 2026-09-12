> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbaritemgroup/selectionmode-swift.enum](https://developer.apple.com/documentation/appkit/nstoolbaritemgroup/selectionmode-swift.enum)

# NSToolbarItemGroup.SelectionMode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+

A value that indicates how a grouped toolbar item selects its subitems.

## Declaration

```swift
enum SelectionMode
```

## Topics

### Selection modes

- [NSToolbarItemGroup.SelectionMode.momentary](selectionmode-swift.enum/momentary.md): The system temporarily highlights the select group item when the user selects the item.
- [NSToolbarItemGroup.SelectionMode.selectAny](selectionmode-swift.enum/selectany.md): The system toggles a highlight on any item selected.
- [NSToolbarItemGroup.SelectionMode.selectOne](selectionmode-swift.enum/selectone.md): The system displays a highlighted mode on the most recent item selected.

### Initializers

- [init(rawValue:)](selectionmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Items

- [NSToolbarItem](../nstoolbaritem.md): A single item that appears in a window’s toolbar.
- [NSToolbarItemGroup](../nstoolbaritemgroup.md): A group of subitems in a toolbar item.
- [NSToolbarItemGroup.ControlRepresentation](controlrepresentation-swift.enum.md)
- [NSMenuToolbarItem](../nsmenutoolbaritem.md): A control that presents a menu in a window’s toolbar.
- [NSSearchToolbarItem](../nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](../nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.

# NSToolbarItemGroupSelectionMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ · macOS 10.15+

A value that indicates how a grouped toolbar item selects its subitems.

## Declaration

```objectivec
enum NSToolbarItemGroupSelectionMode : NSInteger;
```

## Topics

### Selection modes

- [NSToolbarItemGroupSelectionModeMomentary](selectionmode-swift.enum/momentary.md): The system temporarily highlights the select group item when the user selects the item.
- [NSToolbarItemGroupSelectionModeSelectAny](selectionmode-swift.enum/selectany.md): The system toggles a highlight on any item selected.
- [NSToolbarItemGroupSelectionModeSelectOne](selectionmode-swift.enum/selectone.md): The system displays a highlighted mode on the most recent item selected.

## See Also

### Items

- [NSToolbarItem](../nstoolbaritem.md): A single item that appears in a window’s toolbar.
- [NSToolbarItemGroup](../nstoolbaritemgroup.md): A group of subitems in a toolbar item.
- [NSToolbarItemGroupControlRepresentation](controlrepresentation-swift.enum.md)
- [NSMenuToolbarItem](../nsmenutoolbaritem.md): A control that presents a menu in a window’s toolbar.
- [NSSearchToolbarItem](../nssearchtoolbaritem.md): A toolbar item that contains a search field optimized for performing text-based searches.
- [NSTrackingSeparatorToolbarItem](../nstrackingseparatortoolbaritem.md): A toolbar separator that aligns with the vertical split view in the same window.
