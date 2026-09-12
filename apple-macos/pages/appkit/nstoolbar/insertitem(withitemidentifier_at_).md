> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/insertitem(withitemidentifier:at:)](https://developer.apple.com/documentation/appkit/nstoolbar/insertitem(withitemidentifier:at:))

# insertItem(withItemIdentifier:at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Inserts an item into the toolbar at the specified index.

## Declaration

```swift
func insertItem(withItemIdentifier itemIdentifier: NSToolbarItem.Identifier, at index: Int)
```

## Parameters

- `itemIdentifier`: The identifier of the toolbar item to insert.
- `index`: The index at which to insert the item.

<a id="Discussion"></a>

## Discussion

Typically, you don’t call this method directly from your code. Instead, you specify your toolbar’s allowed items, and the set of default items you want to appear. After that, you let the user customize the toolbar.

Any changes you make to the toolbar appear in all [NSToolbar](../nstoolbar.md) objects with the same [identifier](identifier-swift.property.md) value. If a toolbar item with the specified identifier isn’t available, the toolbar calls the [toolbar(\_:itemForItemIdentifier:willBeInsertedIntoToolbar:)](../nstoolbardelegate/toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md) method of its delegate to get the item. This method does not trigger a call to your delegate’s [toolbar(\_:itemIdentifier:canBeInsertedAt:)](../nstoolbardelegate/toolbar%28__itemidentifier_canbeinsertedat_%29.md) method.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [willAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.

# insertItemWithItemIdentifier:atIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Inserts an item into the toolbar at the specified index.

## Declaration

```objectivec
- (void) insertItemWithItemIdentifier:(NSToolbarItemIdentifier) itemIdentifier atIndex:(NSInteger) index;
```

## Parameters

- `itemIdentifier`: The identifier of the toolbar item to insert.
- `index`: The index at which to insert the item.

<a id="Discussion"></a>

## Discussion

Typically, you don’t call this method directly from your code. Instead, you specify your toolbar’s allowed items, and the set of default items you want to appear. After that, you let the user customize the toolbar.

Any changes you make to the toolbar appear in all [NSToolbar](../nstoolbar.md) objects with the same [identifier](identifier-swift.property.md) value. If a toolbar item with the specified identifier isn’t available, the toolbar calls the [toolbar:itemForItemIdentifier:willBeInsertedIntoToolbar:](../nstoolbardelegate/toolbar%28__itemforitemidentifier_willbeinsertedintotoolbar_%29.md) method of its delegate to get the item. This method does not trigger a call to your delegate’s [toolbar:itemIdentifier:canBeInsertedAtIndex:](../nstoolbardelegate/toolbar%28__itemidentifier_canbeinsertedat_%29.md) method.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [NSToolbarWillAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [NSToolbarDidRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.
