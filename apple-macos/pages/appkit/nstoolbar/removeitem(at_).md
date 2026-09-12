> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/removeitem(at:)](https://developer.apple.com/documentation/appkit/nstoolbar/removeitem(at:))

# removeItem(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Removes the item at the specified index in the toolbar.

## Declaration

```swift
func removeItem(at index: Int)
```

## Parameters

- `index`: The index of the item to remove.

<a id="Discussion"></a>

## Discussion

Typically, you don’t call this method directly from your code. Instead, you specify your toolbar’s allowed items, and the set of default items you want to appear. After that, you let the user customize the toolbar.

Any changes you make to the toolbar appear in all [NSToolbar](../nstoolbar.md) objects with the same [identifier](identifier-swift.property.md) value. This method does not trigger a call to your delegate’s [toolbar(\_:itemIdentifier:canBeInsertedAt:)](../nstoolbardelegate/toolbar%28__itemidentifier_canbeinsertedat_%29.md) method for the removal of the item.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [willAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItem(withItemIdentifier:at:)](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.

# removeItemAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS

Removes the item at the specified index in the toolbar.

## Declaration

```objectivec
- (void) removeItemAtIndex:(NSInteger) index;
```

## Parameters

- `index`: The index of the item to remove.

<a id="Discussion"></a>

## Discussion

Typically, you don’t call this method directly from your code. Instead, you specify your toolbar’s allowed items, and the set of default items you want to appear. After that, you let the user customize the toolbar.

Any changes you make to the toolbar appear in all [NSToolbar](../nstoolbar.md) objects with the same [identifier](identifier-swift.property.md) value. This method does not trigger a call to your delegate’s [toolbar:itemIdentifier:canBeInsertedAtIndex:](../nstoolbardelegate/toolbar%28__itemidentifier_canbeinsertedat_%29.md) method for the removal of the item.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [NSToolbarWillAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [NSToolbarDidRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItemWithItemIdentifier:atIndex:](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
