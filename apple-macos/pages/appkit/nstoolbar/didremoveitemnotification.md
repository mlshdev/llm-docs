> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/didremoveitemnotification](https://developer.apple.com/documentation/appkit/nstoolbar/didremoveitemnotification)

# didRemoveItemNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Posted after an item is removed from a toolbar.

## Declaration

```swift
class let didRemoveItemNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification item is the `NSToolbar` object that removed the item. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| [itemKey](../nstoolbaruserinfokey/itemkey.md) | The `NSToolbarItem` object that was removed. |

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSToolbar.DidRemoveItemMessage](didremoveitemmessage.md).

- [toolbarDidRemoveItem(\_:)](../nstoolbardelegate/toolbardidremoveitem%28__%29.md): Tells the delegate that the toolbar removed the specified item.

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [willAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [insertItem(withItemIdentifier:at:)](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.

# NSToolbarDidRemoveItemNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS

Posted after an item is removed from a toolbar.

## Declaration

```objectivec
extern NSNotificationName NSToolbarDidRemoveItemNotification;
```

<a id="Discussion"></a>

## Discussion

The notification item is the `NSToolbar` object that removed the item. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| [NSToolbarItemKey](../nstoolbaruserinfokey/itemkey.md) | The `NSToolbarItem` object that was removed. |

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSToolbar.DidRemoveItemMessage](didremoveitemmessage.md).

- [toolbarDidRemoveItem:](../nstoolbardelegate/toolbardidremoveitem%28__%29.md): Tells the delegate that the toolbar removed the specified item.

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [NSToolbarWillAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [insertItemWithItemIdentifier:atIndex:](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.
