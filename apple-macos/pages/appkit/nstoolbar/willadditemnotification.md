> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/willadditemnotification](https://developer.apple.com/documentation/appkit/nstoolbar/willadditemnotification)

# willAddItemNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

Posts before the toolbar adds a new item.

## Declaration

```swift
class let willAddItemNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification item is the `NSToolbar` object that’s about to add the item. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| [itemKey](../nstoolbaruserinfokey/itemkey.md) | The `NSToolbarItem` object being added. |

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSToolbar.WillAddItemMessage](willadditemmessage.md).

- [toolbarWillAddItem(\_:)](../nstoolbardelegate/toolbarwilladditem%28__%29.md): Tells the delegate that the toolbar is about to add the specified item.

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItem(withItemIdentifier:at:)](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.

# NSToolbarWillAddItemNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.1+ · macOS

Posts before the toolbar adds a new item.

## Declaration

```objectivec
extern NSNotificationName NSToolbarWillAddItemNotification;
```

<a id="Discussion"></a>

## Discussion

The notification item is the `NSToolbar` object that’s about to add the item. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| [NSToolbarItemKey](../nstoolbaruserinfokey/itemkey.md) | The `NSToolbarItem` object being added. |

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSToolbar.WillAddItemMessage](willadditemmessage.md).

- [toolbarWillAddItem:](../nstoolbardelegate/toolbarwilladditem%28__%29.md): Tells the delegate that the toolbar is about to add the specified item.

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [centeredItemIdentifiers](centereditemidentifiers.md): The set of custom items to display in the center of the toolbar.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [NSToolbarDidRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItemWithItemIdentifier:atIndex:](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.
