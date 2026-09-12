> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/selecteditemidentifier](https://developer.apple.com/documentation/appkit/nstoolbar/selecteditemidentifier)

# selectedItemIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

The identifier of the toolbar’s currently selected item.

## Declaration

```swift
var selectedItemIdentifier: NSToolbarItem.Identifier? { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the toolbar doesn’t have a selected item.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [willAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItem(withItemIdentifier:at:)](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.

# selectedItemIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

The identifier of the toolbar’s currently selected item.

## Declaration

```objectivec
@property (copy, nullable) NSToolbarItemIdentifier selectedItemIdentifier;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the toolbar doesn’t have a selected item.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [NSToolbarWillAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [NSToolbarDidRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItemWithItemIdentifier:atIndex:](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.
