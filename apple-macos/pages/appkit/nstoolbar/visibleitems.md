> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/visibleitems](https://developer.apple.com/documentation/appkit/nstoolbar/visibleitems)

# visibleItems (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

An array containing the toolbar’s currently visible items.

## Declaration

```swift
var visibleItems: [NSToolbarItem]? { get }
```

<a id="Discussion"></a>

## Discussion

This property doesn’t contain items in the overflow menu because those items aren’t visible.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [willAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItem(withItemIdentifier:at:)](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.

# visibleItems (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

An array containing the toolbar’s currently visible items.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<__kindof NSToolbarItem *> * visibleItems;
```

<a id="Discussion"></a>

## Discussion

This property doesn’t contain items in the overflow menu because those items aren’t visible.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [NSToolbarWillAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [NSToolbarDidRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItemWithItemIdentifier:atIndex:](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.
