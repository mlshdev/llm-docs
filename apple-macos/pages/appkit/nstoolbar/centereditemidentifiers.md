> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/centereditemidentifiers](https://developer.apple.com/documentation/appkit/nstoolbar/centereditemidentifiers)

# centeredItemIdentifiers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+

The set of custom items to display in the center of the toolbar.

## Declaration

```swift
var centeredItemIdentifiers: Set<NSToolbarItem.Identifier> { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to the items you want to appear together in the center of the toolbar. Specify the initial order of the items using the [toolbarDefaultItemIdentifiers(\_:)](../nstoolbardelegate/toolbardefaultitemidentifiers%28__%29.md) method of your toolbar delegate object.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [willAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [didRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItem(withItemIdentifier:at:)](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItem(at:)](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.

# centeredItemIdentifiers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

The set of custom items to display in the center of the toolbar.

## Declaration

```objectivec
@property (copy) NSSet<NSString *> * centeredItemIdentifiers;
```

<a id="Discussion"></a>

## Discussion

Set this property to the items you want to appear together in the center of the toolbar. Specify the initial order of the items using the [toolbarDefaultItemIdentifiers:](../nstoolbardelegate/toolbardefaultitemidentifiers%28__%29.md) method of your toolbar delegate object.

## See Also

### Managing items on the toolbar

- [items](items.md): An array containing the toolbar’s current items, in order.
- [visibleItems](visibleitems.md): An array containing the toolbar’s currently visible items.
- [selectedItemIdentifier](selecteditemidentifier.md): The identifier of the toolbar’s currently selected item.
- [NSToolbarWillAddItemNotification](willadditemnotification.md): Posts before the toolbar adds a new item.
- [NSToolbarDidRemoveItemNotification](didremoveitemnotification.md): Posted after an item is removed from a toolbar.
- [insertItemWithItemIdentifier:atIndex:](insertitem%28withitemidentifier_at_%29.md): Inserts an item into the toolbar at the specified index.
- [removeItemAtIndex:](removeitem%28at_%29.md): Removes the item at the specified index in the toolbar.
